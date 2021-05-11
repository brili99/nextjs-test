import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar } from '../components/Navbar';
import {
  Container, Row, Col, Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

const Home = (props) => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar />
      <Container>
        <Row>
          <Col sm='6'>
            <Card className="m-2">
              <CardBody>
                <CardTitle tag="h5">Card 1</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                <Button>Button</Button>
              </CardBody>
            </Card>
          </Col>
          <Col sm='6'>
            <Card className="m-2">
              <CardBody>
                <CardTitle tag="h5">Card 2</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                <Button>Button</Button>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>

    </div>
  );
};

export default Home;