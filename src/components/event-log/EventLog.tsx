import React, { useEffect, useRef, useState, useContext } from "react"
import { Container } from "../container/Container"
import { Event } from "../event/Event"
import { onlyUnique } from "../../helpers/array-helpers"
import { messageTypes } from "../../types/messages"

type Props = {
  events?: []
}

export const EventLog = (props: Props) => {
  const { events } = props
  const [typeFilter, setTypeFilter] = useState(
    events?.map(event => event.type) || []
  )

  const handleFilterChange = type => {
    if (typeFilter.includes(type)) {
      setTypeFilter(typeFilter.filter(t => t !== type))
    } else {
      setTypeFilter([...typeFilter, type])
    }
  }

  if (!events) {
    return null
  }
  return (
    <>
      <Container>
        <ul className={["flex", "flex-row", "flex-wrap", "p-2"].join(" ")}>
          {events
            .map(event => event.type)
            .filter(onlyUnique)
            .map(type => {
              const classNames = [
                "text-black",
                "px-2",
                "py-1",
                "cursor-pointer",
              ]
              if (!typeFilter.includes(type)) {
                classNames.push("opacity-60")
              }
              return (
                <li className={["flex"].join(" ")}>
                  <a
                    className={classNames.join(" ")}
                    onClick={() => handleFilterChange(type)}
                  >
                    {messageTypes[type]}
                  </a>
                </li>
              )
            })}
        </ul>
      </Container>
      <Container>
        <ul className={["flex", "flex-col", "p-2"].join(" ")}>
          {events.length > 0 &&
            events
              .filter(event => typeFilter.includes(event.type))
              .map(event => {
                return <Event event={event} />
              })}
        </ul>
      </Container>
    </>
  )
}
