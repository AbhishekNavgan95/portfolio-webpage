import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Error from "./pages/Error"
import CreateProject from "./pages/CreateProject"
import { useEffect, useState } from "react"
import BackToTop from "./components/BackToTop"

function App() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [])

  return (
    <>
      <div className="font-mono bg-light text-accent overflow-hidden">
        {
          showButton && <BackToTop />
        }
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
