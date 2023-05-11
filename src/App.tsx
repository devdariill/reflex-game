import { useEffect, useState } from "react";

function App() {
  const [status, setStatus] = useState<"initial" | "playing" | "finishied">("initial");
  const [timer, setTimer] = useState(0);
  const [position, setPosition] = useState<[number, number]>([
    Math.floor(Math.random() * 100),
    Math.floor(Math.random() * 100),
  ]);

  useEffect(() => {
    let interval: number;

    if (status === "playing") {
      interval = setInterval(() => setTimer((prevTime) => prevTime + 1), 100);
    }
    if (status === "initial") {
      setTimer(0);
    }

    return () => clearInterval(interval);
  }, [status]);

  return (
    <main>
      <header>
        <h1>{Math.round((timer / 10) * 100) / 100} segundos</h1>
      </header>
      <section style={{position: "relative"}}>
        <figure style={{top: `${position[0]}%`, left: `${position[1]}%`, position: "absolute"}} />
      </section>
      <footer>
        {status === "initial" && <button onClick={() => setStatus("playing")}>Jugar</button>}
        {status === "playing" && <button onClick={() => setStatus("finishied")}>Detener</button>}
        {status === "finishied" && <button onClick={() => setStatus("initial")}>Reiniciar</button>}
      </footer>
    </main>
  );
}

export default App;
