import React, { useState } from "react";

function CRUD() {
  const [data, setData] = useState([]);

  const addData = (text) => {
    setData([...data, { id: data.length + 1, text }]);
  };

  const removeData = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  return (
    <div>
      <button onClick={() => addData("New item")}>Add item</button>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            {item.text}
            <button onClick={() => removeData(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CRUD;