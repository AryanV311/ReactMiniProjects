import { IoSearch } from "react-icons/io5";
import { IoIosCart } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import "./Navbar.css"

export const Navbar = () => {
  return (
    <div className='navbar'>
        <nav className='nav'>
            <div className='logo'>
                <img src="https://aartisto.com/wp-content/uploads/2020/11/myntra.png" alt="" height={"50px"}/>
            </div>
            <div className='search-bar'>
                <input type="text" placeholder='Search product ...' />
                <button><IoSearch/> Search</button>
            </div>
            <div className="checks">
                <p className="cart">Cart <IoIosCart /> </p>
                <p className="profile"><CgProfile /></p>
            </div>
        </nav>
    </div>
  )
}
