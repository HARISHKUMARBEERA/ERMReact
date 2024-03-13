import React, { useState } from 'react';
import './Products.css'

const initialProducts = [
  { id: 1, name: 'Product 1', category: 'Category 1', price: 10, quantity: 100 },
  { id: 2, name: 'Product 2', category: 'Category 2', price: 20, quantity: 50 },
  { id: 3, name: 'Product 3', category: 'Category 1', price: 15, quantity: 75 }
];

function ProductsManagement() {
  const [products, setProducts] = useState(initialProducts);
  const [editingProduct, setEditingProduct] = useState(null);
  const [newProduct, setNewProduct] = useState({ name: '', category: '', price: 0, quantity: 0 });

  const handleEdit = (product) => {
    setEditingProduct(product);
    setNewProduct(product);
  };

  const handleDelete = (id) => {
    setProducts(products.filter(product => product.id !== id));
  };

  const handleSave = () => {
    if (editingProduct) {
      setProducts(products.map(product => (product.id === editingProduct.id ? newProduct : product)));
      setEditingProduct(null);
    } else {
      setProducts([...products, { ...newProduct, id: products.length + 1 }]);
    }
    setNewProduct({ name: '', category: '', price: 0, quantity: 0 });
  };

  return (
    <div>
      <h1>Products Management</h1>
      <table style={{ width: '100%', tableLayout: 'fixed' }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.category}</td>
              <td>${product.price.toFixed(2)}</td>
              <td>{product.quantity}</td>
              <td>
                <button onClick={() => handleEdit(product)}>Edit</button>
                <button onClick={() => handleDelete(product.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <h2>{editingProduct ? 'Edit Product' : 'Add Product'}</h2>
        <input type="text" placeholder="Name" value={newProduct.name} onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })} />
        <input type="text" placeholder="Category" value={newProduct.category} onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })} />
        <input type="number" placeholder="Price" value={newProduct.price} onChange={(e) => setNewProduct({ ...newProduct, price: parseFloat(e.target.value) })} />
        <input type="number" placeholder="Quantity" value={newProduct.quantity} onChange={(e) => setNewProduct({ ...newProduct, quantity: parseInt(e.target.value) })} />
        <button onClick={handleSave}>{editingProduct ? 'Save' : 'Add'}</button>
      </div>
    </div>
  );
}

export default ProductsManagement;
