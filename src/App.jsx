import Nav from "./components/Nav"
import Routers from "./components/utils/Routers"

function App() {

  return (
    <>
      <div className="w-screen lg:h-screen flex flex-col lg:flex-row bg-zinc-100 lg:overflow-y-hidden">
        <Nav />
        <Routers />
      </div>
    </>
  )
}

export default App
