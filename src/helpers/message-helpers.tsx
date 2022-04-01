export const postMessage = (message: Message) => {
  if (!window) {
    return
  }
  window.parent.postMessage(message, "*")
}