import { Fragment } from 'react'
import Image from 'next/image'
import HeroSection from '@/components/layout/HeroSection/HeroSection'
import Main from '@/components/layout/Main/Main'
import { Container } from 'react-bootstrap'

const OurStoryPage = () => {
  return (
    <Fragment>
      <HeroSection
        title='Our Story'
        description="At Asia Venture, we're committed to opening doors to the wonders of the East, providing comprehensive, personalized travel guidance and experiences that showcase the rich tapestry of cultures, landscapes, and histories unique to Asia."
      />
      <Main>
        <Container className='d-flex justify-content-center'>
          <Image
            src='/images/aboutus.jpg'
            width={1000}
            height={500}
            alt='About us'
          />
        </Container>
        <Container className='mt-3 p-5'>
          <p>Asia Venture is a dynamic travel company dedicated to unlocking the fascinating and diverse treasures of Asia for our clients. Our mission is to provide travelers with personalized journeys that transcend the typical tourist experience, delving into the heart of the continent&apos;s vibrant cultures, breathtaking landscapes, and rich histories. With a team of experienced professionals passionate about Asia, we leverage our knowledge and connections to design tours that cater to our clients&apos; interests, ensuring that every trip becomes a memory of a lifetime. With Asia Venture, your adventure is not just about reaching the destination - it&apos;s about immersing yourself in the journey, discovering hidden gems, and experiencing Asia like never before.</p>
        </Container>
      </Main>
    </Fragment>
  )
}

export default OurStoryPage
