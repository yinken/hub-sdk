import { time } from "console"
import moment from "moment"
import * as React from "react"

import { MessageKeys, messageTypes } from "../../types/messages"

type Props = {
  event: Event
}

type Event = {
  conversationId: string
  data: TextMessage | WeatherInfo | File
  timestamp: number
  type: MessageKeys
}

type TextMessage = {
  type: "Text"
  text: string
}

type File = {
  type: "File"
  mimeType: "image/jpeg" | "image/svg+xml" | "image/png" | "application/pdf"
  fileName: string
  url: string
  mimeTypeUrl: string
}

type WeatherInfo = {
  temperature_celsius: string
  temperature_fahrenheit: string
  description: string
}

export const Event = (props: Props) => {
  const { type, data, timestamp } = props.event

  let content = null
  switch (type) {
    case "agent_message_received": {
      if (data.type === "File" && data.mimeType === "image/jpeg") {
        content = <img style={{ height: "180px" }} src={data.url} />
      }
    }
  }
  return (
    <div
      className={[
        "bg-slate-100",
        "border-b",
        "border-gray-400",
        "odd:bg-slate-200",
        "p-2",
      ].join(" ")}
    >
      <div>
        <span
          className={["font-semibold"].join(" ")}
        >{`${messageTypes[type]}`}</span>
        <span className={["text-xs", "ml-2"].join(" ")}>{`${moment
          .unix(timestamp)
          .format("YYYY-MM-DD, HH:mm")}`}</span>
      </div>

      <div className={["font-mono", "break-all"].join(" ")}>
        {JSON.stringify(data)}
        {content}
      </div>
    </div>
  )
}
