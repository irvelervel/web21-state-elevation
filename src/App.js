import './App.css'
import MyTable from './components/MyTable'
import { Col, Container, Row } from 'react-bootstrap'
import MyAlert from './components/MyAlert'
import { Component } from 'react'

class App extends Component {
  // we need to store the selected piggy in the PARENT COMPONENT

  state = {
    selected: null,
  }

  setSelected = (piggy) => this.setState({ selected: piggy })

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Container>
            <Row>
              <Col>
                <MyTable selected={this.state.selected} setSelected={this.setSelected} />
              </Col>
              <Col className="my-auto">
                <MyAlert selected={this.state.selected} />
              </Col>
            </Row>
          </Container>
        </header>
      </div>
    )
  }
}

export default App
