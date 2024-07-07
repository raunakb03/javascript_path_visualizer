import { useContext } from "react";
import { PathFindingContext } from "../context/PathfindingContext";

export const usePathfinding = () => {
  const context = useContext(PathFindingContext);
  if (!context) {
    throw new Error("usePathfinding must be used within a PathFindingProvider");
  }
  return context;
};
