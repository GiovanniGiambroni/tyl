import React, { useRef, useEffect } from "react";
import { CanvasRenderer } from "../rendering/CanvasRenderer";
import { useEditorStore } from "../app/store";
import { screenToGrid } from "../utils/grid";
import { BASIC_TILESET } from "../core/tileset";

export function EditorCanvas(){
    const canvasRef = useRef<HTMLCanvasElement>(null);

    const map = useEditorStore(state => state.map);
    const paintTile = useEditorStore(state => state.paintTile);

    useEffect(() => {
        const canvas = canvasRef.current!;
        canvas.width = 800;
        canvas.height = 600;

        const ctx = canvas.getContext("2d")!;
        const renderer = new CanvasRenderer(ctx);

        renderer.clear(canvas.width, canvas.height);
        renderer.drawGrid(
            map.map.width,
            map.map.height,
            map.metadata.tileSize,
            canvas.width,
            canvas.height
        );

        // Draw tiles (for now just color blocks)
        const layer = map.map.layers[0];
        layer.grid.forEach((row, y) => {
            row.forEach((tile, x) => {
                if (tile === 0) return;
                
                const tileDef = BASIC_TILESET.find(t => t.id === tile);
                if (!tileDef) return;

                ctx.fillStyle = tileDef.color;
                ctx.fillRect(
                    x * map.metadata.tileSize,
                    y * map.metadata.tileSize,
                    map.metadata.tileSize,
                    map.metadata.tileSize
                );
            });
        });
    }, [map]);

    function handleMouseDown(e: React.MouseEvent<HTMLCanvasElement>){
        const rect = canvasRef.current!.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const { x, y } = screenToGrid(mouseX, mouseY, map.metadata.tileSize);

        paintTile(x,y);
    }

    return (
        <canvas
        ref={canvasRef}
        onMouseDown={handleMouseDown}
        className="cursor-crosshair"
        />
    );
}