import * as React from "react"

type Props = {
  onClick: () => any
  children?: Node | string
}

export const Button = (props: Props) => {
  const { onClick, children } = props

  return (
    <button
      type="button"
      className={[
        "border-2",
        "border-black",
        "rounded",
        "px-2",
        "py-1",
        "font-semibold",
      ].join(" ")}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
