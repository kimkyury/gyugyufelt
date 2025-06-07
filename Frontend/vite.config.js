import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            "@/*": ["*"],
            '@utils': path.resolve(__dirname, 'src/utils'),
            '@components': path.resolve(__dirname, 'src/components'),
            '@features': path.resolve(__dirname, 'src/features'),
            '@pages': path.resolve(__dirname, 'src/pages'),
            '@types': path.resolve(__dirname, 'src/types'),
            '@lib': path.resolve(__dirname, 'src/lib'),
            '@api': path.resolve(__dirname, 'src/api')

        },
    }
})
