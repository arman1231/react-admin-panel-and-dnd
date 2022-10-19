import React, { useState } from "react";
import "./planner.scss";
import { useDrop } from "react-dnd";
import Picture from "./Picture";
import axios from "axios";

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

  const exportPlan = (data) => {
    const fileData = JSON.stringify(data);
    const blob = new Blob([fileData], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.download = "plan.json";
    link.href = url;
    link.click();
  }

  const [file, setFile] = useState()
  function handleChange(event) {
    setFile(event.target.files[0])
  }
  function handleUpload(event) {
    event.preventDefault()
    const url = 'http://localhost:3000/uploadFile';
    const formData = new FormData();
    formData.append('file', file);
    formData.append('fileName', file.name);
    const config = {
      headers: {
        'content-type': 'multipart/form-data',
      },
    };
    axios.post(url, formData, config).then((response) => {
      console.log(response.data);
    });

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
            <button className="plannerSaveBtn userAddButton" onClick={() => exportPlan(board)}>Сохранить</button>
            <button className="plannerDelBtn userAddButton" onClick={handleDelete}>Очистить</button>
          </div>
          <div className="upload pictures">
                       
          <form onSubmit={handleUpload}>
            <input type="file" name="file" onChange={handleChange} />
            <button className="plannerImportBtn userAddButton" type="submit">Импортировать</button>
            </form>
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
