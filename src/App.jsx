import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Error from "./pages/Error"
import CreateProject from "./pages/CreateProject"

function App() {

  return (
    <>
      <div className="font-mono bg-light text-accent overflow-hidden">
        <div className="fixed inset-0 border-[10px] z-[5] border-current pointer-events-none"></div>
        <div className="w-full h-full overflow-y-auto">
          <Routes>
            <Route path="/">
              <Route index element={<Home />} />
              <Route path="add" element={<CreateProject />} />
              <Route path="*" element={<Error />} />
            </Route>
          </Routes>
        </div>
      </div>

    </>
  )
}

export default App
