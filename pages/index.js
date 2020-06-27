import Head from 'next/head'
import Layout from '../components/Layout'
import VizEmbed from '../components/VizEmbed'

export default function Home() {
  return (
    <Layout>
      <h1>CVT Super Dashboard</h1>

      <div className="viz-grid">
        <VizEmbed url="https://www.bing.com/covid/local/unitedstates" />
        <VizEmbed url="https://www.bing.com/covid/local/unitedstates" />
      </div>

      <style jsx>{`
        .viz-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          grid-auto-rows: 300px;
          grid-gap: 30px;
        }

        .viz-grid > * {
          width: 100%;
        }
      `}</style>
    </Layout>
  )
}
