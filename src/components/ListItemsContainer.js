import React from "react";
import ListItem from "./ListItem";
import Notification from "./Notification";

const ListItemsContainer = ({ items, notification, deleteItem, editItem }) => {
  return (
    <>
      {notification.status && <Notification notification={notification} />}

      <ul className="list_container">
        {items.length === 0 ? (
          <p>List is Empty !</p>
        ) : (
          items.map((item) => (
            <ListItem
              item={item}
              key={item.id}
              deleteItem={deleteItem}
              editItem={editItem}
            />
          ))
        )}
      </ul>
    </>
  );
};

export default ListItemsContainer;
