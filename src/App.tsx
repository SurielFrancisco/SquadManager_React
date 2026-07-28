import ExplorerList from "./components/ExplorerList";
import SquadPanel from "./components/SquadPanel";
import { EXPLORERS } from "./data/explorers";
import type { Explorer } from "./types/Explorer";
import { useState } from "react";

function App() {
  const [explorers, setExplorers] = useState<Explorer[]>(EXPLORERS);
  const [squad, setSquad] = useState<Explorer[]>([]);
  const [missionMessage, setMissionMessage] = useState<string | null>(null);

  const handleClick = (explorer: Explorer) => {
    // Prevent selecting unavailable explorers
    if (!explorer.available) return;

    setSquad((currentSquad) => {
      const existingExplorer = currentSquad.find(
        (currentExplorer) => currentExplorer.id === explorer.id,
      );

      if (existingExplorer) {
        return currentSquad.filter(
          (currentExplorer) => currentExplorer.id !== explorer.id,
        );
      }

      if (currentSquad.length === 3) return currentSquad;

      return [...currentSquad, explorer];
    });
  };

  const handleMission = () => {
    if (squad.length !== 3) return;

    setExplorers((prev) =>
      prev.map((e) =>
        squad.some((s) => s.id === e.id) ? { ...e, available: false } : e,
      ),
    );

    setSquad([]);
    setMissionMessage("La misión ha comenzado");
  };

  return (
    <div className="min-h-screen bg-slate-50 p-6">
      {missionMessage ? (
        <div className="mb-4 rounded-md bg-emerald-100 px-4 py-2 text-emerald-800">
          {missionMessage}
        </div>
      ) : null}
      <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
        <ExplorerList
          explorers={explorers}
          selectedExplorerIds={squad.map((explorer) => explorer.id)}
          onAdd={handleClick}
        />
        <SquadPanel explorers={squad} onMission={handleMission} />
      </div>
    </div>
  );
}

export default App;
