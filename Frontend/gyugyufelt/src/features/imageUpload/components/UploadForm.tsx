import React, { useState } from 'react';
import { uploadImage } from '../api'
import { ColorInfo } from '../../../types/color';
import axios from 'axios';

export const UploadForm = () => {
    const [image, setImage] = useState<File | null>(null)
    const [preview, setPreview] = useState('');
    const [colors, setColors] = useState<ColorInfo[]>([]);
    const [loading, setLoading] = useState(false);

    // <Input> 태그에서발생한 change 이벤트 타입
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setImage(file);
            setPreview(URL.createObjectURL(file));
        }
    };

    const handleUpload = async () => {
        if (!image) return;
        setLoading(true);

        try {
            const result = await uploadImage(image);
            setColors(result);
            console.log(">>>>>>>>>>>>>>>>>222");
        } catch (err) {
            alert('업로드가 실패하였습니다. ');
            console.log(">>>>>>>>>>>>>>>>>111");
            if (axios.isAxiosError(err)) {
                console.error('Axios 에러:', err.response?.data || err.message);
            } else {
                console.error('알 수 없는 에러:', err);
            }
        } finally {

            setLoading(false);
        }
    }
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-6 py-12">
            <h1 className="text-4xl font-light text-neutral-800 mb-8">대표 색상 추출기 🎨</h1>

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
                <img
                    src={preview}
                    alt="preview"
                    className="mt-6 w-64 rounded-2xl shadow-lg border"
                />
            )}

            <button
                onClick={handleUpload}
                disabled={!image || loading}
                className="mt-6 bg-black text-white px-6 py-3 rounded-xl shadow-md hover:bg-gray-900 transition-all duration-200"
            >
                {loading ? '업로드 중...' : '색상 추출하기'}
            </button>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mt-10">
                {colors.map((color, idx) => (
                    <div key={idx} className="flex flex-col items-center">
                        <div
                            className="w-16 h-16 rounded-full border shadow"
                            style={{ backgroundColor: color.hex }}
                        ></div>
                        <span className="mt-1 text-sm text-gray-600">{color.hex}</span>
                        <span className="text-xs text-gray-400">{color.ratio.toFixed(2)}%</span>
                    </div>
                ))}
            </div>
        </div>
    );


}