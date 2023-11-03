import React, { useEffect, useState } from "react";
import { createContext, useContext } from "react";
import cardData from '../data/data.json';
import { CartCard } from "../components";

const filterContext = createContext();

const FilterProvider = ({ children }) => {
    const [product, setProduct] = useState(cardData);
 
  const allFilterProduct = () => {
    setProduct(cardData);
  };
  const laptopFilter = () => {
    setProduct(cardData.filter((item) => item.category === "laptops"));
  };
  const phoneFilter = () => {
    setProduct(cardData.filter((item) => item.category === "phone"));
  };
  const priceLowtoHigh = () => {
        console.log("wor")
      setProduct(product.sort((a,b) => a.final_price-b.final_price))
      console.log(product)
    }
    const priceHightoLow = () => {
        setProduct(product.sort((a,b) => b.final_price-a.final_price))
        console.log(product)
  }
//   const javaScriptFilterVideo = () => {
//     setFilterVideo(
//       videoList.filter((item) => item.categoryName === "JavaScript")
//     );
//   };
//   const carFilterVideo = () => {
//     setFilterVideo(
//       videoList.filter((item) => item.categoryName === "Sports Car")
//     );
//   };
//   const techFilterVideo = () => {
//     setFilterVideo(videoList.filter((item) => item.categoryName === "Tech"));
//   };

  return (
    <filterContext.Provider
      value={{allFilterProduct, product, laptopFilter, phoneFilter, priceLowtoHigh, priceHightoLow
      }}
    >
      {children}
    </filterContext.Provider>
  );
};

const useFilter = () => useContext(filterContext);

export { FilterProvider, useFilter };
