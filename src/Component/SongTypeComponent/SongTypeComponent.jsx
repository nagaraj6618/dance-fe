import React, { useState,useContext, useEffect } from 'react'
import useFetch from '../../hooks/useFetch'
import { BASE_URL } from '../../utils/config'
import { AuthContext } from '../../context/AuthContext'
const SongTypeComponent = () => {
   const { data: getdata, loading, error } = useFetch(`${BASE_URL}/dance`)
   const { user } = useContext(AuthContext)
   const [songType,setSongType] = useState('Classical')
   const [data,setData] = useState([])
   useEffect(()=>{
      console.log(getdata)
      const classicalItems = getdata.filter(item => item.type === songType);
      console.log(classicalItems);
      setData(classicalItems)
   },[songType])
   const handleChange = (e) => {
      setSongType(e.target.value)
   }
   return (
      <div className='main-container'>
         choose Type
         <select value={songType}
            onChange={handleChange}
            name='type'
            className='choose-menu'
         >
            <option>others</option>
            <option>Hip Hop</option>
            <option>Classical</option>
            <option>Folk</option>
         </select>
         {
            loading && <h4>Loading.....</h4>
         }
         {
            error && <h4>{error}</h4>
         }
         {!loading && !error && user ? data?.map(data => (<div key={data._id} className='dance-container'>
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

export default SongTypeComponent