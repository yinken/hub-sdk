import { setActions } from "gatsby-plugin-sharp"
import React from "react"

import { Button } from "../Button/button"

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
      className={["flex", "flex-col", "sm:flex-row", "sm:flex-wrap"].join(" ")}
    >
      {children}
      {action && (
        <div className="w-full">
          <Button onClick={action}>{actionLabel}</Button>
        </div>
      )}
    </form>
  )
}
