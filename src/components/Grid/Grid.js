import { useState } from "react";

const Grid = () => {
  const [grid, setGrid] = useState(
    Array(5)
      .fill(null)
      .map((arr) => Array(5).fill("white"))
  );

  const toggleCell = (newGrid, row, col) => {
    newGrid[row][col] = newGrid[row][col] == "white" ? "green" : "white";
  };

  const findNeighbors = (newgrid, row, col) => {
    const directions = [
      [0, 1],
      [0, -1],
      [1, 0],
      [-1, 0],
    ];
    const neig = directions
      .map(([x, y]) => [row + x, col + y])
      .filter(
        ([x, y]) =>
          x >= 0 && x < newgrid.length && y >= 0 && y < newgrid[0].length
      );
    return neig;
  };
  const handleToggle = (row, col) => {
    setGrid((prev) => {
      const newGrid = prev.map((r) => [...r]);
      toggleCell(newGrid, row, col);
      findNeighbors(newGrid, row, col).forEach(([x, y]) => 
        toggleCell(newGrid, x, y)
      );
      return newGrid;
    });
  };

  return (
    <div>
      {grid.map((row, i) => (
        <div className="flex">
          {row.map((color, j) => (
            <div
              className="w-12 h-12 m-2 border"
              style={{ background: `${color}` }}
              onClick={() => handleToggle(i, j)}
            ></div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Grid;
