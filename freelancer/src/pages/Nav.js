import Link from 'next/link';

const Nav = () => {

    return (

        <>
            <Link href = "/" >Home</Link>
            <Link href = "/About">About</Link>
            
            <button className="login__btn">
                <Link href= "/login" >Login</Link>
            </button>
        </>

    )

}

export default Nav