import React from "react"
import PropTypes from 'prop-types';

import './src/style/tailwind.css';

// Context
import { ConversationProvider } from "./src/context/ConversationContext"

export const wrapRootElement = ({ element }) => {
  return <ConversationProvider value={[]}>{element}</ConversationProvider>
}

wrapRootElement.propTypes = { element: PropTypes.any }
