import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; 
import './Calendar.css'

const OrdersCalendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  
  const orders = [
    { id: 1, orderNumber: 'ORD-001', customerName: 'John Doe', deliveryDate: new Date(2024, 2, 12) },
    { id: 2, orderNumber: 'ORD-002', customerName: 'Jane Smith', deliveryDate: new Date(2024, 2, 12) },
    { id: 3, orderNumber: 'ORD-003', customerName: 'Alice Johnson', deliveryDate: new Date(2024, 2, 13) },
    { id: 4, orderNumber: 'ORD-004', customerName: 'Bob Williams', deliveryDate: new Date(2024, 2, 14) },
  ];

  const handleDateChange = date => {
    setSelectedDate(date);
  };

  const getUniqueDates = () => {
    const uniqueDates = orders.reduce((acc, order) => {
      const orderDate = new Date(order.deliveryDate);
      const dateString = orderDate.toDateString();
      if (!acc.includes(dateString)) {
        acc.push(dateString);
      }
      return acc;
    }, []);
    return uniqueDates;
  };

  const tileClassName = ({ date }) => {
    const dateStr = date.toDateString();
    return getUniqueDates().includes(dateStr) ? 'custom-tile' : null;
  };

  return (
    <div>
      <h2>Orders Calendar View</h2>
      <Calendar
        onChange={handleDateChange}
        value={selectedDate}
        tileContent={({ date }) => {
          const dateStr = date.toDateString();
          return getUniqueDates().includes(dateStr) ? <p style={{ color: 'white' }}>Orders</p> : null;
        }}
        tileClassName={tileClassName}
        className="custom-calendar" 
        calendarClassName="custom-calendar-body" 
        prev2Label={<span style={{ color: 'black' }}>‹‹</span>} 
        next2Label={<span style={{ color: 'black' }}>››</span>} 
        prevLabel={<span style={{ color: 'black' }}>‹</span>}
        nextLabel={<span style={{ color: 'black' }}>›</span>}
      />
      <h3>Orders on {selectedDate.toDateString()}</h3>
      <ul style={{ listStyleType: 'none', padding: '0' }}>
        {orders
          .filter(order => {
            const orderDate = new Date(order.deliveryDate);
            return (
              orderDate.getDate() === selectedDate.getDate() &&
              orderDate.getMonth() === selectedDate.getMonth() &&
              orderDate.getFullYear() === selectedDate.getFullYear()
            );
          })
          .map(order => (
            <li key={order.id} style={{ marginBottom: '5px' }}>{order.orderNumber} - {order.customerName}</li>
          ))}
      </ul>
    </div>
  );
};

export default OrdersCalendar;
