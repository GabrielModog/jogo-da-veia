import { useMemo, useState } from "react"

import type { GameState } from "./types"
import { matchCheckers } from "./game-rules"

const initialState: GameState = {
  prevTurn: null,
  turn: "circle",
  grid: new Array(9).fill(null),
}

export default function useGame() {
  const [state, setState] = useState(initialState)

  function handleMarkChecker(checkerIndex: number) {
    if (winner || state.grid[checkerIndex]) return
    setState(prev => {
      const turn = state.turn === "cross" ? "circle" : "cross"
      const copy = [...state.grid]
      copy[checkerIndex] = turn
      return ({
        ...prev, 
        grid: copy,
        prevTurn: state.turn,
        turn,
      })
    })
  }

  const winner = useMemo(() => {
    const matchResult = matchCheckers(state.grid)
    const result = matchResult === "" ? null : matchResult
    return result
  }, [state.grid])

  return {
    grid: state.grid,
    winner,
    handleMarkChecker,
  }
}