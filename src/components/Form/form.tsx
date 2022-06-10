import { setActions } from "gatsby-plugin-sharp"
import React from "react"

import { Button } from "../button/Button"

type Props = {
  children: Node
  action: () => any
  actionLabel?: string
}

export const Form = (props: Props) => {
  const { action, actionLabel = "Send", children } = props
  const handleFormSubmit = (e: MouseEvent) => {
    e.preventDefault()
    action
  }
  return (
    <form
      className={[
        "flex",
        "flex-col",
        "sm:flex-row",
        "sm:flex-wrap",
        "p-2",
        "w-full",
      ].join(" ")}
    >
      {children}
      {action && (
        <div className={["w-full", "pt-2"].join(" ")}>
          <Button onClick={action}>{actionLabel}</Button>
        </div>
      )}
    </form>
  )
}
