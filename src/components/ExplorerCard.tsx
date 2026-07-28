import type { Explorer, ExplorerHandler } from "../types/Explorer";

type ExplorerCardProps = {
  explorer: Explorer;
  isSelected: boolean;
  disabled: boolean;
  onAdd: ExplorerHandler;
};

export default function ExploreCard({
  explorer,
  isSelected,
  disabled,
  onAdd,
}: ExplorerCardProps) {
  return (
    <div className="flex flex-col justify-between rounded-xl border bg-white p-4 shadow-sm transition border-slate-200">
      <div>
        <h3 className="mt-1 font-semibold text-slate-800">{explorer.name}</h3>
        <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
          {explorer.role}
        </p>
        <p className="mt-1 text-sm text-slate-500">Nivel: {explorer.level}</p>
      </div>
      <div className="mt-4 flex items-center justify-between">
        <p className="mt-1 text-sm text-slate-500">
          {isSelected
            ? "En el escuadrón"
            : explorer.available
              ? "Disponible"
              : "No disponible"}
        </p>
        <button
          onClick={() => onAdd(explorer)}
          disabled={disabled}
          className={`rounded-lg px-3 py-1.5 text-sm font-medium transition ${
            isSelected
              ? "bg-emerald-900 text-white hover:bg-emerald-950"
              : "bg-emerald-600 text-white hover:bg-emerald-700"
          } ${disabled ? "cursor-not-allowed opacity-60 hover:bg-emerald-600" : ""}`}
        >
          {isSelected ? "Quitar" : "Seleccionar"}
        </button>
      </div>
    </div>
  );
}
