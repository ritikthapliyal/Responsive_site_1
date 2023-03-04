import React,{useState} from 'react'
import './Header.css'

function Header() {

    const [menuOpen,setMenuOpen] = useState(false)


    return (
        <div className='Header'>
            <span className='Logo'>M</span>
            <button onClick={()=>setMenuOpen(true)} className='Menu-btn'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </button>
            <div onClick={()=>{setMenuOpen(false)}} 
                className={menuOpen ? 'Header-options-wrapper visible' : 'Header-options-wrapper'}>
            </div>
            <ul
                onClick={(e)=>{e.stopPropagation()}} 
                className={menuOpen ? 'Header-options visible' : 'Header-options'}>
                <li className='Search-Menu-btn-1'>
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </svg>
                    </button>
                </li>
                <li>Sample</li>
                <li>Layouts</li>
                <li>Features</li>
                <li>Our Shop</li>
                <li>Buy Themes</li>
                <li className='Search-Menu-btn-2'>
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </svg>
                    </button>
                </li>
            </ul>
        </div>
    )
}

export default Header