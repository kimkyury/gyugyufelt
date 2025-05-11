import { API_BASE_URL } from '../../lib/apiClient'
import axios from 'axios';

import { ColorInfo } from '../../types/color';


export const uploadImage = async (image: File): Promise<ColorInfo[]> => {
    const formData = new FormData();
    formData.append('image', image);

    const response = await axios.post<ColorInfo[]>(
        `${API_BASE_URL}/api/image/upload`,
        formData,
        {
            headers: {
                'Content-Type': 'multipart/form-data'
            },
        }
    );

    return response.data;
}