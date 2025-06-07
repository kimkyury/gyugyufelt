/***
 * Brush 설정, UI 별도 컴포넌트 관리
 */
interface BrushControlsProps {
    color: string;
    size: number;
    onColorChange: (c: string) => void;
    onSizeChange: (s: number) => void;
}