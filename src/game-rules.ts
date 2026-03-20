import type { GameObjectSymbol } from "./types"

const matches: number[][] = [
  [0, 1, 2], // -
  [3, 4, 5], // -
  [6, 7, 8], // -
  [0, 4, 8], // \
  [1, 4, 7], // |
  [2, 4, 6], // /
  [0, 3, 6], // |
  [2, 5, 8], // |
]

export const gameObjectSymbol: Record<GameObjectSymbol, string> = {
  ["cross"]: "X",
  ["circle"]: "O",
}

export function matchCheckers(board: GameObjectSymbol[]) {
  const match = matches.reduce((ac, _, idx, arr) =>  {
    const [a, b, c] = arr[idx]
    if (board[a] && board[a] === board[b] && board[a] === board[c]) ac += board[a]
    return ac
  }, "")
  return match
}