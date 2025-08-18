import { useEffect, useRef } from "react";

interface FocusVerticalSliceProps {
    src: string;
    typeImagePosition?: number
    blurPx?: number;      // Blur strength in pixels
    style?: React.CSSProperties;
}

const FocusVerticalSlice: React.FC<FocusVerticalSliceProps> = ({
    src,
    typeImagePosition = 0,
    blurPx,
    style = {},
}) => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const numberOfCardVendors = 6

    useEffect(() => {
        const img = new Image();
        img.src = src;

        img.onload = () => {
            const canvas = canvasRef.current;
            if (!canvas) return;

            const w = img.naturalWidth;
            const h = img.naturalHeight;
            const ctx = canvas.getContext("2d");

            if (!ctx) return;

            // Match canvas size to image size
            canvas.width = w;
            canvas.height = h;

            //determine focus slice
            const focusSliceWidth = (canvas.width / numberOfCardVendors) // X position where the focused or sharp slice starts
            const focusSliceStart = (typeImagePosition * focusSliceWidth) + 5 // Width of the focused or sharp slice

            // Step 1: Draw blurred background
            ctx.filter = `blur(${blurPx}px)`;
            ctx.drawImage(img, 0, 0, w, h);

            // Step 2: Clip the vertical slice and redraw sharp
            ctx.filter = "none";
            ctx.save();
            ctx.beginPath();
            ctx.rect(focusSliceStart, 0, focusSliceWidth, h);
            ctx.clip();
            ctx.drawImage(img, 0, 0, w, h);
            ctx.restore();
        };
    }, [src, typeImagePosition, blurPx]);

    return <canvas ref={canvasRef} style={style} />;
};
export default FocusVerticalSlice