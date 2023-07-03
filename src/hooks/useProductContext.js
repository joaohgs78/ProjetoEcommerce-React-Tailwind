import { createContext, useEffect, useState } from "react";

// PRODUTOS
import  db  from "../db/db";

// Varivel de crição do contexto
export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading] = useState(false)
  const [category, setCategory] = useState('')
  const [preco, setPreco] = useState('')

  // useefect q renderiza os produtos
  useEffect(() => {
    setProducts(db);
  }, []);

  console.log(products);



  const [searchProduct, setSearchProduct] = useState('')

// função pesquisa preço

const searchPrice = (product) => {

  if (preco === 0) {
    return product;
  }

  return preco === "0" || (preco ? product.price <= preco : true);
}




// funçao de categoria
  const searchCategory = (product) => {

    if(category === 'Camiseta') {
      return product.category.includes(category)
    }
    if(category === 'Almofada') {
      return product.category.includes(category)
    }
    if(category === 'Caneca') {
      return product.category.includes(category)
    }
    if(category === 'Moleton') {
      return product.category.includes(category)
    } else {
      return product
    }
  }
// função que busca o name
  const searchName = (product) => {

     return product.name.toLowerCase().includes(searchProduct.toLowerCase())

  }

 

  

  return (
    <ProductContext.Provider value={{ products,loading ,searchProduct, setSearchProduct, searchName, searchCategory, category,setCategory, searchPrice, preco, setPreco }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
