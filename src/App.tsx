import { useEffect, useState } from "react";

function App() {
  const [status, setStatus] = useState<"initial" | "playing" | "finishied">("initial");
  const [timer, setTimer] = useState(0);
  const [position, setPosition] = useState<[number, number]>([
    Math.floor(Math.random() * 100),
    Math.floor(Math.random() * 100),
  ]);
  const [score, setScore] = useState(0);

  function handleScore() {
    setScore((prevScore) => prevScore + 1);
    setPosition([Math.floor(Math.random() * 100), Math.floor(Math.random() * 100)]);
    if (score === 10) {
      setStatus("finishied");
    }
  }

  useEffect(() => {
    let interval: number;

    if (status === "playing") {
      interval = setInterval(() => setTimer((prevTime) => prevTime + 1), 100);
    }
    if (status === "initial") {
      setTimer(0);
      setScore(0);
    }

    return () => clearInterval(interval);
  }, [status]);

  return (
    <main>
      <header>
        <h1>
          {Math.round((timer / 10) * 100) / 100} segundos {score} Score
        </h1>
      </header>
      <section style={{position: "relative", marginRight: 48, marginBottom: 48}}>
        {status === "playing" && (
          <figure
            style={{top: `${position[0]}%`, left: `${position[1]}%`, position: "absolute"}}
            onClick={handleScore}
          />
        )}
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
