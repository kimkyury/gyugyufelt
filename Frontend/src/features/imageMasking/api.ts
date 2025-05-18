import { API_BASE_URL } from '../../lib/apiClient'
import axios from 'axios';

export async function sendMaskedImage(formData: FormData) {

    const res = await fetch(`${API_BASE_URL}/api/color/masked`, {
        method: 'POST',
        body: formData,
    });
    const data = await res.json();
    console.log('분석 결과:', data);

    return data;
}

