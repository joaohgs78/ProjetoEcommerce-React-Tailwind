import React, { useState } from "react";
import Card from "../components/Card";
import { useContext } from "react";
import { ProductContext } from "../hooks/useProductContext";

const Home = () => {
  const { products, searchName, searchCategory, category,setCategory, searchPrice, preco, setPreco} = useContext(ProductContext);

  const [order, setOrder] = useState('')

     
  

  
 
  return (

    <div className="mt-32">
      <div className="flex-col container mx-28">
        <div className="flex p-2  ">
        
            <input
              id="price"
              
              min={29.99}
              max={59.99}
              value={preco}
              onChange={(e) => setPreco(e.currentTarget.value)}
              type="range"
            />

            <label
              className=" flex justify-center mr-4 bg-blue-100 rounded m-2"
              for="price"
            >
              Valor: {preco} (Mín: 29.99 - Máx: 59.99)
            </label>
            </div>
         

        <div className="">
            <div className="rounded  flex">
              <select
                value={order}
                name="filter-category"
                className="w-48 outline-none"
                onChange={(e) => setOrder(e.target.value)}
              >
                <option value='Ordernar'>Ordenar</option>
                <option value="Crescente">Crescente</option>
                <option value="Decrescente">Decrescente</option>
               
              </select>
            </div>
          </div>
          </div>



    
   

    <div className="flex flex-wrap justify-center ">
    {products
            .filter(searchPrice)
            .filter(searchCategory)
            .filter(searchName)
            .sort((a, b) => {
              if (order === 'Crescente') {
                if (a.price > b.price) {
                  return 1
                }
                if (a.price < b.price) {
                  return -1
                } else {
                  return 0
                }
                
              } else if (order === 'Decrescente') {
                if (a.price > b.price) {
                  return -1
                }
                if (a.price < b.price) {
                  return 1
                }
                
              } else if (order === 'Ordernar') {
                return products
              }
            })
            .map((product, index) => {
              return <Card product={product} key={index} />;
            })}
      
     
      
      <div/>
      <div/>
      </div>
      
    </div>
  );
};

export default Home;
