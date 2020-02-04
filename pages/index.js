import React from 'react'
import { Container, Row, Col, Button, Jumbotron, ListGroup, ListGroupItem } from 'reactstrap'
import Layout from '../containers/layout'

const App = ( props ) => {
  return (
    <Layout {...props} navmenu={false} container={false}>
      <Jumbotron className="text-light rounded-0 background-primary">
        <Container className="mb-2">
          <Row>
          <Col xs="12" sm="8">
            <h4 className="display-2 mb-3 brand-primary" style={{fontWeight: 300}}>
              <span style={{fontWeight: 600}}>
                Cupcake makes changing content fun and easy.
              </span>
            </h4>
            <p className="lead mb-5">
              Cupcake's simple interface empowers your content team and lets you iterate faster.
            </p>
            <a className="nostyle" href="/signup">
              <Button color="primary" size="lg">
                Start Now - It's Free!
              </Button>
            </a>
          </Col>
          <Col xs="12" sm="4" className="mt-3">
            <img src='/static/assets/images/skeleton.png'/>
          </Col>
          </Row>
          <style jsx>{`
            img {
              max-width:100%;
              max-height:100%;
            }
            .display-2  {
              font-size: 3em;
              color: #0c1a52;
              font-weight: 700;
            }
            .lead {
              font-size: 2em;
              font-weight: 600;
              color: #0c1a52;
            }
            @media (max-width: 767px) {
              .display-2 {
                font-size: 1.8em;
                margin-bottom: 1em;
              }
              .lead {
                font-size: 1.2em;
              }
            }
          `}</style>
        </Container>
      </Jumbotron>
      <section className="background-secondary py-2 brand-info">
        <Container className="text-left">
          <h2 className="text-center display-4 mt-4 mb-2 brand-primary">Seamless Integration</h2>
          <h5 className="text-center mb-5">Cupcake is a headless CMS with a twist.</h5>
          <br/>
          <Row className="mb-5">
            <Col xs="12" sm="6" className="d-flex align-content-center flex-wrap">
              <h4 className="brand-primary">Instant Drop-in</h4>
              <p>
                Seamlessly integrate your content and go live in minutes.
                Minimal setup required - just drop in a script tag and get started.
              </p>
            </Col>
            <Col xs="12" sm="6" className="text-center">
              <img src="/static/assets/images/rocket.svg" />
            </Col>
          </Row>
          <Row className="mb-5 row-reverse" style={{flexDirection:"row-reverse"}}>
            <Col xs="12" sm="6" className="d-flex align-content-center flex-wrap">
              <h4 className="brand-primary">AB Test Enabler</h4>
              <p>
                Your content team can make tests without a single code change.
                Developers get to develop, content makers can keep creating. Double win!
              </p>
            </Col>
            <Col xs="12" sm="6" className="text-center flex-left">
              <img className="mini-img" src="/static/assets/images/a.svg" />
              <img className="mini-img" src="/static/assets/images/b.svg" />
            </Col>
          </Row>
          <Row className="mb-5">
            <Col xs="12" sm="6" className="d-flex align-content-center flex-wrap">
              <h4 className="brand-primary">Heavy Lifting API</h4>
              <p>
                Cupcake can also be used like any other headless CMS.
                Write up some content, set up the api call, and start shipping faster.
              </p>
            </Col>
            <Col xs="12" sm="6" className="text-center">
              <img src="/static/assets/images/weightlifter.svg" />
            </Col>
          </Row>
          <style jsx>{`
            img {
              max-width: 200px;
              text-align: center;
            }
            .mini-img {
              max-width: 150px;
            }
            .row-reverse {
              display: flex;
              flex-direction: row-reverse !important; }
            .column-reverse { display: flex; flex-direction: column-reverse; }
          `}</style>
        </Container>
      </section>
      <section className="background-secondary py-2 brand-info">
        <Container className="text-center">
          <h2 className="text-center display-4 mt-5 mb-2 brand-primary">Headless Simplicity</h2>
          <br/>
          <h5 className="text-center mb-5">Content isn't code. They don't have to deploy together.</h5>
          <Row>
            <Col xs="12" sm="4">
              <h4 className="brand-primary">Draft your copy changes</h4>
              <span>Write in plain text or Markdown.</span>
              <img className="mt-5 mb-5" src="/static/assets/images/pen.svg" />
            </Col>
            <Col xs="12" sm="4">
              <h4 className="brand-primary">and</h4>
            </Col>
            <Col xs="12" sm="4">
              <h4 className="brand-primary">Drop in our script tag</h4>
              <span>We'll inject your content with minimal setup.</span>
              <img className="mt-5 mb-5" src="/static/assets/images/dropin.svg" />
            </Col>
          </Row>
          <style jsx>{`
            img {
              max-width: 200px;
            }
            ul {
              list-style-type: none;
              padding: 0% 10%;
              text-align: center;
            }

            li {
              list-style-type: none;
              text-align:left;
            }

            .how-to-list {
              max-width: 720px;
              margin: 0 auto;
            }
            .numbered-list-container {
              margin: 40px 20px;
              display: flex;
              flex-direction: row;
              align-items: flex-start;
              align-content: flex-start;
              justify-content: flex-start;
            }
            .numbered-list-bullet {
              margin-right: 10px;
              background-color: rgba(32,124,229,1);
              color: #fff;
              border: solid 1px rgba(32,124,229,1);
              border-radius: 50%;
              font-size: 36px;
              padding: 0px 18px;
            }
            .display-2  {
              text-shadow: 0 5px 10px rgba(0,0,0,0.3);
              color: rgba(255,255,255,0.9);
            }
            .lead {
              font-size: 3em;
              opacity: 0.7;
            }
            @media (max-width: 767px) {
              ul {
                list-style-type: none;
                padding: 0px;
              }
              .numbered-list-container {
                margin: 20px auto;
              }
              .display-2 {
                font-size: 2.5em;
                margin-bottom: 1em;
              }
              .lead {
                font-size: 1.5em;
              }
              .numbered-list-bullet {
                margin-right: 10px;
                background-color: rgba(32,124,229,1);
                color: #fff;
                border: solid 1px rgba(32,124,229,1);
                border-radius: 50%;
                font-size: 24px;
                padding: 0px 12px;
              }
            }
          `}</style>
        </Container>
      </section>
      <Container>
        <h2 className="text-center display-4 mt-5 mb-2 brand-primary">Pricing</h2>
        <Row className="pb-5">
          <Col xs="12" sm="4" className="pt-5">
            <div className="card">
              <div className="card-header">
                <h3 className="text-center">Free</h3>
              </div>
              <div className="card-body">
                <ListGroup>
                  <ListGroupItem> Up to 10 Active Snippets </ListGroupItem>
                  <ListGroupItem> 1 Active Fragment </ListGroupItem>
                  <ListGroupItem> Basic A/B Test Suite </ListGroupItem>
                  <ListGroupItem> One User </ListGroupItem>
                </ListGroup>
                <br/>
                <h3 className="text-center"> 0$/user per month </h3>
                <h5 className="text-center">Perfect for personal use.</h5>
              </div>
            </div>
          </Col>
          <Col xs="12" sm="4" className="pt-5">
            <div className="card">
              <div className="card-header">
                <h3 className="text-center">Standard</h3>
              </div>
              <div className="card-body">
                <ListGroup>
                  <ListGroupItem> Unlimited Snippets </ListGroupItem>
                  <ListGroupItem> Up to 5 Active Fragments </ListGroupItem>
                  <ListGroupItem> A/B Test Suite </ListGroupItem>
                  <ListGroupItem> Up to 4 Users</ListGroupItem>
                </ListGroup>
                <br/>
                <h3 className="text-center"> $5/user per month </h3>
                <h5 className="text-center">For small teams.</h5>
              </div>
            </div>
          </Col>
          <Col xs="12" sm="4" className="pt-5">
            <div className="card">
              <div className="card-header">
                <h3 className="text-center">Professional</h3>
              </div>
              <div className="card-body">
              <ListGroup>
                <ListGroupItem> Unlimited Snippets & Fragments </ListGroupItem>
                <ListGroupItem> GTM Integration </ListGroupItem>
                <ListGroupItem> Multivariate Test Suite </ListGroupItem>
                <ListGroupItem> Unlimited Users</ListGroupItem>
              </ListGroup>
                <br/>
                <h3 className="text-center strike-through"> $20/user per month </h3>
                <h5 className="text-center"> Coming Soon! </h5>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="pb-5">
          <Col xs="12" sm="12" className="pt-5 text-center">
            <a className="nostyle" href="/signup">
              <Button color="primary" size="lg">
                Start Now!
              </Button>
            </a>
          </Col>
        </Row>
        <style jsx>{`

          .strike-through {
              text-decoration: line-through;
          }

          @media (max-width: 767px) {

          }
        `}</style>
      </Container>

    </Layout>
  )
}

export default App;

