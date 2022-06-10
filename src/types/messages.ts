type Message = {
  type: "agent_message_received"
  conversationPublicId: string
  agent: string
  data: {
    message: string
  }
}

export const messageTypes = {
  weather_info_captured: "Weather Info",
  visitor_typing: "Vistor typing",
  agent_message_received: "Agent Message Received",
  conversation_started: "Conversation Started",
  name_captured: "Name Captured",
  visitor_message_received: "Visitor Message Received",
  visitor_page_update: "Visitor Page Update",
  conversation_closed_by_system: "Conversation closed by System",
  conversation_closed_by_visitor: "Conversation closed by Visitor",
  conversation_closed_by_agent: "Conversation closed by Agent",
  phone_captured: "Phone captured",
  email_captured: "E-Mail captured",
  conversation_sent_integration: "Conversation sent to integration",
  reclaim_transfer_request: "Reclaim Transfer Request",
  request_file: "File requested",
  request_secure_data: "Secure Data requested",
  ban_user: "User banned",
  call_me: "Call me",
  visitor_transcript_request: "Transcript requested",
  widget_changed: "Widget changed",
  ignore: "Ignore",
  record: "Record",
  auto_translate_enabled: "Auto-translation enabled",
  auto_translate_disabled: "Auto-translation disabled",
  auto_translate_language_changed: "Auto-translation disabled language changed",
}

export type MessageKeys = keyof typeof messageTypes
export type MessageValues = typeof messageTypes[MessageKeys]

export const metaTypes = {
  casePublicId: "Case ID",
  agentEmail: "Agent E-Mail",
}

export type MetaDataKeys = keyof typeof metaTypes
export type MetaDataValues = typeof metaTypes[MetaDataKeys]
