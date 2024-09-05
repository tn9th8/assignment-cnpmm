import React from 'react';

function ToDoItem({ item, index, removeItem }) {
    return (
        <li>
            {item}
            <button onClick={() => removeItem(index)}>Remove</button>
        </li>
    );
}

export default ToDoItem;