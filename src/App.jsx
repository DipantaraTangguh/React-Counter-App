import { useState } from "react";
import "./App.css";

function App() {
  const [angka, setAngka] = useState(0);

  return (
    <>
      <p>{angka}</p>
      <button onClick={() => setAngka(angka + 1)}>Tambah</button>
      <button
        onClick={angka > 0 ? () => setAngka(angka - 1) : () => setAngka(0)}
      >
        Kurang
      </button>
      <button onClick={() => setAngka(0)}>Reset</button>
    </>
  );
}

export default App;
