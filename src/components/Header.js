import React, { useState } from "react";

// ICONS
import { ImMenu } from "react-icons/im";
import { BsFillCartCheckFill } from "react-icons/bs";

// IMAGE
import logo from "../utils/logo2.png";
import { useContext } from "react";
import { ProductContext } from "../hooks/useProductContext";

import ModalForm from "./ModalForm";
import { Link } from "react-router-dom";
import { SideBarContext } from "../hooks/SideBarContext";
import { useCartContext } from "../hooks/useCartContext";
import CartItem from "./CartItem";



const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const[openModal, setOpenModal] = useState(false)

  const { open, setOpen  } = useContext(SideBarContext)
  const { amount } = useContext(useCartContext)
  const {addCart, handleCloses } = useContext(useCartContext)



  

  const[openFormModal, setOpenFormModal] = useState(false)

  const handleOpenModal = () => {
    setOpenFormModal(true);
   

  };

  const handleCloseModal = () => {
    setOpenFormModal(false)
  }


  const toogleNav = () => {
    setIsOpen(!isOpen);
  };

  const toogleNav2 = () => {
    setOpen(!open);
  };

  const { products, searchName, searchCategory, category,setCategory, searchPrice, preco, setPreco} = useContext(ProductContext)
  const {searchProduct, setSearchProduct} = useContext(ProductContext)


  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  

  return (
    <header className="fixed top-0  w-full z-10 shadow-md">
      <nav className="flex items-center justify-between flex-wrap  bg-[#31537b]   ">
        <div className="flex items-center text-white ml-3  " >
          <div className="">
            <span className="" >
              <Link to='/'>
              <img onClick={scrollToTop}
                src={logo}
                alt="Logo escrito astrodev out fit com emblema de um planeta"
                className="w-24 h-24 "
              />
              </Link>
            </span>
          </div>
        </div>

        <div className="block lg:hidden">
          <button
            onClick={toogleNav}
            className="flex items-center px-3 py-2 rounded border border-gray-500"
          >
            <ImMenu size={20} />
          </button>
        </div>

        <div
          className={`w-full flex-grow lg:flex lg:items-center lg:w-auto ${
            isOpen ? "" : "hidden"
          }`}
        >
          <ul className=" lg:flex justify-end flex-1 items-center cursor-pointer ">
            <li className="mr-3  ">
              <div className="pt-2 relative mx-auto text-gray-600 ">
                <input
                  className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
                  type="search"
                  name="search"
                  placeholder="Pesquisar"
                  onChange={(e) => setSearchProduct(e.target.value)}
                  value={searchProduct}
                />
                <button
                  type="submit"
                  className="absolute right-0 top-0 mt-5 mr-4"
                >
                  <svg
                    className="text-gray-600 h-4 w-4 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    id="Capa_1"
                    x="0px"
                    y="0px"
                    viewBox="0 0 56.966 56.966"
                    width="512px"
                    height="512px"
                  >
                    <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                  </svg>
                </button>
              </div>
            </li>

            <li className="mr-3  ">
              <div className="inline-block text-white no-underline hover:text-gray-950 ease-in-out hover:text-underline py-2 px-4">
                <button>Sobre-nós</button>
                
              </div>
            </li>
            <li className="mr-3">
              <div className="inline-block text-white no-underline hover:text-gray-950 ease-in-out hover:text-underline py-2 px-4">
              <select name='filter-category' id="filters" value={category} 
                onChange={(e) => setCategory(e.target.value)}
                className=" block appearance-none w-full   bg-[#31537b] text-white py-3 px-4 pr-8 rounded leading-tight focus:outline-none ">
                 <option value="">Produtos</option>
                 <option value="Camiseta">Camiseta</option>
                 <option value="Almofada">Almofada</option>
                 <option value="Caneca">Caneca</option>
                 <option value="Moleton">Moleton</option>
                 </select>
              </div>
            </li>
            <li className="mr-3">
              <div className="inline-block text-white  hover:text-gray-950 ease-in-out hover:text-underline py-2 px-4">
                Contato
              </div>
            </li>
            <li className="mr-3">
              <div className={`inline-block text-white  hover:text-gray-950 ease-in-out hover:text-underline py-2 px-4 first-letter:$`}>
              <button onClick={handleOpenModal}>Login</button>
              <ModalForm handleOpenModal={handleOpenModal} openFormModal={openFormModal} handleCloseModal={handleCloseModal}/>
              {/* {openFormModal && <ModalForm />} */}
              
              
              </div>
            </li>
           

            <li className="mr-3">
              <button onClick={toogleNav2} 
              className="inline-block text-white no-underline hover:text-gray-950 ease-in-out hover:text-underline py-2 px-4">
                {amount}
              
                <BsFillCartCheckFill size={20}  />
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;