import React, { createContext, useEffect, useState } from "react";

export const MyContext = createContext();

const MyContextPhotos = ({ children }) => {
  const [photos, setPhotos] = useState([]);
  const endpoint = "/fotos.json";

  const getPhotos = async () => {
    const response = await (await fetch(endpoint)).json();
    const gallery = response.photos;
    setPhotos(gallery);
  };

  useEffect(() => {
    getPhotos();
  }, []);

  return (
    <MyContext.Provider
      value={{
        photos,
        setPhotos,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export default MyContextPhotos;