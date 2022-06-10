import React from "react"
import PropTypes from "prop-types"
import { NavigationItem, MetaData } from "../types/site"
import { EVENT_LOG, META_DATA } from "../fixtures/conversation"

type ConversationState = {
  activeNavigation?: NavigationItem
  eventLog?: []
  setEventLog?: (event: any) => void
  setMetaData?: (data: MetaData) => void
  setActiveNavigation?: (navigationItem: NavigationItem) => void
  metaData: MetaData
}

const initialState: ConversationState = {
  activeNavigation: {
    title: "Event Log",
    link: "/",
    name: "index",
  },
  // eventLog: EVENT_LOG,
  // metaData: META_DATA,
  metaData: {
    agentEmail: "",
    casePublicId: "",
  },
  eventLog: []
}

export const ConversationContext = React.createContext(initialState)

export class ConversationProvider extends React.Component {
  constructor(props) {
    super(props)

    this.state = initialState
    this.setEventLog = this.setEventLog.bind(this)
    this.setMetaData = this.setMetaData.bind(this)
    this.setActiveNavigation = this.setActiveNavigation.bind(this)
  }

  setEventLog = event => {
    this.setState(prevState => ({ eventLog: [...prevState.eventLog, event] }))
  }

  setMetaData = (data: MetaData) => {
    this.setState({
      metaData: {
        agentEmail: data.agentEmail,
        casePublicId: data.casePublicId,
      },
    })
  }

  setActiveNavigation = navigationItem => {
    this.setState({ activeNavigation: navigationItem })
  }

  render() {
    const { children } = this.props

    return (
      <ConversationContext.Provider
        value={{
          ...this.state,
          setEventLog: this.setEventLog,
          setMetaData: this.setMetaData,
          setActiveNavigation: this.setActiveNavigation,
        }}
      >
        {children}
      </ConversationContext.Provider>
    )
  }
}

export const ConversationConsumer = ConversationContext.Consumer
