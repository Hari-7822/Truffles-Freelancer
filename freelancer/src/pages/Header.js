import Nav from './Nav';

const Header = () => {


    return (
        <div className="head">
            <div className="head__logo">
                <img className="head__logo--img" height={40} width={40} src="https://github.com/Hari-7822/Truffles-Freelancer/blob/main/freelancer/src/pages/img.png?raw=true" />
            </div>

            <div className="head__search">
                <input type="search" placeholder="Search Something..."  className="head__search--box" />
            </div>

            <Nav />

        </div>
    )


    }

    export default Header;




