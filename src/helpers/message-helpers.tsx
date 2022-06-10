export const postMessage = (message: Message) => {
  console.log(message)
  if (!window) {
    return
  }
  window.parent.postMessage(message, "*")
}