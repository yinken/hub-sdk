import React, { useContext } from "react"
import { ConversationContext } from "../context/ConversationContext"
import { Meta } from "./meta/Meta"
import { Navigation } from "./navigation/Navigation"

const NAV_ITEMS = [
  {
    title: "Event Log",
    link: "/",
    name: "index",
  },
  {
    title: "Send A Message",
    link: "/send-message",
    name: "send-message",
  },
]
function Header({ siteTitle }) {
  const conversationContext = useContext(ConversationContext)
  const { metaData } = conversationContext

  return (
    <header>
      <Navigation navItems={NAV_ITEMS} />
      <Meta metaData={metaData} />
    </header>
  )
}

export default Header
