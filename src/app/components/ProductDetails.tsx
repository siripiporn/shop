import React, { useState } from "react";
import { initialProducts } from "../data/ProductData";
import ProductForm from "./ProductForm";

interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  price: number;
}

const ProductDetails: React.FC = () => {
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [editProduct, setEditProduct] = useState<Product | null>(null);
  const [showAddForm, setShowAddForm] = useState<boolean>(false);

  const handleDelete = (productId: string) => {
    setProducts(products.filter((product) => product.id !== productId));
  };

  const handleEdit = (product: Product) => {
    setEditProduct(product);
  };

  const handleAddProduct = () => {
    setShowAddForm(true);
  };
 
  const handleCancel = () => {
    setEditProduct(null);
    setShowAddForm(false);
  };

  const handleSave = (newProduct: Product) => {
    if (editProduct) {
      const updatedProducts = products.map((product) =>
        product.id === editProduct.id ? newProduct : product
      );
      setProducts(updatedProducts);
      setEditProduct(null);
    } else {
      setProducts([...products, newProduct]);
    }
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product.id} className="bg-white p-4 shadow rounded-lg">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-auto mb-2"
            />
            <h2 className="text-lg font-semibold">{product.name}</h2>
            <p className="text-gray-600">{product.description}</p>
            <p className="text-gray-800 font-bold">${product.price}</p>
            <button
              onClick={() => handleEdit(product)}
              className="mt-2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2"
            >
              Edit
            </button>
            <button
              onClick={() => handleDelete(product.id)}
              className="mt-2 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Delete
            </button>
          </div>
        ))}

        {showAddForm && (
          <ProductForm
            onSave={handleSave}
            onCancel={handleCancel}
          />
        )}
        {editProduct && (
          <ProductForm
            onSave={handleSave}
            onCancel={handleCancel}
            initialProduct={editProduct} 
          />
        )}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <button
          onClick={handleAddProduct}
          className="bg-green-500 hover:bg-green-600 mt-2  text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2"
        >
          Add Product
        </button>
      </div>
    </>
  );
};

export default ProductDetails;
