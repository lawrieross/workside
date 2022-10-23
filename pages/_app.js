import Layout from '../components/Layout'

import '../styles/globals/styles.scss'

export default function Workside({ Component, pageProps, router }) {
  const jobs = [
    { id: 'first', title: 'Looking for a freelance frontend developer', position: 'Frontend developer', experience: 'Expert', salary: '$100-120/hr', overview: 'Dividstar was established in 1932 by Matthew Cohens in Virginia, United States. Dividstar has been the leader application for personal finance over the past 10 decades and aim to continue holding that position. As times continue to evolve, we do too.', location: 'Virginia, United States', tags: ['Frontend', 'Webdev'], verified: true, image: '/first.svg' },
    { id: 'second', title: 'Product Designer needed', position: 'Product designer', experience: 'Expert', salary: '$100-120/hr', overview: 'Dividstar was established in 1932 by Matthew Cohens in Virginia, United States. Dividstar has been the leader application for personal finance over the past 10 decades and aim to continue holding that position. As times continue to evolve, we do too.', location: 'Remote', tags: ['Design', 'Research'], verified: false, image: '/second.svg' },
    { id: 'third', title: 'SEO Specialist for an e-commerce shop', position: 'SEO specialist', experience: 'Expert', salary: '$100-120/hr', overview: 'Dividstar was established in 1932 by Matthew Cohens in Virginia, United States. Dividstar has been the leader application for personal finance over the past 10 decades and aim to continue holding that position. As times continue to evolve, we do too.', location: 'New York, United States', tags: ['SEO'], verified: false, image: '/third.svg' },
    { id: 'fourth', title: 'Migrate our website from Sketch to Figma', position: 'UI designer', experience: 'Expert', salary: '$100-120/hr', overview: 'Dividstar was established in 1932 by Matthew Cohens in Virginia, United States. Dividstar has been the leader application for personal finance over the past 10 decades and aim to continue holding that position. As times continue to evolve, we do too.', location: 'Mumbai, India', tags: ['Designer'], verified: true, image: '/fourth.svg' }
  ]
  const hasRouter = !!router.state
  const currentJob = hasRouter ? jobs.find(job => job.id === router.state.query.id) : {}

  return (
    <Layout>
      <Component {...pageProps} jobs={jobs} job={currentJob} />
    </Layout>
  )
}
