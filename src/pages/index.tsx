import React, { useCallback, useEffect } from 'react'
import Head from 'next/head'

import receitaws from 'receitaws'

import { Container } from '~/styles/pages/Home'

const Home: React.FC = () => {
  const opt = {
    timeout: 10000
  }

  const instance = receitaws(opt)

  const getCNPJ = useCallback(async () => {
    instance('28947502000143').then(
      v => console.log(v.data),
      error => console.log(error)
    )
  }, [])

  useEffect(() => {
    getCNPJ()
  }, [])

  return (
    <Container>
      <Head>
        <title>Homepage</title>
      </Head>
    </Container>
  )
}

export default Home
