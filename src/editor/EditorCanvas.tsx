import { useRef, useEffect } from "react";
import { CanvasRenderer } from "../rendering/CanvasRenderer";

export function EditorCanvas(){
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current!;
        canvas.width = 800;
        canvas.height = 600;

        const ctx = canvas.getContext("2d")!;
        const renderer = new CanvasRenderer(ctx);

        renderer.clear(canvas.width, canvas.height);
        renderer.drawGrid(40, 20, 32, canvas.width, canvas.height);
    }, []);

    return <canvas ref={canvasRef} />;
}