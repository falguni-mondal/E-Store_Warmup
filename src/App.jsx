import Nav from "./components/Nav"
import Routers from "./components/utils/Routers"

function App() {

  return (
    <>
      <div className="h-screen w-screen flex bg-zinc-100">
        <Nav />
        <Routers />
      </div>
    </>
  )
}

export default App
