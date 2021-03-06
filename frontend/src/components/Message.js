import React, {useState} from 'react'
import { Alert } from 'react-bootstrap'


const Message = ({variant, children}) => {
    
    const [show, setShow] = useState(true);
    if(show){
        return (
            <Alert variant={variant} onClose={() => setShow(false)} dismissible>
                {children}
            </Alert>
        )
    } else {
        return ''
    }
}


Message.defaultProps = {
    variant: 'danger'
}

export default Message