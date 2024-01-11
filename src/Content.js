import { useState } from "react";

const Content = () => {
  const [item, setItem] = useState([
    {
      id: 1,
      checked: false,
      item: "Item 01",
    },
    {
      id: 2,
      checked: false,
      item: "Item 02",
    },
    {
      id: 3,
      checked: false,
      item: "Item 03",
    },
  ]);
  return (
    <main>
      <ul>
        {item.map((item) => (
          <li className="item" key={item.id}>
            <input type="checkbox" checked={item.checked}></input>
            <label>{item.item}</label>
            <button>Delete</button>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Content;
