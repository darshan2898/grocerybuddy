import React from "react";
import { FaRegTrashAlt, FaRegEdit } from "react-icons/fa";

const ListItem = ({ item, deleteItem, editItem }) => {
  const { id, title } = item;
  return (
    <li>
      <span>{title}</span>
      <span className="icon">
        {/* <div
          className="Ebtn"
          onClick={() => {
            editItem(id);
          }}
        >
          <FaRegEdit />
        </div> */}
        <div
          className="Dbtn"
          onClick={() => {
            deleteItem(id);
          }}
        >
          <FaRegTrashAlt />
        </div>
      </span>
    </li>
  );
};

export default ListItem;
