import ExploreCard from "./ExplorerCard";
import type { Explorer, ExplorerHandler } from "../types/Explorer";

type ExplorerListProps = {
  explorers: Explorer[];
  selectedExplorerIds: number[];
  onAdd: ExplorerHandler;
};

export default function ExplorerList({
  explorers,
  selectedExplorerIds,
  onAdd,
}: ExplorerListProps) {
  return (
    <section className="md: col-span-2">
      <h1 className="mb-4 text-xl font-semibold text-slate-900">
        Exploradores
      </h1>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {explorers.map((explorer) => {
          const isSelected = selectedExplorerIds.includes(explorer.id);
          const disabled =
            !explorer.available ||
            (selectedExplorerIds.length === 3 && !isSelected);

          return (
            <ExploreCard
              key={explorer.id}
              explorer={explorer}
              isSelected={isSelected}
              disabled={disabled}
              onAdd={onAdd}
            />
          );
        })}
      </div>
    </section>
  );
}
