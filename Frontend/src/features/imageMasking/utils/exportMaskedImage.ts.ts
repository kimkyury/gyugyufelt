import Konva from 'konva';
import { sendMaskedImage } from '@features/imageMasking/api';


/***
 * Masking된 이미지를 추출
 * 
 */
export async function exportMaskedImage(
    stage: Konva.Stage,
    originalImage?: File

    // Promise<void> :: 비동기 함수 but 반환값 X
): Promise<void> {


    const formData = new FormData();

    // 변환: Konva의 <Stage />  -> [dat:image/png;base64,..]
    const dataURL = stage.toDataURL({ pixelRatio: 1 });
    const blob = await (await fetch(dataURL)).blob();
    if (originalImage)
        formData.append('originalImage', originalImage);
    formData.append('maskImage', blob);

    await sendMaskedImage(formData);
}