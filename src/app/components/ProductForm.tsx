import React, { useState, useEffect } from "react";
// import { initialProducts } from "../data/ProductData";

interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  price: number;
}

interface ProductFormProps {
  onSave: (product: Product) => void;
  onCancel: () => void;
  initialProduct?: Product;  
}

const ProductForm: React.FC<ProductFormProps> = ({
  onSave,
  onCancel,
  initialProduct,
}) => {
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [image, setImage] = useState<string>("");
  const [price, setPrice] = useState<number>(0);

  useEffect(() => {
    if (initialProduct) { 
      setName(initialProduct.name);
      setDescription(initialProduct.description);
      setImage(initialProduct.image);
      setPrice(initialProduct.price);
    }
  }, [initialProduct]);  

 

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const editedProduct: Product = {
      id: initialProduct ? initialProduct.id : Math.random().toString(),
      name,
      description,
      image,
      price,
    };
    onSave(editedProduct);
    onCancel();
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg">
        <h2 className="text-lg font-semibold mb-4">
          {initialProduct ? "Edit Product" : "Add Product"}
        </h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="block w-full p-2 mb-4 border border-gray-300 rounded"
          />
          <input
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="block w-full p-2 mb-4 border border-gray-300 rounded"
          />
          <input
            type="text"
            placeholder="Image URL"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className="block w-full p-2 mb-4 border border-gray-300 rounded"
          />
          <input
            type="number"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(parseFloat(e.target.value))}
            className="block w-full p-2 mb-4 border border-gray-300 rounded"
          />
          <div className="flex justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              {initialProduct ? "Save" : "Add"}
            </button>
            <button
              type="button"
              onClick={onCancel}
              className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductForm;
