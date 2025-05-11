import axios from 'axios';


// Output DTO
export interface ColorInfo {
    hex: string;
    ratio: number;
}

export const uploadImage = async (image: File): Promise<ColorInfo[]> => {
    const formData = new FormData();
    formData.append('image', image);

    const response = await axios.post<ColorInfo[]>(
        'http://localhost:8080/api/image/upload',
        formData,
        {
            headers: {
                'Conent-Type': 'multipart/form-data'
            },
        }
    );

    return response.data;
}