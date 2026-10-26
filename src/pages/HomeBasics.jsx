import { useState } from "react";

// Materi 2 & 3: Component dan Props
function GreetingCard({ username, isOnline }) {
  return (
    <div
      style={{ border: "1px solid #ccc", padding: "10px", margin: "10px 0" }}
    >
      {/* Materi 1: JSX */}
      <h4>Halo, {username}!</h4>

      {/* Materi 6: Conditional Rendering */}
      <p>Status: {isOnline ? "Online" : "Offline"}</p>
      {isOnline && <small>Pengguna sedang aktif sekarang.</small>}
    </div>
  );
}

export default function HomeBasics() {
  // Materi 4: State
  const [count, setCount] = useState(0);
  const [items, setItems] = useState([
    { id: 101, name: "Belajar JSX & Props" },
    { id: 102, name: "Belajar Conditional & List" },
    { id: 103, name: "Implementasi Keys" },
  ]);

  // Materi 5: Event Handling
  const handleReset = (event) => {
    event.preventDefault();
    setCount(0);
  };

  return (
    <div style={{ padding: "15px" }}>
      <h2>Materi 1 - 7: Dasar React</h2>

      {/* Komponen & Props */}
      <GreetingCard username="Pelajar React" isOnline={true} />

      {/* State & Event Handling */}
      <div
        style={{ border: "1px solid #ccc", padding: "10px", margin: "10px 0" }}
      >
        <h3>Counter: {count}</h3>
        <button onClick={() => setCount(count + 1)}>Tambah (+)</button>{" "}
        <button onClick={handleReset}>Reset Event</button>
      </div>

      {/* Materi 7: Rendering List & Keys */}
      <div
        style={{ border: "1px solid #ccc", padding: "10px", margin: "10px 0" }}
      >
        <h4>Daftar Materi (Lists & Keys):</h4>
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              ID: {item.id} - {item.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
