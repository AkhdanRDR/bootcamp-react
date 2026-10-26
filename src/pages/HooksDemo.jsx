import { useState, useEffect, useContext, useRef, useMemo } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function HooksDemo() {
  // 1. useState
  const [number, setNumber] = useState(1);
  const [logMessage, setLogMessage] = useState("");

  // 2. useContext
  const { theme, toggleTheme } = useContext(ThemeContext);

  // 3. useRef
  const inputRef = useRef(null);

  // 4. useEffect (mount & trigger perubahan)
  useEffect(() => {
    setLogMessage(`Nilai angka berubah menjadi: ${number}`);
  }, [number]);

  // 5. useMemo (kalkulasi nilai komputasi)
  const squaredNumber = useMemo(() => {
    return number * number;
  }, [number]);

  const handleFocus = () => {
    inputRef.current.focus();
  };

  return (
    <div style={{ padding: "15px" }}>
      <h2>Materi 8: React Hooks</h2>

      {/* useContext demo */}
      <div
        style={{ border: "1px solid #ccc", padding: "10px", margin: "10px 0" }}
      >
        <h4>useContext</h4>
        <p>
          Current Theme: <strong>{theme}</strong>
        </p>
        <button onClick={toggleTheme}>Toggle Theme Context</button>
      </div>

      {/* useState, useEffect & useMemo demo */}
      <div
        style={{ border: "1px solid #ccc", padding: "10px", margin: "10px 0" }}
      >
        <h4>useState, useEffect, useMemo</h4>
        <p>Angka: {number}</p>
        <p>Hasil Kuadrat (useMemo): {squaredNumber}</p>
        <p>
          Status (useEffect): <em>{logMessage}</em>
        </p>
        <button onClick={() => setNumber((prev) => prev + 1)}>
          Increment Angka
        </button>
      </div>

      {/* useRef demo */}
      <div
        style={{ border: "1px solid #ccc", padding: "10px", margin: "10px 0" }}
      >
        <h4>useRef</h4>
        <input ref={inputRef} type="text" placeholder="Ketik sesuatu..." />{" "}
        <button onClick={handleFocus}>Fokus ke Input</button>
      </div>
    </div>
  );
}
