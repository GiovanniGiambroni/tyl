import { EditorCanvas } from './editor/EditorCanvas'
import './styles/global.css'

function App() {
  return (
    <>
      <div className="w-screen h-screen flex">
        <div className="w-64 bg-gray-900 text-white">
          Toolbar
        </div>
        <div className="flex-1 bg-gray-800">
          <EditorCanvas />
        </div>
      </div>
    </>
  )
}

export default App
