import React from "react";
import { useState, useEffect } from "react";

function App() {
  const [renderDog, setRenderDog] = useState(null);

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((data) => setRenderDog(data.message));
  }, []);

  if (!renderDog) {
    return <p>Loading...</p>;
  }
  return (
    <div>
      <img src={renderDog} alt="A Random Dog"></img>
    </div>
  );
}

export default App;
