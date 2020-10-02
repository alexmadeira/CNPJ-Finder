import React from 'react'
import Head from 'next/head'

import { Container } from '../styles/pages/Home'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Homepage</title>
      </Head>
      <h1>ReactJS Structure</h1>
      <p>A ReactJS + Next.js structure made by Alex Madeira.</p>
    </Container>
  )
}

export default Home
