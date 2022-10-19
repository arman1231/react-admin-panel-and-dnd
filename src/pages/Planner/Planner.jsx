import React, { useState } from "react";
import "./planner.scss";
import { useDrop } from "react-dnd";
import Picture from "./Picture";

export default function Planner() {
  const imageList = [
    {
      id: 1,
      src: "./images/table.svg",
    },
    {
      id: 2,
      src: "./images/table2.svg",
    },
    {
      id: 3,
      src: "./images/table.svg",
    },
  ];
  const [board, setBoard] = useState([]);
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "image",
    drop: (item) => addImageToBoard(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));
  const addImageToBoard = (id) => {
    const list = imageList.filter((picture) => id === picture.id);
    setBoard((board) => [...board, list[0]]);
  };
  const handleDelete = () => {
    setBoard([])
  }
  return (
    <div className="planner">
      <div className="plannerWrap">
        <div className="plannerControls">
          <div className="pictures">
            {imageList.map((image) => (
              <Picture key={image.id} id={image.id} src={image.src} />
            ))}
          </div>
          <div className="pictures">
            <button className="plannerSaveBtn userAddButton">Сохранить</button>
            <button className="plannerDelBtn userAddButton" onClick={handleDelete}>Очистить</button>
          </div>
        </div>
        <div className="board" ref={drop}>
          <p>Карта заведения</p>
          {board.map((image) => (
            <Picture key={image.id} id={image.id} src={image.src} />
          ))}
        </div>
      </div>
    </div>
  );
}
