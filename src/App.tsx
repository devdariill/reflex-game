import { useState } from "react";

function App() {
  const [status, setStatus] = useState<"initial" | "playing" | "finishied">("initial");

  return (
    <main>
      <header>
        <h1>{0} segundos</h1>
      </header>
      <section>
        <figure />
      </section>
      <footer>
        <button>Jugar</button>
      </footer>
    </main>
  );
}

export default App;
