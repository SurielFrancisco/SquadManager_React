export type Explorer = {
  id: number,
  name: string,
  role: string,
  level: number,
  available: boolean,
};

export type ExplorerHandler = (explorer: Explorer) => void;