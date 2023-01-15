import { useContext } from "react";
import { ImageContext } from "../context/ImageContext";

export const useImageUrl = () => {
  const { imgSrc, setImgSrc } = useContext(ImageContext);

  return { imgSrc, setImgSrc };
};
