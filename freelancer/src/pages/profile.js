import Image from 'next/image';
import Header from "./Header";
import Work from './work';

import {Container} from 'react-bootstrap'

const Profile = () => {

    return (
        <Container >
            <Header />
            <Container >
                
                <div class="c">
                    <h2 className="Name">Name</h2>
                    <img src="https://unsplash.it/50/50" height={40} width={40} />
                    <li>tags</li>
                    <h2>Work completed</h2>
                </div>

            <div className='work'>
                <Work head="Work1" desc="lorem ipsum sit dolor amet"/>
                <Work head="Work2" desc="lorem ipsum sit dolor amet"/>
                <Work head="Work3" desc="lorem ipsum sit dolor amet"/>
                <Work head="Work4" desc="lorem ipsum sit dolor amet"/>
                <Work head="Work5" desc="lorem ipsum sit dolor amet"/>
            </div >

            </Container>
            <Container>

            </Container>
        </Container>
    )

}

export default Profile