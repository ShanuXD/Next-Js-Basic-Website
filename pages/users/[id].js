export const  getStaticPaths = async ()=>{
    const response = await (await fetch('https://jsonplaceholder.typicode.com/users')).json()

    const paths = response.map((user)=>{
        return {
            params: {id: user.id.toString()}
        }
    })

    return {
        // paths:[{}, {}, {params:{id}}]
        paths,
        fallback:false
    }
}

export const getStaticProps = async(context)=>{
    const id = context.params.id
    const response = await (await fetch('https://jsonplaceholder.typicode.com/users/'+id)).json()
    console.log(response)
    return {
        props:{user:response}
    }

}

const UserInfo = ({user}) => {
    const {name, email, website, address} = user
    console.log(user)
    return ( 
        <div>
            <h1>{name}</h1>
            <p>{email}</p>
            <p>{website}</p>

        </div>
     );
}
 
export default UserInfo;