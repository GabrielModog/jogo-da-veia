import { renderHook, screen, act } from "@testing-library/react"
import { describe, it, expect } from "vitest"
import useGame from "./use-game"

import "@testing-library/jest-dom/vitest"

describe("useGame custom hook", () => {
  it("should have an initial state", () => {
     const { result } = renderHook(() => useGame())
     expect(result.current.winner).toBeNull()
  })

  it("should cross win", () => {
    const { result } = renderHook(() => useGame())
    const crossWinHorizontal = [3, 0, 4, 1, 5]

    expect(result.current.winner).toBeNull()

    for(let idx of crossWinHorizontal) {
      act(() => {
        result.current.handleMarkChecker(idx)
      })
    }

    expect(result.current.winner).toBe("cross")
  })
})