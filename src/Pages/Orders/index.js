import React, { useState } from 'react';
import './Orders.css' 


const initialOrders = [
  { id: 1, orderId: 'ORD001', customerName: 'John Doe', orderDate: '2024-03-10', status: 'Pending' },
  { id: 2, orderId: 'ORD002', customerName: 'Jane Smith', orderDate: '2024-03-09', status: 'Delivered' },
  { id: 3, orderId: 'ORD003', customerName: 'Alice Johnson', orderDate: '2024-03-08', status: 'Shipped' },
  { id: 4, orderId: 'ORD004', customerName: 'Harish', orderDate: '2024-03-31', status: 'Delivered' },
  { id: 5, orderId: 'ORD005', customerName: 'Dinesh', orderDate: '2024-03-16', status: 'pending' }
];

function Orders() {
  const [orders, setOrders] = useState(initialOrders);
  const [selectedOrder, setSelectedOrder] = useState(null);

  const handleViewDetails = (order) => {
    setSelectedOrder(order);
  };

  const handleUpdateStatus = (orderId, newStatus) => {
    setOrders(orders.map(order => 
      order.orderId === orderId ? { ...order, status: newStatus } : order
    ));
  };

  const handleDeleteOrder = (orderId) => {
    setOrders(orders.filter(order => order.orderId !== orderId));
  };

  return (
    <div>
      <h1 className='OrdersManagement'>Orders Management</h1>
      <table style={{ width:'100%', tableLayout:'fixed'}}>
        <thead>
          <tr>
            <th style={{ width: '20%' }}>Order ID</th>
            <th style={{ width: '20%' }}>Customer Name</th>
            <th style={{ width: '20%' }}>Order Date</th>
            <th style={{ width: '20%' }}>Status</th>
            <th style={{ width: '25%' }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order.id}>
              <td>{order.orderId}</td>
              <td>{order.customerName}</td>
              <td>{order.orderDate}</td>
              <td>{order.status}</td>
              <td>
                <button onClick={() => handleViewDetails(order)}>View Details</button>
                <button onClick={() => handleUpdateStatus(order.orderId, 'Shipped')}>Update Status</button>
                <button onClick={() => handleDeleteOrder(order.orderId)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedOrder && (
        <div>
          <h2 className="orderhead">Order Details</h2>
          <p><strong>Order ID:</strong> {selectedOrder.orderId}</p>
          <p><strong>Customer Name:</strong> {selectedOrder.customerName}</p>
          <p><strong>Order Date:</strong> {selectedOrder.orderDate}</p>
          <p><strong>Status:</strong> {selectedOrder.status}</p>
        </div>
      )}
    </div>
  );
}

export default Orders;
