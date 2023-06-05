import { Fragment } from 'react'
import Head from 'next/head'
import HeroSection from '@/components/layout/HeroSection/HeroSection'
import CustomCarousel from '@/components/common/Carousel/CustomCarousel'
import Main from '@/components/layout/Main/Main'
import { Container, Row, Col } from 'react-bootstrap'
import ImageLoader from '@/components/features/ImageLoader/ImageLoader'


function HomePage ({images, imageLoaderImage}) {


  return (
    <Fragment>
      <Head>
        <title>Asia Venture</title>
        <meta
          name='description'
          description='your best advice for travelling around Asia' />
      </Head>
      <HeroSection 
        title='Discover the Orient'
        description='invites you to embark on a captivating journey through the culturally rich and enchanting lands of the East'/>
      
      <Main>

        <Container>

          <Row className='align-items-center'>
            <Col className='d-flex justify-content-center'>
              <CustomCarousel 
                images={images}/>
            </Col>
            <Col className='d-flex justify-content-center'>
              <Row>
                <Col>
                   <Container>
                  <p className='p-4'>Welcome to Asia Venture, your ultimate guide to adventuring through the captivating and diverse landscapes of Asia. Our website is designed to provide you with all the inspiration and information you need to embark on an unforgettable journey across this enchanting continent. 
                  Asia is a land of incredible diversity, offering a rich tapestry of cultures, breathtaking natural wonders, and ancient traditions waiting to be explored. From the bustling streets of Tokyo to the serene temples of Kyoto in Japan, the vibrant markets of Bangkok in Thailand, and the majestic beauty of Taiwan, Asia is a treasure trove of extraordinary experiences.</p>
                  </Container>
                </Col>
                <Col className='d-flex justify-content-center align-items-center'>
                  <div style={{ position:'relative', width: '600px', height: '300px'}}><ImageLoader image={imageLoaderImage}/></div>
                </Col>
              </Row>
            </Col>
          </Row>

        </Container>


        <div>
        </div>
      </Main>
    </Fragment>
  )
}



export const getStaticProps = async () => {
  const carouselQuery = 'east asia';
  const carouselRes = await fetch(`https://api.unsplash.com/search/photos?query=${carouselQuery}&orientation=portrait&client_id=${process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY}`)
  const carouselData = await carouselRes.json();
  const images = carouselData.results;

  const imageLoaderQuery = 'kyoto';
  const imageLoaderRes = await fetch(`https://api.unsplash.com/search/photos?query=${imageLoaderQuery}&orientation=landscape&client_id=${process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY}`);
  const imageLoaderData = await imageLoaderRes.json();
  const imageLoaderImage = imageLoaderData.results[0];

  return {
    props: {
      images,
      searchQuery: carouselQuery,
      imageLoaderImage,
    },
    revalidate: 60
  };
};


export default HomePage
