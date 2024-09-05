// src/Counter.js
import React, { useState } from 'react';

const Counter = () => {
    // Khởi tạo state để lưu giá trị số đếm
    const [count, setCount] = useState(0);

    // Hàm để tăng giá trị số đếm
    const increment = () => {
        setCount(count + 1);
    };

    // Hàm để giảm giá trị số đếm
    const decrement = () => {
        setCount(count - 1);
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <h2>Bài 1: Ứng dụng Quản lý Số Đếm</h2>
            <h3>Counter: {count}</h3>
            <button onClick={decrement} style={{ margin: '5px', padding: '10px 20px' }}>
                Giảm
            </button>
            <button onClick={increment} style={{ margin: '5px', padding: '10px 20px' }}>
                Tăng
            </button>
        </div>
    );
};

export default Counter;