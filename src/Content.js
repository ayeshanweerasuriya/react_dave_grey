import { useState } from "react";
import { FaBeer } from "react-icons/fa";

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
      <h3>
        Lets go for a <FaBeer />?
      </h3>
    </main>
  );
};

export default Content;
