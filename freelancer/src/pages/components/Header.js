import Nav from './Nav'
import style from '../../styles/sass/Header.scss';

const Header = () => {

    return (
        <div className={style.head}>
            <div className={style.head__logo}>
                <img className={style.head__logo__img} src = "http:/unsplash.it/30/30" alt="logo" />
            </div>

            <div className={style.head__search}>
                <input type="search" clasName={style.head__search__box} />
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