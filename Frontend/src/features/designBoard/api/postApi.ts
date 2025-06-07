import axios from 'axios';

export async function createDesignPost(formData: FormData) {
    return await axios.post('/api/posts', formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });
}
