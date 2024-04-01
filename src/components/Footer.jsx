import "./../assets/syle.css"

import { Footer } from "flowbite-react";

export default function FooterHi() {
  return (
    <div className="footer-container"> 
   <Footer>
      <Footer.Copyright href="sisamkhadka.com.np" by="Sisam K.™" year={2024} />
      <Footer.LinkGroup>
        <Footer.Link href="/">Home</Footer.Link>
        <Footer.Link href="/Coffee">Help Me Buy Some Tea </Footer.Link>
        <Footer.Link href="/Recipe">Recipe</Footer.Link>
        <Footer.Link href="/Contact">Contact</Footer.Link>
      </Footer.LinkGroup>
    </Footer>
    </div>
  );
}
