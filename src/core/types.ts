export interface MapMetaData {
    name: string;
    author: string;
    created: string;
    tileSize: number;
}

export interface TileLayer {
    id: string;
    type: "tile";
    grid: number[][];
}

export interface Entity {
    id: string;
    type: string;
    x: number;
    y: number;
    properties: Record<string, any>;
}

export interface MapData {
    width: number;
    height: number;
    layers: TileLayer[];
    entities: Entity[];
}

export interface TylMap {
    version: string;
    metadata: MapMetaData;
    map: MapData;
    tileset: {
        id: string;
        source: string;
    };
}