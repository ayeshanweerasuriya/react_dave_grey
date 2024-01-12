import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";

const Content = () => {
  const [item, setItem] = useState([
    {
      id: 1,
      checked: false,
      item: "Chocolate Cake",
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

  const handleCheck = (id) => {
    const listItem = item.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItem(listItem);

    // when we made a change it will save inside the local storage
    localStorage.setItem("shoppinglist", JSON.stringify(listItem));
  };

  const handleDelete = (id) => {
    const removeItem = item.filter((item) => item.id !== id);
    setItem(removeItem);
    localStorage.setItem("shoppinglist", JSON.stringify(removeItem));
  };

  return (
    <main>
      {item.length ? (
        <ul>
          {item.map((item) => (
            <li className="item" key={item.id}>
              <input
                type="checkbox"
                onChange={() => handleCheck(item.id)}
                checked={item.checked}
              ></input>
              <label
                style={item.checked ? { textDecoration: "line-through" } : null}
                onDoubleClick={() => handleCheck(item.id)}
              >
                {item.item}
              </label>
              <FaTrashAlt
                onClick={() => handleDelete(item.id)}
                role="button"
                tabIndex="0"
              />
            </li>
          ))}
        </ul>
      ) : (
        <p style={{ marginTop: "2rem" }}>Your list is empty!</p>
      )}
    </main>
  );
};

export default Content;
