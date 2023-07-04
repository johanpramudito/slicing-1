import { useState } from "react";
import Nav from '@/components/Nav'
import Logo from '@/components/Logo'
import Button from '@/components/Button'
import classnames from "classnames";

export default function Navbar() {
    const [offcanvas, setOffcanvas] = useState(false);

    return (
    <>
      <div className="flex items-center lg:w-9/12 md:w-11/12 w-11/12 mx-auto">
          <div className='w-3/12'>
            <Logo />
          </div>
          <div className='w-6/12 hidden md:block'>
            <Nav dir="horizontal" scheme="light" />
          </div>
          <div className='w-3/12 text-right hidden md:block'>
            <Button href="#contact" pill variant="outline-yellow" >Kontak</Button>
          </div>
          <div className="w-9/12 md:hidden text-right">
            <img src="/Beranda/menu.svg" alt="" className='inline-block' onClick={() => setOffcanvas(true)}/>
          </div>
      </div>

      <div className={classnames('fixed bg-white z-10 top-0 h-full w-full p-10 md:hidden transition-all', offcanvas ? "right-0" : "-right-full")}>
        <img src="/Beranda/x.svg" alt="" className="absolute top-8 right-8 w-8" onClick={() => setOffcanvas(false)}/>
        <Nav 
          scheme="dark"
          dir="vertical"
        />
      </div>  
        
    </>  
    );
}