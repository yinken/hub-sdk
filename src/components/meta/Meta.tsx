import * as React from "react"
import { metaTypes } from "../../types/messages"
import { MetaData } from "../../types/site"

type Props = {
  metaData: MetaData
}

export const Meta = (props: Props) => {
  const { metaData } = props
  if (!metaData) {
    return null
  }
  return (
    <div className={["p-2"].join(" ")}>
      <ul className={["flex", "flex-col", "flex-wrap", "p-2"].join(" ")}>
        {Object.keys(metaData).map(key => {
          return (
            <li key={key}>
              <span
                className={["font-semibold"].join(" ")}
              >{`${metaTypes[key]}: `}</span>
              <span>{`${metaData[key]}`}</span>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
