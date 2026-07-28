import type { Explorer } from "../types/Explorer";
import SquadPanelRow from "./SquadPanelRow";

type SquadPanelProps = {
  explorers: Explorer[];
  onMission?: () => void;
};

export default function SquadPanel({ explorers, onMission }: SquadPanelProps) {
  const squadPower = explorers.reduce(
    (power, explorer) => power + explorer.level,
    0,
  );

  return (
    <aside className="h-fit rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
      <h2 className="font-semibold text-slate-900">Escuadrón seleccionado</h2>
      <p className="text-s font-medium tracking-wide text-slate-400">
        {explorers.length === 3
          ? "El escuadrón está completo"
          : `${explorers.length}/3`}
      </p>
      {explorers.length === 0 ? (
        <p className="mt-6 text-center text-sm text-slate-400">
          Todavía no has seleccionado exploradores
        </p>
      ) : (
        <ul className="mt-2 divide-y divide-slate-100">
          {explorers.map((explorer) => (
            <SquadPanelRow key={explorer.id} explorer={explorer} />
          ))}
        </ul>
      )}

      <div className="mt-4 flex items-center justify-between border-t border-slate-200 pt-4 ">
        <span className="font-medium text-late-600">Poder Total:</span>
        <span className="text-lg font-semibold text-slate-900">
          {squadPower}
        </span>
      </div>
      <div className="mt-4 flex items-center justify-between  border-slate-200 pt-4">
        <button
          onClick={() => onMission && onMission()}
          disabled={explorers.length !== 3}
          className="w-full rounded-lg px-3 py-1.5 text-sm font-medium transition bg-emerald-600 text-white hover:bg-emerald-700 disabled:bg-slate-300 disabled:text-slate-500 disabled:cursor-not-allowed"
        >
          Enviar a misión
        </button>
      </div>
    </aside>
  );
}
