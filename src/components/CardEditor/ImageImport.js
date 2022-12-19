import axios from 'axios'
import styled from 'styled-components'
import { useStage } from '../../context/StageContext'
import 'bulma/css/bulma.css'
import { BiUpload } from 'react-icons/bi'

const ImageImport = ({ uploadedImages, setUploadedImages }) => {
  const { addImage } = useStage()

  const uploadImage = async (e) => {
    console.log(e.target.files)
    const upload = new FormData()
    upload.append('upload_preset', 'v67ga6fi')
    upload.append('file', e.target.files[0])
    const { data } = await axios.post(
      'https://api.cloudinary.com/v1_1/dzappyypg/upload',
      upload
    )

    console.log(data)
    setUploadedImages([
      ...uploadedImages,
      { secureUrl: data.secure_url, url: data.url, id: data.asset_id },
    ])
  }
  return (
    <Wrapper>

<div className="file">
  <label className="file-label">
  <input
        type='file'
        name='file'
        id='file'
        className='file-input'
        onChange={uploadImage}
      />
    <span class="file-cta">
      <span class="file-icon">
        <BiUpload />
      </span>
      <label htmlFor='file' className='file-label'>Selecciona un archivo</label>
    </span>
  </label>
</div>



      {/* <input
        type='file'
        name='file'
        id='file'
        className='file-input'
        onChange={uploadImage}
      /> */}
      {/* <label htmlFor='file'>Selecciona un archivo</label> */}
      <hr />
      <h6>Subidos recientemente</h6>
      <div className='gallery'>
        {uploadedImages.map((image) => {
          const { url, id } = image
          return (
            <img
              key={id}
              className='gallery-img'
              src={url}
              alt={id}
              onClick={() =>
                addImage({
                  src: url,
                  x: 150,
                  y: 150,
                  width: 100,
                  height: 100,
                  lineCap: 'butt',
                })
              }
            />
          )
        })}
      </div>
    </Wrapper>
  )
}

export default ImageImport

const Wrapper = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;

  .gallery {
    display: flex;
  }

  .gallery-img {
    width: 50px;
    height: 50px;
    cursor: pointer;
  }

  .inputfile {
    width: 0.1px;
    height: 0.1px;
    opacity: 0;
    overflow: hidden;
    position: absolute;
    z-index: -1;
  }

  .inputfile + label {
    font-weight: 400;
    color: white;
    background-color: black;
    padding: 0.5rem;
    border-radius: 1rem;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  }

  .inputfile + label {
    cursor: pointer; /* "hand" cursor */
  }
`
