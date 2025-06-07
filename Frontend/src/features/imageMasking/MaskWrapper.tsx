import React, { useState } from 'react';
import { MaskCanvas } from './components/MaskCanvas';
import { useMasking } from './hooks/useMasking';
import { sendMaskedImage } from './api';


export const MaskWrapper: React.FC = () => {

    const {
        image,
        preview,
        stageRef,
        handleFileChange,
        getMaskDataURL
    } = useMasking();

    const [loading, setLoading] = useState(false);

    const handleExport = async () => {
        if (!stageRef.current) return;

        const dataURL = getMaskDataURL();
        if (!dataURL) return;
        setLoading(true);

        const blob = await (await fetch(dataURL)).blob();
        const formData = new FormData();
        formData.append('maskImage', blob);
        if (image) formData.append('originalImage', image);

        await sendMaskedImage(formData);
    };
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-6 py-12">
            <h1 className="text-4xl font-light text-neutral-800 mb-8">마스킹 기반 색상 추출기 🖌️</h1>

            <label className="cursor-pointer inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-white border border-gray-300 shadow-sm hover:shadow-md transition">
                <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="hidden"
                />
                <span className="text-sm text-gray-700">파일 선택</span>
            </label>

            {preview && (
                <div className="mt-6 border shadow-md rounded-lg overflow-hidden">
                    <MaskCanvas imageUrl={preview} stageRef={stageRef} />
                </div>
            )}

            {preview && (
                <button
                    onClick={handleExport}
                    disabled={loading}
                    className="mt-6 bg-indigo-600 text-white px-6 py-3 rounded-xl shadow-md hover:bg-indigo-700 transition-all duration-200"
                >
                    {loading ? '분석 중...' : '색상 추출 요청'}
                </button>
            )}
        </div>
    );
};