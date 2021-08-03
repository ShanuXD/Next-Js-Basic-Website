import styles from "../../styles/Uers.module.css"
import Link from "next/link"

export const getStaticProps = async()=>{
    const response = await (await (await fetch('https://jsonplaceholder.typicode.com/users')).json())
    return {
        props:{users:response}
    }
}


const Users = (props) => {
    // console.log(props.users)
    return ( 
        <div>
            <h1>All Users</h1>
            {props.users.map((user, index)=>{
                return (
                    <Link href={"/users/"+user.id} key={user.id}>
                        <a className={styles.user}>
                            <h3>{user.name}</h3>
                        </a>
                    </Link>
                )
            })}
        </div>
     );
}
 
export default Users;