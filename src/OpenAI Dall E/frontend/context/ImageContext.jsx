import { createContext, useState } from "react";

export const ImageContext = createContext();

export const ImageContextProvider = ({ children }) => {
  const [imgSrc, setImgSrc] = useState("");

  const value = { imgSrc, setImgSrc };

  return (
    <ImageContext.Provider value={value}> {children} </ImageContext.Provider>
  );
};
