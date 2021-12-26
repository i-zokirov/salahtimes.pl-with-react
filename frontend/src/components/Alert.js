import React from 'react'
import { Alert } from 'react-bootstrap'


const Alerter = ({variant, children}) => {
        return (
            <Alert variant={variant}>
                {children}
            </Alert>
        )
  
}


Alerter.defaultProps = {
    variant: 'danger'
}

export default Alerter