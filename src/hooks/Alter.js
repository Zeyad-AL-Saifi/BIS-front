import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

function CustomAlter({ error }) {
    const [show, setShow] = useState(true);


    return (
        <div className="custom-alert">
            {error}
        </div>
    );
}


export default CustomAlter;