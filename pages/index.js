import Head from 'next/head'
import Layout from '../components/Layout'
import VizEmbed from '../components/VizEmbed'

export default function Home() {
  return (
    <Layout>
      <h1>CVT Super Dashboard</h1>

      <div className="viz-grid">
        <VizEmbed name="Bing COVID-19 Tracker" url="https://www.bing.com/covid/local/unitedstates" />
        <VizEmbed name="WHO COVID Dashboard" url="https://covid19.who.int/" />
        <VizEmbed name="Novel Coronavirus (COVID-19) Infection Map" url="https://hgis.uw.edu/virus/" />
        <VizEmbed name="HealthMap" url="https://www.healthmap.org/ncov2019/" />
        <VizEmbed name="COVID Tracker" url="https://dashboard.covid19.data.gouv.fr/vue-d-ensemble?location=FRA" />
        <VizEmbed name="Florida's COVID-19 Surveillance Dashboard" url="https://fdoh.maps.arcgis.com/apps/opsdashboard/index.html#/8d0de33f260d444c852a615dc7837c86" />
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
