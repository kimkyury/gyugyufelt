import Konva from 'konva';

export interface MaskCanvasProps {
    imageUrl: string;
    stageRef: React.RefObject<Konva.Stage | null>;
}
