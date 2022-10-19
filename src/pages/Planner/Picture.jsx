import React from "react";
import { useDrag } from "react-dnd";

export default function Picture({ id, src }) {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: "image",
        item: { id: id },
        collect: (monitor) => ({
          isDragging: !!monitor.isDragging(),
        }),
      }));
  return <img ref={drag} className="picture" src={src} alt="" />;
}
