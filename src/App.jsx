import React, { useState } from "react";

const customDictionary = {
  teh: "the",
  wrok: "work",
  fot: "for",
  exampl: "example"
};

function XSpellCheck() {
  const [text, setText] = useState("");
  const [suggestion, setSuggestion] = useState("");

  const handleChange = (event) => {
    const inputText = event.target.value;
    setText(inputText);

    // If textarea is empty → clear suggestion
    if (inputText.trim() === "") {
      setSuggestion("");
      return;
    }

    const words = inputText.split(/\s+/); // split by spaces

    let foundSuggestion = "";

    for (let word of words) {
      const lowerCaseWord = word.toLowerCase();

      if (customDictionary[lowerCaseWord]) {
        foundSuggestion = customDictionary[lowerCaseWord];
        break; // Only first incorrect word
      }
    }

    setSuggestion(foundSuggestion);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>XSpellCheck</h2>

      <textarea
        rows="5"
        cols="40"
        value={text}
        onChange={handleChange}
        placeholder="Enter text..."
      />

      <div style={{ marginTop: "20px", fontWeight: "bold" }}>
        {suggestion && `Did you mean: ${suggestion}?`}
      </div>
    </div>
  );
}

export default XSpellCheck;