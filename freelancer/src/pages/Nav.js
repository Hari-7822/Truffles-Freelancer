import Link from 'next/link';

const Nav = () => {

    return (

        <>
            <Link id="link" href = "/" >Home</Link>
            <Link id="link" href = "/About">About</Link>
            <Link id="link" href="/profile">Profile</Link>

            <button className="login__btn">
                <Link id="link" href= "/login" >Login</Link>
            </button>
        </>

    )

}

export default Nav