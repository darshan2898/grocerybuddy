import React, { useState, useEffect } from "react";
import ListItemsContainer from "./ListItemsContainer";
import SearchBar from "./SearchBar";

const GroceryBud = () => {
  const [items, setItems] = useState([]);
  const [isNotification, setIsNotification] = useState({
    status: false,
    text: "",
    className: "",
  });
  const [edit, setEdit] = useState({ status: true, item: "" });

  const addItem = (item) => {
    const newItem = {
      id: new Date().getTime().toString(),
      title: item,
    };
    setItems([...items, newItem]);
    setIsNotification({
      ...isNotification,
      status: true,
      text: "item Added SuccessFully!",
      className: "green",
    });
  };

  const deleteItem = (id) => {
    const newDeleteItem = items.filter((item) => {
      return item.id !== id;
    });
    setItems(newDeleteItem);
    setIsNotification({
      ...isNotification,
      status: true,
      text: "item Deleted SuccessFully!",
      className: "red",
    });
  };

  const editItem = (id) => {
    // const newEditedItem = items.find((item) => {
    //   return item.id === id;
    // });
    // console.log(newEditedItem);
    // const newData = items.map((i) => {
    //   return [i, { ...newEditedItem, title: "apple" }];
    // });
    console.log(id);
  };

  useEffect(() => {
    if (isNotification.status) {
      setTimeout(() => {
        setIsNotification({ ...isNotification, status: false });
      }, 1500);
    }
  }, [isNotification.status]);

  return (
    <div className="g_bud">
      <SearchBar addItem={addItem} />
      <ListItemsContainer
        items={items}
        notification={isNotification}
        deleteItem={deleteItem}
        editItem={editItem}
      />
    </div>
  );
};

export default GroceryBud;
