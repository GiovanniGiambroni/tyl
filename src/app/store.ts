import { create } from "zustand";
import type { TylMap } from "../core/types";

export type Tool = "paint" | "erase";

interface EditorStore {
    map: TylMap;
    selectedTileId: number;
    activeLayerId: string;
    activeTool: Tool;
    
    setSelectedTile: (id: number) => void;
    setActiveLayer: (id: string) => void;
    setTool: (tool: Tool) => void;
    paintTile: (x: number, y: number) => void;
}

export const useEditorStore = create<EditorStore>((set,get) => ({
    map: {
        version: "1.0",
        metadata: {
            name: "untitled",
            author: "Gio",
            created: new Date().toISOString(),
            tileSize: 32
        },
        map: {
            width: 40,
            height: 20,
            layers: [
                {
                    id: "terrain",
                    type: "tile",
                    grid: Array.from({length: 20}, () => Array.from({length: 40}, () => 0))
                }
            ],
            entities: []
        },
        tileset: {
            id: "basic_platformer",
            source: ""
        }
    },

    selectedTileId: 1,
    activeLayerId: "terrain",
    activeTool: "paint",

    setSelectedTile: (id) => set({ selectedTileId: id }),
    setActiveLayer: (id) => set({ activeLayerId: id }),
    setTool: (tool) => set({ activeTool: tool }),
    paintTile: (x, y) => {
        const { map, selectedTileId, activeLayerId, activeTool } = get();
        const layer = map?.map.layers.find(l =>l.id === activeLayerId);
        
        if (!layer) return;
        if (!layer.grid[y] || layer.grid[y][x] === undefined) return;

        const newGrid = layer.grid.map(row => [...row])
        newGrid[y][x] = activeTool === "paint" ? selectedTileId : 0;

        layer.grid = newGrid;
        set({ map: {...map} });
    }
}));