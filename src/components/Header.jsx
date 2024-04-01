import { Navbar , Button} from "flowbite-react";
import { Link } from "react-router-dom";

export default function Header(){
    return(
<Navbar lassName='border-b-2'>

<Link to="/" className='self-center whitespace-nowrap text-sm sm:text-xl font-semi-bold dark:text-white'>
<Button outline gradientDuoTone="tealToLime">
        Spicy MoMo
      </Button>
          </Link> 
          <Link to="/">
        Home
        </Link>
      
        <Link to="/Gallery">Gallery</Link> 
        <Link to="/Contact">Contact</Link> 
        <Link to="/Recipe">Recipe</Link> 

          <div className="flex md:order-2">
            <Link to="/">
              <Button gradientDuoTone="tealToLime">Let`s Go</Button>
              </Link>
      </div>
      
     
</Navbar> )
}