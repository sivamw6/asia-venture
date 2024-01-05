import { Fragment } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import HeroSection from '@/components/layout/HeroSection/HeroSection'
import Main from '@/components/layout/Main/Main'

const ContactPage = () => {
  return (
    <Fragment>
      <HeroSection
        title='Contact Us'
        description="lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
      <Main>
        <Container className='mt-3 p-5'>
          <div className='w-100 mx-auto'>
            <Form>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Name</Form.Label>
                <Form.Control className="mb-3" type="text" placeholder="John Doe" />
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
              <div className="d-grid gap-2"><Button variant="light">Submit</Button></div>
            </Form>
          </div>
        </Container>
      </Main>
    </Fragment>
  )
}

export default ContactPage
