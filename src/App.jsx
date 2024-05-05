import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Error from "./pages/Error"
import Navbar from "./components/Navbar"

function App() {

  return (
    <>
    <div className="w-full font-mono min-h-screen bg-light text-accent">
      <div className="overflow-hidden">
        <Navbar />
      </div>
      <Routes>
        <Route path="/">
          <Route index element={<Home />}></Route>
          <Route path="about" element={<About />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </div >
    </>
  )
}

export default App
