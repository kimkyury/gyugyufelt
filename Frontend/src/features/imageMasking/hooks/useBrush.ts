// useBrush.ts
import { useState } from 'react';

/***
 * 브러시 관련 상태 및 로직 관리
 */
export const useBrush = () => {
    const [brushColor, setBrushColor] = useState('rgba(255, 0, 0, 0.5)');
    const [brushSize, setBrushSize] = useState(10);

    return {
        brushColor,
        brushSize,
        setBrushColor,
        setBrushSize,
    };
};
