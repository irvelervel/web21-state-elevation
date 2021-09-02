import React from 'react'
import { ListGroup } from 'react-bootstrap'

class MyTable extends React.Component {
    render() {
        return (
            <>
                <ListGroup defaultActiveKey="#link1">
                    <ListGroup.Item className="pointer" onClick={(e) => this.props.setSelected(e.target.innerText)}>
                        Browny
                    </ListGroup.Item>
                    <ListGroup.Item className="pointer" onClick={(e) => this.props.setSelected(e.target.innerText)}>
                        Whitey
                    </ListGroup.Item>
                    <ListGroup.Item className="pointer" onClick={(e) => this.props.setSelected(e.target.innerText)}>
                        Blacky
                    </ListGroup.Item>
                    <ListGroup.Item className="pointer" onClick={(e) => this.props.setSelected(e.target.innerText)}>
                        Wolf
                    </ListGroup.Item>
                </ListGroup>
                <p className="mt-3">Local state is {this.props.selected || 'null'}</p>
            </>
        )
    }
}

export default MyTable