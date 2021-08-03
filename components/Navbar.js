import Link from "next/link"
import Image from "next/image"

const Navbar = () => {
    return ( 
        <nav>
            <div className="logo">
                {/* <Image src="/favicon.ico" alt="logo" width={50} height={50}/>*/}
                <Link href="/" passHref={true}><h2>Navbar</h2></Link>
            </div>
            <Link href="/"><a>Home</a></Link>
            <Link href="/about"><a>About</a></Link>
            <Link href="/users"><a>Users</a></Link>
        </nav>
     );
}
 
export default Navbar;