import { useState } from "react";
import { useImageUrl } from "./hooks/useImgeUrl";

export default function Form() {
  const [prompt, setPrompt] = useState("");
  const [size, setSize] = useState("medium");
  const [loading, setLoading] = useState(false);
  const { setImgSrc } = useImageUrl();

  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();
    generateImageRequest(prompt, size);
  };

  const generateImageRequest = async (prompt, size) => {
    try {
      const response = await fetch(
        "http://localhost:4000/openai/generateimage",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            prompt,
            size,
          }),
        }
      );
      const data = await response.json();
      const imageUrl = data.data;
      setImgSrc(imageUrl);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <section className="showcase">
        <form id="image-form" onSubmit={handleSubmit}>
          <h1>Describe An Image</h1>
          <div className="form-control">
            <input
              onChange={(e) => setPrompt(e.target.value)}
              value={prompt}
              type="text"
              placeholder="Enter Text"
            />
          </div>

          <div className="form-control">
            <select
              onClick={(e) => {
                setSize(e.target.value);
              }}
              name="size"
              id="size"
            >
              <option value="small">Small</option>
              <option value="medium" selected>
                Medium
              </option>
              <option value="large">Large</option>
            </select>
          </div>
          <button type="submit" className="btn">
            Generate
          </button>
        </form>
      </section>
      <div className={loading ? "spinner show" : "spinner"}></div>
    </div>
  );
}
