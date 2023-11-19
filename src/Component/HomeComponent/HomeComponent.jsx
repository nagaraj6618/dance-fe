import React from 'react'
import useFetch from '../../hooks/useFetch'
import { BASE_URL } from '../../utils/config'
import './HomeComponent.css'
const HomeComponent = () => {
   const { data: data, loading, error } = useFetch(`${BASE_URL}/dance`)
   console.log(data);
   return (


      <div className='main-container'>
            {
      loading && <h4>Loading.....</h4>
    }
    {
      error && <h4>{error}</h4>
    }
         {!loading && !error && data?.map(data => (<div key={data._id} className='dance-container'>
            <div className='container'>
               <video src={`${BASE_URL}/dance/${data.video}`} controls className='video'></video>
            </div>
            <div className='container'>
               <audio src={`${BASE_URL}/dance/${data.audio}`} controls className='audio'></audio>
            </div>
         </div>))}
      </div>
   )
}

export default HomeComponent