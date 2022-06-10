import * as React from "react"

type Props = {
  isVisible: boolean
  className: string
  children: React.ReactNode
}

export const Section: React.FC<Props> = (props: Props) => {
  const { children, className, isVisible = true } = props

  const classNames = [className, isVisible ? "" : "hidden"].join(" ")
  return <section className={classNames}>{children}</section>
}
