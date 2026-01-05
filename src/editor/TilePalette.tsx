import { BASIC_TILESET } from "../core/tileset";
import { useEditorStore } from "../app/store";

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
                        className={'h-12 flex items-center justify-center text-xs font-medium border rounded ${isSelected ? "border-yellow-400 : border-gray-700}" }'}
                        style={{ backgroundColor: tile.color }}
                    >
                        {tile.name}
                    </button>
                )
            })}
        </div>
    );
}