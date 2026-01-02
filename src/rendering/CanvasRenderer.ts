export class CanvasRenderer {
    private ctx: CanvasRenderingContext2D;

    constructor(ctx: CanvasRenderingContext2D){
        this.ctx = ctx;
    }

    clear(width: number, height: number){
        this.ctx.clearRect(0, 0, width, height);
    }

    drawGrid(
        cols: number,
        rows: number,
        tileSize: number,
        canvasWidth: number,
        canvasHeight: number
    ){
        this.ctx.strokeStyle = "rgba(255,255,255,0.15)";
        this.ctx.lineWidth = 1;

        // Draw Columns
        for (let x = 0; x <= cols; x++){
            const px = x * tileSize;
            if (px > canvasWidth) break;

            this.ctx.beginPath();
            this.ctx.moveTo(px, 0);
            this.ctx.lineTo(px, canvasHeight);
            this.ctx.stroke();
        }

        // Draw rows
        for (let y = 0; y <= rows; y++) {
            const py = y * tileSize;
            if (py > canvasHeight) break;

            this.ctx.beginPath();
            this.ctx.moveTo(0, py);
            this.ctx.lineTo(canvasWidth, py);
            this.ctx.stroke();
        }
    }
}