import { Fragment } from 'react'
import HeroSection from '@/components/layout/HeroSection/HeroSection'
import Main from '@/components/layout/Main/Main'

const NotFondPage = () => {
  return (
    <Fragment>
      <HeroSection
        title='404 Not Found'
        description="Wrong way go back"
      />
      <Main>
      </Main>
    </Fragment>
  )
}


export default NotFondPage
