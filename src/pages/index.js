import React, { useEffect, useRef, useState, useContext } from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Button } from "../components/button/Button"
import { Form } from "../components/Form/form"
import { Field } from "../components/Form/field"

import { ConversationContext } from "../context/ConversationContext"
import { Main } from "../components/main/Main"
import { Section } from "../components/section/Section"
import { Container } from "../components/container/Container"
import { EventLog } from "../components/event-log/EventLog"

import { postMessage } from "../helpers/message-helpers"
import { messageTypes } from "../types/messages"
import { Composer } from "../components/composer/Composer"
import replies from "../data/replies.json"

const IndexPage = () => {
  const conversationContext = useContext(ConversationContext)
  const { setMetaData, setEventLog, eventLog, metaData, activeNavigation } =
    conversationContext
  const ref = useRef(null)

  useEffect(() => {
    console.log(eventLog)
  }, [eventLog])

  useEffect(() => {
    if (window) {
      window.addEventListener("message", function (event) {
        console.log(event)
      })
      window.addEventListener("message", event => messageListener(event))

      const hasStarted = localStorage.getItem(
        `${metaData.casePublicId}_hasStarted`
      )

      if (!hasStarted) {
        postMessage({
          type: "status",
          data: {
            message: "ready",
          },
        })
      }
    }

    const messageListener = e => {
      if (
        e.data.source !== "react-devtools-content-script" &&
        e.data.source !== "react-devtools-bridge"
      ) {
      }
      const message = e.data
      if (Object.keys(messageTypes).includes(message.type)) {
        if (message.sender && message.sender.type === "AGENT")
          setMetaData({
            agentEmail: message.sender.id,
            casePublicId: message.conversationPublicId,
          })
        switch (message.type) {
          case "conversation_started": {
            localStorage.setItem(`${message.casePublicId}_hasStarted`, true)
            break
          }
        }
        setEventLog(message)
      }
    }

    return function cleanup() {
      window.removeEventListener("message", messageListener)
    }
  }, [])
  return (
    <Layout>
      <Main className="flex flex-col" ref={ref}>
        <div>Version 1.8</div>
        <Section isVisible={activeNavigation.name === "index"}>
          <EventLog events={eventLog} />
        </Section>
        <Section isVisible={activeNavigation.name === "send-message"}>
          <Composer metaData={metaData} replies={replies} />
        </Section>

        {/* <section className="w-full">
        <Form action={() => console.log("hallo")} actionLabel="Save">
          <label className="w-100 sm:w-1/2">
            Widget ID
          </label>

          <Field tag="input" type="text" />
          <input
            className="w-100 sm:w-1/2"
            type="text"
            name="widgetId"
            placeholder="Input the id of the widget you are currently testing"
          />
          <label className="w-100 sm:w-1/2">Chat ID</label>
          <input
            className="w-100 sm:w-1/2"
            type="text"
            name="caseId"
            placeholder="Input the id of the chat you are currently testing"
          />
          <label className="w-100 sm:w-1/2">Agent e-mail</label>
          <input
            className="w-100 sm:w-1/2"
            type="email"
            name="agentEmail"
            placeholder="Input the e-mail adress of the agent you are using"
          />
        </Form>
      </section>

      <section>
        <h2>Send a message</h2>
        <form>
          <textarea
            name="messageText"
            id="messageText"
            placeholder="Input your message here"
          ></textarea>
          <button type="button" name="sendMessage" id="sendMessage">
            Send message
          </button>
        </form>
      </section> */}
      </Main>
    </Layout>
  )
}

export default IndexPage
