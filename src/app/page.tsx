"use client";
import React, { useState } from "react";
import ProductDetails from "./components/ProductDetails";
import Header from "./components/Header";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <div className="container mx-auto p-4">
        <h3 className="text-wrap text-xl m-5 font-bold">Products</h3>
        <ProductDetails />
      </div>
    </>
  );
};

export default App;
