import {
  END_TILE_STYLE,
  MAX_ROWS,
  PATH_TILE_STYLE,
  START_TILE_STYLE,
  TILE_STYLE,
  TRAVERSED_TILE_STYLE,
  WALL_TILE_STYLE,
} from "../utils/constants";

interface MouseFunction {
  (row: number, col: number): void;
}

type TileProps = {
  row: number;
  col: number;
  isStart: boolean;
  isEnd: boolean;
  isTraversed: boolean;
  isWall: boolean;
  isPath: boolean;
  handleMouseDown: MouseFunction;
  handleMouseUp: MouseFunction;
  handleMouseEnter: MouseFunction;
};

const Tile = ({
  row,
  col,
  isStart,
  isEnd,
  isTraversed,
  isWall,
  isPath,
  handleMouseDown,
  handleMouseUp,
  handleMouseEnter,
}: TileProps) => {
  const tileTypeStyle = isStart
    ? START_TILE_STYLE
    : isEnd
      ? END_TILE_STYLE
      : isWall
        ? WALL_TILE_STYLE
        : isPath
          ? PATH_TILE_STYLE
          : isTraversed
            ? TRAVERSED_TILE_STYLE
            : TILE_STYLE;
  if (isStart == true) {
    console.log(tileTypeStyle);
  }

  const borderStyle =
    row == MAX_ROWS - 1 ? "border-b" : col == 0 ? "border-l" : "";
  const edgeStyle = row == MAX_ROWS - 1 && col == 0 ? "border-l" : "";
  return (
    <div
      className={`${tileTypeStyle} ${borderStyle} ${edgeStyle}`}
      id={`${row}-${col}`}
      onMouseDown={() => handleMouseDown(row, col)}
      onMouseUp={() => handleMouseUp(row, col)}
      onMouseEnter={() => handleMouseEnter(row, col)}
    />
  );
};

export default Tile;
