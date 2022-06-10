import * as React from "react"

export const Main = props => {
  const { children } = props
  return <main className={["flex", "flex-col"].join(" ")}>{children}</main>
}
