import { useState, useRef } from 'react';
import Konva from 'konva';

/***
 * 이미지 관리
 */
export function useMasking() {
    const [image, setImage] = useState<File | null>(null);
    const [preview, setPreview] = useState('');
    const stageRef = useRef<Konva.Stage | null>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setImage(file);
            setPreview(URL.createObjectURL(file));
        }
    };

    const getMaskDataURL = (): string | null =>
        stageRef.current?.toDataURL({ pixelRatio: 1 }) ?? null;

    return {
        image,
        preview,
        stageRef,
        handleFileChange,
        getMaskDataURL,
    };
}