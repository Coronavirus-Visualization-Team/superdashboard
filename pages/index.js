import Head from 'next/head'
import Layout from '../components/Layout'
import VizEmbed from '../components/VizEmbed'

export default function Home() {
  return (
    <Layout>
      <h1>CVT Super Dashboard</h1>

      <VizEmbed url="https://www.bing.com/covid/local/unitedstates" />
    </Layout>
  )
}
