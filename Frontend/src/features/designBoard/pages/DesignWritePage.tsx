import React, { useEffect, useState } from 'react';
import { generateAnonymousNickname } from '@utils/generateNickname';
import { createDesignPost } from '../api/postApi';

export const DesignWritePage: React.FC = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [level, setLevel] = useState('beginner');
    const [feltModelId, setFeltModelId] = useState('');
    const [image, setImage] = useState<File | null>(null);
    const [nickname, setNickname] = useState('');

    useEffect(() => {
        setNickname(generateAnonymousNickname());
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!title || !content || !image) {
            alert('제목, 내용, 이미지는 필수입니다!');
            return;
        }

        const formData = new FormData();
        formData.append('title', title);
        formData.append('content', content);
        formData.append('level', level);
        formData.append('felt_model_id', feltModelId);
        formData.append('nickname', nickname);
        formData.append('image', image);

        try {
            await createDesignPost(formData);
            alert('도안 게시글이 등록되었습니다!');
        } catch (err) {
            alert('업로드 실패!');
            console.error(err);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto p-6 bg-white rounded-lg shadow">
            <h2 className="text-2xl font-bold mb-4">도안 공유하기 🧶</h2>

            <input type="text" placeholder="제목" value={title} onChange={e => setTitle(e.target.value)}
                className="w-full mb-3 p-2 border rounded" />

            <textarea placeholder="도안 설명" value={content} onChange={e => setContent(e.target.value)}
                className="w-full mb-3 p-2 border rounded min-h-[120px]" />

            <select value={level} onChange={e => setLevel(e.target.value)}
                className="w-full mb-3 p-2 border rounded">
                <option value="beginner">초급</option>
                <option value="intermediate">중급</option>
                <option value="advanced">고급</option>
            </select>

            <select value={feltModelId} onChange={e => setFeltModelId(e.target.value)}
                className="w-full mb-3 p-2 border rounded">
                <option value="">도안 종류 선택</option>
                <option value="1">동물</option>
                <option value="2">캐릭터</option>
                {/* 실제 모델 리스트는 API로 받아오기 */}
            </select>

            <input type="file" onChange={e => setImage(e.target.files?.[0] ?? null)}
                className="mb-3" accept="image/*" />

            <button type="submit"
                className="w-full py-2 px-4 bg-indigo-600 text-white rounded hover:bg-indigo-700">
                도안 업로드
            </button>
        </form>
    );
};
