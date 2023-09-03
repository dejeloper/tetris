import { useState } from "react";

const movements = {
  down: 1,
  rigth: 2,
  left: 3,
  rotate: 4,
};

function App() {
  const co = "⬛";
  const cv = "⬜";
  const width = 10;
  const height = 15;

  const [screen, setScreen] = useState([
    [co, cv, cv, cv, cv, cv, cv, cv, cv, cv],
    [co, co, co, cv, cv, cv, cv, cv, cv, cv],
    [cv, cv, cv, cv, cv, cv, cv, cv, cv, cv],
    [cv, cv, cv, cv, cv, cv, cv, cv, cv, cv],
    [cv, cv, cv, cv, cv, cv, cv, cv, cv, cv],
    [cv, cv, cv, cv, cv, cv, cv, cv, cv, cv],
    [cv, cv, cv, cv, cv, cv, cv, cv, cv, cv],
    [cv, cv, cv, cv, cv, cv, cv, cv, cv, cv],
    [cv, cv, cv, cv, cv, cv, cv, cv, cv, cv],
    [cv, cv, cv, cv, cv, cv, cv, cv, cv, cv],
    [cv, cv, cv, cv, cv, cv, cv, cv, cv, cv],
    [cv, cv, cv, cv, cv, cv, cv, cv, cv, cv],
    [cv, cv, cv, cv, cv, cv, cv, cv, cv, cv],
    [cv, cv, cv, cv, cv, cv, cv, cv, cv, cv],
    [cv, cv, cv, cv, cv, cv, cv, cv, cv, cv],
  ]);

  const [rotationMove, setRotationMove] = useState(0);

  const movePiece = (screen, move) => {
    let newScreen = [];

    for (let i = 0; i < height; i++) {
      const row = Array(width + 1)
        .join(cv)
        .split("");
      newScreen.push(row);
    }

    let shouldExit = false;
    let rotateItem = 0;
    const rotations = [
      [
        [0, 1],
        [-1, 0],
        [0, -1],
        [1, -2],
      ],
      [
        [1, 2],
        [0, 1],
        [-1, 1],
        [-2, 0],
      ],
      [
        [0, 1],
        [1, 0],
        [2, -1],
        [1, -2],
      ],
      [
        [1, 1],
        [0, 0],
        [-2, 0],
        [-1, -1],
      ],
    ];

    screen.forEach((row, xCurrent) => {
      row.forEach((cell, yCurrent) => {
        if (cell === co) {
          let xNew = 0;
          let yNew = 0;

          switch (move) {
            case movements.down:
              xNew = xCurrent + 1;
              yNew = yCurrent;
              break;
            case movements.rigth:
              xNew = xCurrent;
              yNew = yCurrent + 1;
              break;
            case movements.left:
              xNew = xCurrent;
              yNew = yCurrent - 1;
              break;
            case movements.rotate:
              xNew = xCurrent + rotations[rotationMove][rotateItem][0];
              yNew = yCurrent + rotations[rotationMove][rotateItem][1];
              rotateItem++;
              break;

            default:
              xNew = xCurrent + 1;
              yNew = yCurrent;
              break;
          }

          if (xNew > height - 1 || yNew > width - 1 || yNew < 0) {
            shouldExit = true;
          } else {
            newScreen[xNew][yNew] = co;
          }
        }
      });
    });

    if (shouldExit) {
      setScreen(screen);
      return;
    }

    setScreen(newScreen);
    if (move === movements.rotate) {
      const rotate = rotationMove === 3 ? 0 : rotationMove + 1;
      setRotationMove(rotate);
    }
  };

  return (
    <main className="board">
      <h1>Tetris en Javascript/React</h1>
      <section className="game" style={{ color: "black" }}>
        {screen.map((row, i) => (
          <div className="row" key={i}>
            {row.map((cell, j) => (
              <div className="cell" key={j}>
                {cell}
              </div>
            ))}
          </div>
        ))}
      </section>
      <section className="controls">
        <div className="movements">
          <button
            className="button"
            onClick={() => movePiece(screen, movements.left)}
          >
            Izquierda
          </button>
          <button
            className="button"
            onClick={() => movePiece(screen, movements.down)}
          >
            Abajo
          </button>
          <button
            className="button"
            onClick={() => movePiece(screen, movements.rigth)}
          >
            Derecha
          </button>
        </div>
        <div className="actions">
          <button
            className="button"
            onClick={() => movePiece(screen, movements.rotate)}
          >
            Rotar
          </button>
        </div>
      </section>
      <section className="version">
        <label>Versión: 1.0.0</label>
      </section>
      <section className="links">
        <ul>
          <li>
            <a
              href="https://twitter.com/dejeloper"
              rel="noreferrer"
              target="_blank"
            >
              <picture>
                <img
                  className="img_links"
                  src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Twitter_colored_svg-512.png"
                  alt="Logo Twitter"
                />
              </picture>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/dejeloper/"
              rel="noreferrer"
              target="_blank"
            >
              <picture>
                <img
                  className="img_links"
                  src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Linkedin_unofficial_colored_svg-512.png"
                  alt="Logo Linkedin"
                />
              </picture>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/dejeloper"
              rel="noreferrer"
              target="_blank"
            >
              <picture>
                <img
                  className="img_links"
                  src="https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/71-github-512.png"
                  alt="Logo Github"
                />
              </picture>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/dejeloper/tetris"
              rel="noreferrer"
              target="_blank"
            >
              <picture>
                <img
                  className="img_links"
                  src="https://cdn0.iconfinder.com/data/icons/logos-brands-in-colors/128/react_color-512.png"
                  alt="Logo React"
                />
              </picture>
            </a>
          </li>
        </ul>
      </section>
    </main>
  );
}

export default App;
