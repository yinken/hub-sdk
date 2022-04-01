import * as React from "react"

type Props = {
  tag: "input"
  type: "text" | "email"
  name: string
}

export const Field = (props: Props) => {
  const { name, tag = "input" } = props
  let Tag = tag

  return <Tag name={name} className={["w-100", "sm:w-1/2"].join(" ")}></Tag>
}
