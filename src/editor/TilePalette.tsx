import { BASIC_TILESET } from "../core/tileset";
import { useEditorStore } from "../app/store";

const PALETTE_TILE_SIZE = 48;

export function TilePalette(){
    const selectedTileId = useEditorStore(state => state.selectedTileId);
    const setSelectedTile = useEditorStore(state => state.setSelectedTile);

    return (
        <div className="p-2 grid grid-cols-2 gap-2">
            {BASIC_TILESET.map(tile => {
                const isSelected = tile.id === selectedTileId;


                return (
                    <button
                        key={tile.id}
                        onClick={() => setSelectedTile(tile.id)}
                        title={tile.name}
                        className={'h-12 flex items-center justify-center text-xs font-medium border rounded hover:border-white transition-colors ${isSelected ? "border-yellow-400 : border-gray-700}" }'}
                    >
                        {tile.image ? (
                            <img
                                src={tile.image}
                                alt={tile.name}
                                className="w-full h-full object-contain block"
                                style={{imageRendering: "pixelated"}}
                            />
                        ) : (
                            <span className="text-xs">Empty</span>
                        )}
                    </button>
                )
            })}
        </div>
    );
}