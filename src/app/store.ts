import type { TylMap } from "../core/types";

export type Tool = "paint" | "erase" | "select";

export interface EditorState {
    map: TylMap | null;
    selectedTileId: number;
    activeLayerId: string;
    activeTool: Tool;
    zoom: number;
    offset: { x: number, y: number };
}