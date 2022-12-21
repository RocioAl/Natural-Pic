import React, { useContext } from "react";
import "../assets/css/galeria.css";
import Heart from "./Heart";
import { MyContext } from "../MyContextphotos";

const Galeria = () => {
  const { photos, setPhotos } = useContext(MyContext);

  const favorites = (id) => {
    setPhotos((data) =>
      data.map((element) => {
        if (element.id === id && element.liked === false) {
          return { ...element, liked: true };
        }
        else if (element.id === id && element.liked === true) {
          return { ...element, liked: false };
        } else {
          return element;
        }

      })
    );
  };
  return (

    <div className="galeria grid-columns-5 p-3">
      {photos.map((item) => (
        <div
          className="foto"
          key={item.id}
          style={{
            backgroundImage: `url(${item.src.tiny})`,
          }}
        >
          <div onClick={() => favorites(item.id)}>
            <Heart filled={item.liked} />
          </div>

          <div >
            <p>{item.alt}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Galeria
