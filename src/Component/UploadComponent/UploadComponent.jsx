import React, { useState } from 'react'
import { BASE_URL } from '../../utils/config'
import './UploadComponent.css'
const UploadComponent = () => {

   const [audioFile, setAudioFile] = useState(null)
   const [videoFile, setVideoFile] = useState(null)
   const [formDatas, setFormDatas] = useState({
      type: 'others',
      audio: '',
      video: '',
   });

   const handleAudioFileChange = (event) => {
      setAudioFile(event.target.files[0])

   }
   const handleVideoFileChange = (event) => {
      setVideoFile(event.target.files[0])
   }
   const handleChange = (event) => {
      const { name, value, } = event.target;
      setFormDatas((prevData) => ({
         ...prevData,
         [name]: value,
      }));
   }

   const formhandler = async (e) => {
      e.preventDefault()
      if (!audioFile || !videoFile) {
         alert('Select a file, and then upload')
      }
      else {
         formDatas.audio = '/assets/' + audioFile.name
         formDatas.video = '/assets/' + videoFile.name
         console.log(formDatas.type, audioFile.name, videoFile.name)



         const audioData = new FormData()
         audioData.append('file', audioFile)
         const videoData = new FormData()
         videoData.append('file', videoFile)

         try {
            const response = await fetch(`${BASE_URL}/dance/upload/audio`, {
               method: 'POST',

               body: audioData,
            })
            const responses = await fetch(`${BASE_URL}/dance/upload/video`, {
               method: 'POST',
               body: videoData,
            })

            const responseData = await fetch(`${BASE_URL}/dance/upload`, {
               method: 'POST',
               headers: {
                  'Content-Type': 'application/json',

               },

               body: JSON.stringify(formDatas)
            })
            if (responseData.status === 200 || response.status === 200 || responses.status === 200) {
               alert(`File upload was successfull`)
            }
            else {
               alert(`File upload was not successfull`)
            }
         }
         catch (error) {
            console.log('Error while uploading the file', error)
         }
      }
   }
   return (
      <div className='upload-container'>
         <div>
            <form onSubmit={formhandler}>
               <div>
                  <label>Audio File </label>
                  <input type='file'
                     onChange={handleAudioFileChange}
                  />
               </div>
               <div>
                  <label>Video File </label>
                  <input type='file'
                     onChange={handleVideoFileChange}
                  />
               </div>
               <div>
                  <label>Type </label>
                  <select value={formDatas.type}
                     onChange={handleChange}
                     name='type'
                  >
                     <option>others</option>
                     <option>Hip Hop</option>
                     <option>Classical</option>
                     <option>Folk</option>
                  </select>
               </div>
               <div>
                  <button type='submit' className='btn btn-submit'>Submit</button>
               </div>
            </form>
         </div>
      </div>
   )
}

export default UploadComponent