import { BrowserRouter, Routes, Route} from "react-router-dom"
import Contact from "./pages/Contact"
import Home from "./pages/Home"
import Gallery from "./pages/Gallery"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Recipe from "./pages/Recipe"



export default function App(){
  return (
    <BrowserRouter>
    <Header />
    <Routes>
    <Route path="/" element ={<Home/>}/>
<Route path="/Gallery" element ={<Gallery/>}/>
<Route path="/Contact" element={<Contact/>}/>
<Route path="/Recipe" element={<Recipe/>} />


    </Routes>
    <Footer />
    </BrowserRouter>
  )
}

