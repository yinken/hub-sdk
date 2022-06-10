import React, { useEffect, useRef, useState, useContext } from "react"
import { Container } from "../container/Container"
import { Form } from "../Form/form"
import { Field } from "../Form/field"
import { onlyUnique } from "../../helpers/array-helpers"
import { messageTypes } from "../../types/messages"
import { postMessage } from "../../helpers/message-helpers"
import { MetaData } from "../../types/site"

type Props = {
  metaData: MetaData
  replies?: [{ text: string }]
}

const h3ClassNames = ["font-bold", "p-2"]

export const Composer = (props: Props) => {
  const { agentEmail, casePublicId } = props.metaData
  const { replies } = props
  const [message, setMessage] = useState("")
  const fieldRef = useRef(null)

  const sendReply = (message: string) => {
    console.log(message)
    const messageToSend = {
      type: "agent_message_received",
      conversationPublicId: casePublicId,
      agent: agentEmail || localStorage.getItem("agentEmail"),
      data: {
        message: message,
      },
    }
    postMessage(messageToSend)
  }

  return (
    <>
      <Container className={["p-2"].join(" ")}>
        <h3 className={h3ClassNames.join(" ")}>Send response</h3>
        {replies?.length > 0 && (
          <ul className={["flex", "flex-col", "flex-wrap"].join(" ")}>
            {replies.map(reply => {
              const classNames = [
                "text-black",
                "px-2",
                "py-1",
                "cursor-pointer",
              ]
              return (
                <li className={["flex", "flex-col"].join(" ")}>
                  <a
                    onClick={() => sendReply(reply.text)}
                    className={classNames.join(" ")}
                  >
                    {reply.text}
                  </a>
                </li>
              )
            })}
          </ul>
        )}
      </Container>
      <Container className={["p-2"].join(" ")}>
        <h3 className={h3ClassNames.join(" ")}>Send custom response</h3>
        <Form
          actionLabel="Send A Message"
          action={() => {
            sendReply(message)
            setMessage("")
            console.log(fieldRef)
            fieldRef.current.value = ""
          }}
        >
          <Field
            ref={fieldRef}
            tag="textarea"
            label="Message"
            placeholder="Enter your message"
            onChange={e => setMessage(e.target.value)}
          />
        </Form>
      </Container>
    </>
  )
}
