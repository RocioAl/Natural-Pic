import React, { useContext } from "react";
import { MyContext } from "../MyContextphotos";
import "../assets/css/galeria.css";
export default function Favoritos() {
  const { photos } = useContext(MyContext);

  return (
    <div>
      <h1 style={{ color: '#43a047' }}>Fotos favoritas</h1>
      <div className="p-3 galeria grid-columns-4">
        {photos.filter((item) => item.liked === true).map((item) => (
          <div
            className="foto"
            key={item.id}
            src={item.src.tiny}
            style={{
              backgroundImage: `url(${item.src.tiny})`,
            }}
          >
            <div>
              <p></p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
