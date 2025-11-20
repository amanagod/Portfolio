import { useState } from "react"
import Navbar from "./components/navbar";
import Footer from "./components/footer";
function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    < >

<Navbar />

<Footer />
    </>
  )
}

export default App
