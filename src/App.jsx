// import { useState } from "react"

function App() {
  const width = 10;
  const height = 20;
  //const [square, setSquare] = useState(Array(width * height).fill("x"))
  // setSquare();
  const square = Array(width * height).fill("x");


  return (
    <main className="board">
      <h1>Tetris en Javascript/React</h1>
      <section className="game">
        {
          square.map((s, i) => (
            <div key={i}>
              {s.toString()}
            </div>
          ))
        }
      </section>
    </main>
  )
}

export default App