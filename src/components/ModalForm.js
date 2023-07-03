import React, { useState } from 'react'
import Modal from "react-modal";
import {AiOutlineClose} from 'react-icons/ai'
import ModalCadastrarForm from './ModalCadastrarForm';

const ModalForm = ({handleOpenModal, openFormModal, handleCloseModal}) => {
    const styles = {
        content: {
            top:'50%',
            left:'50%',
            right:'auto',
            botton:'auto',
            marginRight:'-50%',
            transform:'translate(-50%, -50%)',
            
        }
    }

    const[openFormModalCadastrar, setOpenFormModalCadastrar] = useState(false)

    const handleOpenModalCadastrar = () => {
      setOpenFormModalCadastrar(true);
     
  
    };
  
    const handleCloseModalCadastrar = () => {
      setOpenFormModalCadastrar(false)
    }

  return (
    <>
    <Modal isOpen={openFormModal} onRequestClose={handleCloseModal} style={styles}>

<button onClick={handleCloseModal}
 data-modal-target="authentication-modal" data-modal-toggle="authentication-modal" classNameName="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
 <AiOutlineClose />
</button>


<div className="w-full max-w-xs overflow-x-hidden">
  <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
        Username
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
    </div>
    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2" for="password">
        Password
      </label>
      <input className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
      
    </div>
    <div className="flex items-center justify-between ">
      <button onClick={handleOpenModalCadastrar} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline " type="button">
        Cadastrar
      </button>
      <ModalCadastrarForm handleOpenModalCadastrar={handleOpenModalCadastrar} handleCloseModalCadastrar={handleCloseModalCadastrar} 
      openFormModalCadastrar={openFormModalCadastrar} />

      <span className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800 p-10" href="#">
        Esqueceu sua senha?
      </span>
    </div>
  </form>
  <p className="text-center text-gray-500 text-xs">
    &copy;2020 Acme Corp. All rights reserved.
  </p>
</div>

</Modal>
    </>
  )
}

export default ModalForm
