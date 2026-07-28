import type { Explorer } from "../types/Explorer";

type SquadPanelProps = {
  explorer: Explorer;
};

export default function SquadPanelRow({ explorer }: SquadPanelProps) {
  return (
    <li className="flex items-center justify-between gap-3 py-3">
      <div className="min-w-0">
        <p className="truncate font-medium text-slate-800">{explorer.name}</p>
      </div>
    </li>
  );
}
