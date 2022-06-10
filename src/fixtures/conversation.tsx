import { MetaData } from "../types/site"

export const EVENT_LOG = [
  {
    type: "weather_info_captured",
    data: {
      temperature_celsius: "12",
      temperature_fahrenheit: "54",
      description: "broken clouds",
    },
    conversationId: "ae2f0b5c-9918-48fe-bc6b-0283a999ab96",
    timestamp: 1649262297,
  },
  {
    type: "visitor_typing",
    data: {
      type: "Text",
      text: "asd",
    },
    conversationId: "ae2f0b5c-9918-48fe-bc6b-0283a999ab96",
    timestamp: 1649262303,
  },
  {
    type: "visitor_message_received",
    data: {
      type: "Text",
      text: "[The visitor has left the chat. You can close this session with /bye or wait in case the visitor comes back.]",
    },
    conversationId: "ae2f0b5c-9918-48fe-bc6b-0283a999ab96",
    timestamp: 1649262303,
  },
  {
    type: "agent_message_received",
    data: {
      type: "Text",
      text: "asd",
    },
    conversationId: "ae2f0b5c-9918-48fe-bc6b-0283a999ab96",
    timestamp: 1649262303,
  },
  {
    type: "visitor_typing",
    data: {
      type: "Text",
      text: "asd",
    },
    conversationId: "ae2f0b5c-9918-48fe-bc6b-0283a999ab96",
    timestamp: 1649262304,
  },
]

export const META_DATA: MetaData = {
  casePublicId: "cc747771-3344-4325-aa97-f40eff100d05",
  agentEmail: "martin.senne@snapengage.com",
}
