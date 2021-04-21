import "./Root.css";

import GameMap from "views/GameMap";

function Root() {
  return (
    <div className="App">
      <header className="App-header">
        <GameMap />
      </header>
    </div>
  );
}

export default Root;
