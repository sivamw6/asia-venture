import { useRouter } from 'next/router';
import { Fragment } from 'react';
import Head from 'next/head';
import { destinations } from '@/database/db';
import { Container,Table, Row, Col } from 'react-bootstrap'
import HeroSection from '@/components/layout/HeroSection/HeroSection'
import CustomCarousel from '@/components/common/Carousel/CustomCarousel';
import Main from '@/components/layout/Main/Main';
import TableAnimation from '@/components/features/TableAnimation/TableAnimation';

// get destination from url
const DestinationPage = (props) => {
  const router = useRouter();
  if (!router.isReady) return null;
  const { destination } = router.query;


  // capitalize destination
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  }
  const capitalizedDestination = capitalizeFirstLetter(destination);


  // get destination data in db.js
  function getDestinationData(name) {
    const destination = destinations.find(item => item.name === name);
    return destination;
  }
  const destinationData = getDestinationData(capitalizedDestination);
  const { capital, currency, language, description } = destinationData;


  // get weather data
  const { weatherData } = props;

  const { images } = props;

  return (
    <Fragment>
      <Head>
        <title>Asia Venture | {capitalizedDestination}</title>
        <meta></meta>
      </Head>
      <div>
        <HeroSection title={'About ' + capitalizedDestination} />
        <Main>
          <Container>
            <Row className='align-items-center'>
              <Col className='d-flex justify-content-center'>
                <CustomCarousel images={images} />
              </Col>
              <Col className='my-3 d-flex justify-content-center'>
                <Table>
                  <tbody>
                    <TableAnimation delay={100}>
                      <td>Capital: </td>
                      <td>{capital}</td>
                    </TableAnimation>
                    <TableAnimation delay={200}>
                      <td>Currency: </td>
                      <td>{currency}</td>
                    </TableAnimation>
                    <TableAnimation delay={300}>
                      <td>Current weather: </td>
                      <td>{weatherData.main.temp}°C</td>
                    </TableAnimation>
                    <TableAnimation delay={400}>
                      <td>Language: </td>
                      <td>{language}</td>
                    </TableAnimation>
                    <TableAnimation delay={500}>
                      <td>Description: </td>
                      <td>{description}</td>
                    </TableAnimation>
                  </tbody>
                </Table>
              </Col>
            </Row>
          </Container>
          
        </Main>
      </div>

    </Fragment>
  );
};

export async function getServerSideProps({ query }) {
  const { destination } = query;

  // get destination data from db.js
  function getDestinationData(name) {
    const destination = destinations.find((item) => item.name.toLowerCase() === name);
    return destination;
  }
  const destinationData = getDestinationData(destination);
  
  if (!destinationData) {
    // Handle the case when destination data is not found
    return {
      notFound: true,
    };
  }

  const { capital } = destinationData;

  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${capital}&units=metric&appid=${process.env.WEATHER_API_KEY}`
  );
  const data = await response.json();

  // Fetch Unsplash images
  const res = await fetch(`https://api.unsplash.com/search/photos?query=${destination}&orientation=portrait&client_id=${process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY}`)
  const imageData = await res.json()
  const images = imageData.results

  return { 
    props: {
      weatherData: data,
      capital,
      images
    },
  };
}



export default DestinationPage;
