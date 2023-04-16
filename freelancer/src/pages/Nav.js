import Link from 'next/link';

const Nav = () => {

    return (

        <>
            <Link id="link" href = "/" >Home</Link>
            <Link id="link" href = "/About">About</Link>
            <Link id="link" href="/profile">Profile</Link>

        </>

    )

}

export default Nav