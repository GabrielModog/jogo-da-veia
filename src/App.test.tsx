import { fireEvent, render, screen } from "@testing-library/react"
import { describe, it, expect } from "vitest"
import "@testing-library/jest-dom"
import App from "./App"

describe("App Component - Default State", () => {
  it("should render a default winner label", () => {
    render(<App />)
    expect(screen.getByTestId("winner-label")).toHaveTextContent("Winner:")
  })

  it("should render complete board", () => {
    render(<App />)
    expect(screen.getByTestId("board")).toBeInTheDocument()
  })
})

describe("App Component - Cross Wins", () => {
  it("cross should win", () => {
    render(<App />)
    
    const crossWinHorizontal = [3, 0, 4, 1, 5]

    for(let check of crossWinHorizontal) {
      const btn = screen.getByTestId(`checker-${check}`)
      fireEvent.click(btn)
    }
    
    expect(screen.getByTestId("winner-label")).toHaveTextContent("Winner: cross")
  })
})
