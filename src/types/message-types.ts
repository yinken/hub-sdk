type Message = {
  type: "agent_message_received"
  conversationPublicId: string
  agent: string
  data: {
    message: string
  }
}
