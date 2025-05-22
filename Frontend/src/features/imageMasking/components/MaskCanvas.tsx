import React, { useRef, useState, RefObject } from 'react';
import { Stage, Layer, Image as KonvaImage, Line } from 'react-konva';
import Konva from 'konva';
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
        setLines([...lines, { tool: 'brush', points: [pos.x, pos.y] }]);
    }

    const handleMouseMove = (e: any) => {
        if (!isDrawing.current) return;
        const stage = e.target.getStage();
        const point = stage.getPointerPosition();
        const lastLine = lines[lines.length - 1]; // 가장 최근 추가된 선
        lastLine.points = lastLine.points.concat([point.x, point.y]); // 현재 좌표 붙이기
        lines.splice(lines.length - 1, 1, lastLine); // 마지막 선을 갱신 
        setLines([...lines]);
    }

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
                onMousemove={handleMouseMove}
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