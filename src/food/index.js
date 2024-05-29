import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import FirstPage from "./FirstPage";
import Products from "./Products";
import { GlobalStyle } from "./GlobalStyles";
import { productData, productDataTwo } from "./data";
import Feature from "./Feature";

function Food() {
  return (
    <>
      <GlobalStyle />
      <FirstPage />
      <Products heading="Choose your favorite" data={productData} />
      <Feature />
      <Products heading="Other special dishes" data={productDataTwo} />
    </>
  );
}

export default Food;
