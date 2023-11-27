import React, { useContext, useState } from 'react'
import useFetch from '../../hooks/useFetch'
import { BASE_URL } from '../../utils/config'
import './HomeComponent.css'
import { AuthContext } from '../../context/AuthContext'
const PlayListComponent = () => {
   const { data: getdata, loading, error } = useFetch(`${BASE_URL}/dance`)
   const { user } = useContext(AuthContext)
   const [chooseType, setChooseType] = useState('both')
   const handleChange = (e) => {
      setChooseType(e.target.value)
   }
   return (


      <div className='main-container'>

<select value={chooseType}
            onChange={handleChange}
            name='type'
            className='choose-menu'
         >
            <option value={'audio'}>Only Audio</option>
            <option value={'video'}>Only Video</option>
            <option value={'both'}>Both</option>

         </select>
         {
            loading && <h4>Loading.....</h4>
         }
         {
            error && <h4>{error}</h4>
         }
         {!loading && !error && user ? chooseType === 'both' ? getdata.map(data => (<div key={data._id} className='dance-container'>
            <div className='container'><h3>Title : {data.title}</h3></div>
            <div className='container'>
               <video src={`${BASE_URL}/dance/${data.video}`} controls className='video'></video>
            </div>
            <div className='container'>
               <audio src={`${BASE_URL}/dance/${data.audio}`} controls className='audio'></audio>
            </div>
         </div>))
            : chooseType === 'video' ?
         
               getdata.map(data => (<div key={data._id} className='dance-container'>
                 <div className='container'><h3>Title : {data.title}</h3></div>
                  <div className='container'>
                     <video src={`${BASE_URL}/dance/${data.video}`} controls className='video'></video>
                  </div>
               </div>))
               : getdata.map(data => (<div key={data._id} className='dance-container'>
                  <div className='container'><h3>Title : {data.title}</h3></div>
               <div className='container'>
                     <audio src={`${BASE_URL}/dance/${data.audio}`} controls className='audios'></audio>
                  </div>
               </div>)): <p className='p-sign'>Please Sign in...</p>}
               
      </div>
   )

}

export default PlayListComponent