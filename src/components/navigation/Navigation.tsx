import React, { useContext } from "react"
import { Link } from "gatsby"
import { NavigationItem } from "../../types/site"

import { ConversationContext } from "../../context/ConversationContext"

type Props = {
  navItems: NavigationItem[]
}

export const Navigation = (props: Props) => {
  const conversationContext = useContext(ConversationContext)
  const { setActiveNavigation, activeNavigation } = conversationContext
  const { navItems } = props
  return (
    <nav>
      <ul className={["flex", "flex-row", "p-2"].join(" ")}>
        {navItems.map(item => {
          const classNames = [
            "cursor-pointer",
            "border-transparent",
            "border-2",
            "mx-1",
            "my-2",
          ]
          if (activeNavigation.name === item.name) {
            classNames.push("border-b-black")
          }
          return (
            <li key={item.title}>
              <a
                className={classNames.join(" ")}
                onClick={() => setActiveNavigation(item)}
                title={item.title}
              >
                {item.title}
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
