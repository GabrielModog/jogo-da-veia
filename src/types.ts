export type GameObjectSymbol = "cross" | "circle"

export interface GameState {
  prevTurn: GameObjectSymbol | null
  turn: GameObjectSymbol
  grid: GameObjectSymbol[]
}
