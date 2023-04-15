import Nav from './Nav'
// import '../../styles/sass/components/img.png';

const Header = () => {

    return (
        <div className="head">
            <div className="head__logo">
                <div className="head__logo--img"></div>
            </div>

            <div className="head__search">
                <input type="search" placeholder="Search Something..." className="head__search--box" />
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