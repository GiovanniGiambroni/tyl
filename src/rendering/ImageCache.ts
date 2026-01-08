export class ImageCache {
    private static cache = new Map<string, HTMLImageElement>();

    static load(src: string) : HTMLImageElement {
        if (this.cache.has(src)) {
            return this.cache.get(src)!;
        }

        const img = new Image();
        img.src = src;
        this.cache.set(src, img);
        return img;
    }
}