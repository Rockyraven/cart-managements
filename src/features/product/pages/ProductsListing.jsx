import "./product.css";
import { ProductCard, ProductHeading } from "../../../components";
import cardData from "../../../data/data.json";
import { useDispatch } from "react-redux";
import { useFilter } from "../../../context/filterContext";
import { useEffect } from "react";



export const ProductsListing = () => {
  const dispatch = useDispatch();
  const {product, allFilterProduct, laptopFilter, phoneFilter, priceLowtoHigh, priceHightoLow} = useFilter();
  console.log(product);
  useEffect(() => {
    allFilterProduct();
    laptopFilter();
    phoneFilter();
    priceHightoLow();
    priceLowtoHigh();
  },[product])


  return (
    <main className="product-wrapper">
      <ProductHeading />
        <ul className="cards-container">
          {product.map((ele, i) => (
            <ProductCard item={ele} key={i} />
          ))}
        </ul>
    </main>
  );
};
