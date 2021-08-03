import Link from "next/link"
import React, { useEffect } from 'react'
import {useRouter} from "next/router"

const ErrorNotFound = () => {

    const router = useRouter()

    useEffect(()=>{
        const timer =  setTimeout(()=>{
            // router.go(-1) left
            // router.go(1) right
            router.push("/")
        },3000)

        return ()=>{
            clearTimeout(timer)
        }

    },[])

    return ( 
        <div className="not-found">
            <h1>Oooops...</h1>
            <h2>That Page Cannot be Found!</h2>
            <p>Go Back To The
                <Link href="/"><a>Homepage</a></Link>
            </p>
        </div>
     );
}
 
export default ErrorNotFound;