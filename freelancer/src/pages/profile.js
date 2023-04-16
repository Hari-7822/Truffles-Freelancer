import Image from 'next/image';
import Header from "./Header";
import Work from './work';

import {Container} from 'react-bootstrap'

const Profile = () => {

    return (
        <Container>
            <Header />
            <Container >
                
                <h2 className="Name">Name</h2>
                <Image src="" height={40} width={40} />
                <li>tags</li>
            
                <h2>Work completed</h2>

            <Container fluid className='work'>
                <Work head="Work1" desc="lorem ipsum sit dolor amet"/>
                <Work head="Work2" desc="lorem ipsum sit dolor amet"/>
                <Work head="Work3" desc="lorem ipsum sit dolor amet"/>
                <Work head="Work4" desc="lorem ipsum sit dolor amet"/>
                <Work head="Work5" desc="lorem ipsum sit dolor amet"/>
            </Container >

            </Container>
            <Container>

            </Container>
        </Container>
    )

}

export default Profile