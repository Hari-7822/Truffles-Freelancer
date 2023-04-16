import {useState} from "react";
import { Prisma } from './script';
import Nav from './Nav';

const pr = new PrismaClient();

// import '../../styles/sass/components/img.png';

const [txt, set] = useState("");
const Header = () => {


    return (
        <div className="head">
            <div className="head__logo">
                <img className="head__logo--img" height={40} width={40} src="https://github.com/Hari-7822/Truffles-Freelancer/blob/main/freelancer/src/styles/sass/components/img.png?raw=true" />
            </div>

            <div className="head__search">
                <input type="search" placeholder="Search Something..." value={txt} onChange={e =>set(e.target.value)} onKeyDown={getStaticProps} className="head__search--box" />
            </div>

            <Nav />

        </div>
    )





}




