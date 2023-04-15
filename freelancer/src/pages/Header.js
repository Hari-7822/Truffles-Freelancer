import Nav from './Nav'
// import '../../styles/sass/components/img.png';

const Header = () => {

    return (
        <div className="head">
            <div className="head__logo">
                <img className="head__logo--img" src='../../styles/sass/components/img.png' alt="logo" />
            </div>

            <div className="head__search">
                <input type="search" className="head__search--box" />
            </div>

            <Nav />

        </div>
    )

}



export default function disp() {

    return(
        <Header />
    )

}