import { useState } from "react"
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import SignUp from "./components/signup";
function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    < >

<Navbar />
<SignUp />
<Footer />
    </>
  )
}

export default App
