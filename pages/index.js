import React from 'react'
import { Container, Row, Col, Button, Jumbotron, ListGroup, ListGroupItem } from 'reactstrap'
import Layout from '../containers/layout'
import { DragDropContext, resetServerContext } from 'react-beautiful-dnd'
import Submissions from '../containers/submissions'


const App = ( props ) => {
  resetServerContext();
  return (
    <Layout {...props} navmenu={false} container={false}>
      <Container>
        <h2 className="text-center display-4 mt-5 mb-2 brand-primary">Submissions</h2>
        <Row className="pb-5">
          <Col xs="7" sm="4" className="placeholder">
            <h1>Submission Bucket goes here</h1>
            <DragDropContext>
              <Submissions />        
            </DragDropContext>
          </Col>
          <Col xs="5" sm="4" className="placeholder">
            <h1>Ranked Order goes here</h1>
          </Col>

          </Row>
        <style jsx>{
          `
            .placeholder {
              background-color: #333;
              height: 600px;
            }

            .placeholder tall {
              height: 800px;
            }
          `
        }</style>
      </Container>
    </Layout>
  )
}

export default App;

