// BrushControls.tsx
import React from 'react';

/***
 * Brush 설정, UI 별도 컴포넌트 관리
 */
interface BrushControlsProps {
    color: string;
    size: number;
    onColorChange: (c: string) => void;
    onSizeChange: (s: number) => void;
}

export const BrushControls: React.FC<BrushControlsProps> = ({
    color,
    size,
    onColorChange,
    onSizeChange,
}) => {
    return (
        <div style={{ marginBottom: '10px' }}>
            <label>
                색상:
                <input
                    type="color"
                    value={color.slice(0, 7)} // rgba -> hex
                    onChange={(e) => onColorChange(e.target.value + '80')}
                />
            </label>
            <label style={{ marginLeft: '10px' }}>
                굵기:
                <input
                    type="range"
                    min={1}
                    max={50}
                    value={size}
                    onChange={(e) => onSizeChange(Number(e.target.value))}
                />
            </label>
        </div>
    );
};
