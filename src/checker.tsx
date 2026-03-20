import type { GameObjectSymbol } from "./types"

export interface CheckerProps {
  id: number
  value: GameObjectSymbol
  objectSymbols: Record<GameObjectSymbol, string>
  onClick: (checkerIndex: number) => void
}

export function Checker(props: CheckerProps) {
  const symbol = typeof props.value === "string" ? props.objectSymbols[props.value] : ""
  function handleOnClick() {
    props.onClick(props.id)
  }
  return <button type="button" onClick={handleOnClick} data-testid={`checker-${props.id}`} >{symbol}</button>
}
