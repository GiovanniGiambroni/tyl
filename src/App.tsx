import { EditorCanvas } from './editor/EditorCanvas'
import { TilePalette } from './editor/TilePalette'
import './styles/global.css'

function App() {
  return (
    <>
      <div className="w-screen h-screen flex text-white">
        <aside className="w-64 bg-gray-900 border-r border-gray-800">
          <h2 className="p-2 font-semibold">Tile</h2>
          <TilePalette />
        </aside>
        
        <main className='flex-1 bg-gray-800 flex items-center justify-center'>
          <EditorCanvas />
        </main>
      </div>
    </>
  )
}

export default App
