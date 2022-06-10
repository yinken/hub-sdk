import * as React from "react"

export const Container = props => {
  const { children, className } = props
  return (
    <div className={[className, "flex", "flex-col"].join(" ")}>{children}</div>
  )
}
