import React from "react";
import { Container } from 'react-bootstrap'; 
const Work = (props) => {

    return (
        <Container  className="work">
            <h3><strong>{props.head}</strong></h3>
            <p>{props.desc}</p>
        </Container>
    )

} 

export default Work;