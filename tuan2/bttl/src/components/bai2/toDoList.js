import React, { useState } from 'react';
import ToDoItem from './ToDoItem';

function ToDoList() {
    const [items, setItems] = useState(["Việc 1", "Việc 2", "Việc 3"]);
    const [inputValue, setInputValue] = useState('');

    const addItem = () => {
        if (inputValue.trim() !== '') {
            setItems([...items, inputValue]);
            setInputValue('');
        }
    };

    const removeItem = (index) => {
        const newItems = items.filter((_, i) => i !== index);
        setItems(newItems);
    };
    return (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <h2>Bài 2: To Do List</h2>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <button onClick={addItem}>Add</button>
            <ul>
                {items.map((item, index) => (
                    <ToDoItem key={index} item={item} index={index} removeItem={removeItem} />
                ))}
            </ul>
        </div>
    );
}

export default ToDoList;

// import React from 'react';

// const ToDoList = () => {
//     // Mảng chứa các việc cần làm
//     const tasks = [
//         'Mua sắm thực phẩm',
//         'Hoàn thành bài tập về nhà',
//         'Đi dạo công viên',
//         'Gọi điện cho bạn bè',
//         'Đọc sách'
//     ];

//     return (
//         <div style={{ textAlign: 'center', margin: '20px', padding: '20px', border: '1px solid #ddd' }}>
//             <h2>Bài 2: Danh Sách Việc Cần Làm</h2>
//             <ul style={{ listStyleType: 'none', padding: 0 }}>
//                 {tasks.map((task, index) => (
//                     <li key={index} style={{ padding: '10px 0', borderBottom: '1px solid #eee' }}>
//                         {task}
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default ToDoList;