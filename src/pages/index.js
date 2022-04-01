import React, { useEffect, useRef, useState } from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Button } from "../components/Button/button"
import { Form } from "../components/Form/form"
import { Field } from "../components/Form/field"

const EVENT_TYPES = [
  "weather_info_captured",
  "visitor_typing",
  "agent_message_received",
  "conversation_started",
  "name_captured",
  "visitor_message_received",
  "visitor_page_update",
  "conversation_closed_by_system",
  "conversation_closed_by_visitor",
  "conversation_closed_by_agent",
  "phone_captured",
  "email_captured",
  "conversation_sent_integration",
  "reclaim_transfer_request",
  "request_file",
  "request_secure_data",
  "ban_user",
  "call_me",
  "visitor_transcript_request",
  "widget_changed",
  "ignore",
  "record",
  "auto_translate_enabled",
  "auto_translate_disabled",
  "auto_translate_language_changed",
]

const IndexPage = () => {
  const [eventLog, setEventLog] = useState([])
  const ref = useRef(null);
  useEffect(() => {
    if (window) {
      console.log("attached listener")
      window.addEventListener("message", event => messageListener(event))
    }

    const messageListener = (e) => {
      console.log(e)
      const message = e.data
      if (EVENT_TYPES.includes(message.type)) {
        setEventLog(prevState => {
          return [...prevState, message];
        })
      }

    }

    return function cleanup() {
      console.log("removed listener")
      window.removeEventListener("message", messageListener);
    }
  }, [ref])
  return (<Layout>
    <main className="flex flex-col" ref={ref}>
      <h1>HUB SDK Testing Environment</h1>
      <section>
        <h2>Event Log</h2>
        <div className={["flex", "flex-col", "font-mono"].join(" ")}>
          {eventLog.length > 0 && eventLog.map(event => {
            return <div className={["bg-slate-100", "border-b", "border-gray-400", "odd:bg-slate-200"].join(" ")}><h3 className={["font-semibold"].join(" ")}>{event.type}</h3><div className={["break-all"].join(" ")}>{JSON.stringify(event.data)}</div></div>
          })}
        </div>
      </section>
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
    </main>
  </Layout>)
}

export default IndexPage
