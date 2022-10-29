import jobsData from '../jobs.json'
import Layout from '../components/Layout'

import '../styles/globals/styles.scss'

export default function Workside({ Component, pageProps, router }) {
  const { jobs } = jobsData
  const hasRouter = !!router.state
  const currentJob = hasRouter ? jobs.find(job => job.id === router.state.query.id) : {}

  return (
    <Layout>
      <Component {...pageProps} jobs={jobs} job={currentJob} />
    </Layout>
  )
}
