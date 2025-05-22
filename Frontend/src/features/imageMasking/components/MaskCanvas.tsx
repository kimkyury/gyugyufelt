import React, { useRef, useState } from 'react';
import { Stage, Layer, Image as KonvaImage, Line } from 'react-konva';
import useImage from 'use-image';
import { MaskCanvasProps } from '@/types/maskingTypes';
import { useBrush } from '@features/imageMasking/hooks/useBrush'
import { BrushControls } from '@features/imageMasking/components/BrushControls'

// FC: 함수형 컴포넌트
// 자동으로 children 속성 타입이 포함됨
export const MaskCanvas: React.FC<MaskCanvasProps> = ({ imageUrl, stageRef }) => {

    const [image] = useImage(imageUrl)
    const [lines, setLines] = useState<any[]>([]);
    const isDrawing = useRef(false);  // 화면에 표시될 건 아니지만 기억해야 하는 상태
    const { brushColor, brushSize, setBrushColor, setBrushSize } = useBrush();

    // ------- 드로윙 좌표 저장
    const handleMouseDown = (e: any) => {
        isDrawing.current = true;
        const pos = e.target.getStage().getPointerPosition();
        setLines((prevLines) => [
            ...prevLines,
            {
                tool: 'brush',
                points: [pos.x, pos.y],
                color: brushColor,
                size: brushSize,
            },
        ]);
    };


    const handleMouseMove = (e: any) => {
        if (!isDrawing.current) return;
        const stage = e.target.getStage();
        const point = stage.getPointerPosition();

        setLines((prevLines) => {
            const lastLine = { ...prevLines[prevLines.length - 1] };
            const newPoints = lastLine.points.concat([point.x, point.y]);
            return [...prevLines.slice(0, -1), { ...lastLine, points: newPoints }];
        });
    };


    const handleMouseUp = () => {
        isDrawing.current = false;
    }


    return (
        <>
            <BrushControls
                color={brushColor}
                size={brushSize}
                onColorChange={setBrushColor}
                onSizeChange={setBrushSize}
            />
            <Stage
                ref={stageRef}
                width={image?.width || 500}
                height={image?.height || 500}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseup={handleMouseUp}
            >
                <Layer>
                    <KonvaImage image={image} />
                    {lines.map((line, i) => (
                        <Line
                            key={i}
                            points={line.points}
                            stroke={line.color}
                            strokeWidth={line.size}
                            tension={0.5}
                            lineCap="round"
                            globalCompositeOperation="source-over"
                        />
                    ))}
                </Layer>
            </Stage>
        </>
    );
};