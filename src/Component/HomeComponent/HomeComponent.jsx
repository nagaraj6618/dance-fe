import React, { useContext } from 'react'
import useFetch from '../../hooks/useFetch'
import { BASE_URL } from '../../utils/config'
import './HomeComponent.css'
import { AuthContext } from '../../context/AuthContext'
const HomeComponent = () => {
   const { data: getdata, loading, error } = useFetch(`${BASE_URL}/dance`)
   const { user } = useContext(AuthContext)
   return (


      <div className='main-container'>
         {
            loading && <h4>Loading.....</h4>
         }
         {
            error && <h4>{error}</h4>
         }
         {!loading && !error && user ? getdata?.map(data => (<div key={data._id} className='dance-container'>
            <div className='container'>
               <video src={`${BASE_URL}/dance/${data.video}`} controls className='video'></video>
            </div>
            <div className='container'>
               <audio src={`${BASE_URL}/dance/${data.audio}`} controls className='audio'></audio>
            </div>
         </div>)) : <p className='p-sign'>Please Sign in...</p>}
      </div>
   )

}

export default HomeComponent