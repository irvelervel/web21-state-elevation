import { Alert } from 'react-bootstrap'
import React from 'react'

const MyAlert = (props) => (
    <Alert variant="success" >
        {props.selected || 'No Character Selected'}
    </Alert>
)

export default MyAlert