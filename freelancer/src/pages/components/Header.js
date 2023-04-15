import Nav from './Nav'

const Header = () => {

    return (
        <div className="head">
            <div className="head__logo">
                <img className="head__logo--img" src = "https:/unsplash.it/30/30" alt="logo" />
            </div>

            <div className="head__search">
                <input type="search" clasName="head__search--box" />
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