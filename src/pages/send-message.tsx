// Gatsby supports TypeScript natively!
import React from "react"
import { PageProps } from "gatsby"

import Layout from "../components/layout"
import { Main } from "../components/main/Main"
import { Section } from "../components/section/Section"
import { Container } from "../components/container/Container"
import { Button } from "../components/button/Button"



const SendMessagePage = (props: PageProps) => (
  <Layout>
    <Main>
      <h2>Send A Message</h2>
      
    </Main>
  </Layout>
)

export default SendMessagePage
