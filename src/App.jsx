import Main from "./components/Main"
import Navbar from "./components/Navbar"
import Page5 from "./components/Page5"

function App() {

  return (
    <>
      <Navbar/>
    <div className="flex flex-col justify-center items-center max-w-screen">
        <Main/>
        <Page5/>
    </div>
    </>
  )
}

export default App
