import "./style.css";
import "./spinner.css";
import Form from "./Form";
import { useImageUrl } from "./hooks/useImgeUrl";
import { Button } from "@mui/material";
import { useEffect, useRef, useState } from "react";

export default function App() {
  const { imgSrc } = useImageUrl();

  const shareImage = () => {
    window.FB.ui(
      {
        method: "share",
        href: imgSrc,
      },
      function (response) {}
    );
  };

  return (
    <div>
      <header>
        <div className="navbar">
          <div className="logo">
            <h2>OpenAI Image Genrator</h2>
          </div>
          <div className="nav-links">
            <ul>
              <li>
                <a href="https://beta.openai.com/docs" target="_blank">
                  OpenAI API Docs
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>

      <main>
        <Form />

        <section className="image">
          <div className="image-container">
            <h2 className="msg"></h2>
            <img src={imgSrc} alt="" id="image" />
          </div>
        </section>

        <Button
          sx={{ position: "relative", bottom: 70, right: 5 }}
          variant="contained"
          color="success"
          onClick={shareImage}
        >
          Share
        </Button>
      </main>
    </div>
  );
}
