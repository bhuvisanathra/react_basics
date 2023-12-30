import React from 'react'
import { useLoaderData } from 'react-router-dom';

function Github() {
    const data=useLoaderData();

    // useEffect(()=>{
    //     fetch('https://api.github.com/users/bhuvisanathra')
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data)
    //         setData(data);
    //     })
    // }
    //     ,[])

  return (
    <div className='text-center m-4  bg-orange-500 text-white p-4 text-3xl flex justify-center space-x-8'>
            Github Follower: {data?.followers}
        <br/>
            <img src={data?.avatar_url} alt="" srcset="" width={300}/>
    </div>
  )
}

export default Github

export const githubInfoLoader = async () =>{
    const response = await fetch ("https://api.github.com/users/bhuvisanathra")
    return response.json();
}