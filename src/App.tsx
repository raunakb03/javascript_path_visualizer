import { useRef } from "react";
import Grid from "./components/Grid";
import { PathFindingProvider } from "./context/PathfindingContext";
import { SpeedProvider } from "./context/SpeedContext";
import { TileProvider } from "./context/TileContext";
import Nav from "./components/Nav";

function App() {
  const isVisualizationRunningRef = useRef(false);
  return (
    <PathFindingProvider>
      <TileProvider>
        <SpeedProvider>
          <div className="h-screen w-screen flex flex-col">
            <Nav />
            <Grid isVisualizationRunningRef={isVisualizationRunningRef} />
          </div>
        </SpeedProvider>
      </TileProvider>
    </PathFindingProvider>
  );
}

export default App;
