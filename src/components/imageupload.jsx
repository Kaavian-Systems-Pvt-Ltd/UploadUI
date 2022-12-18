import React, { useEffect, useState } from 'react';
import { FilesDragAndDrop } from './FileDragAndDrop.jsx';
import './imageupload.css';

export function UploadImageUIComponent({upload}) {
    const [popup, setPopup] = useState(false)
    const [imageURLs, setImageURLS] = useState([]);
    const [images, setImage] = useState([]);

    useEffect(() => {
        if (images.length < 1) return;
        const newImageURLs = [];
        images.forEach(image => newImageURLs.push(URL.createObjectURL(image)));
        setImageURLS(newImageURLs);
    }, [images])

    function onImageChange(e) {
      setImage([...e.target.files]);
    }

    const handlepopup = () => {
        setPopup(!popup);
    }

    const handlepopupclose = () => {
        setPopup(false);
    }

    const removeImage = (e) => {
        const s = imageURLs.filter((item, index) => index !== e);
        setImageURLS(s);
    };


    return (
        <div className='overlay'>
            <button className='popupuploadbutton' onClick={handlepopup}>Upload</button>
            <div className='uploadcomponentoverall'>
                <div >
                    {popup ?
                        <div className='main'>
                            <div className='popup-main'>
                                <div className='uploadheader'>
                                    <h2>UPLOAD IMAGES</h2>
                                    <h3>Upload Images you want to share</h3>
                                    <h3>with your item.</h3>
                                </div>
                                <div className='dropboxh3'>
                                </div>
                                <div className='dashedborder'>
                                    <input class="custom-file-input" type="file" multiple accept='image/*' onChange={onImageChange} ></input>
                                </div>
                                <FilesDragAndDrop />
                                <div className='allshownimages' id='container'>
                                    {imageURLs.map((imageSrc, index) => {
                                        return (
                                            <div key={imageSrc}>
                                                <img className='shownimage' id='shownimageid' alt='' src={imageSrc} />
                                                <button type='button' id='removebtnid' className='imageremovebtn' onClick={() => removeImage(index)}>x</button>
                                            </div>
                                        );
                                    })}
                                </div>
                                <div className='cancelanduploadbtn'>
                                    <button className='popupclosebtn' onClick={handlepopupclose}>Cancel</button>
                                    <button className='uploadbutton' type='button' onClick={()=> upload(images)}>Upload</button>
                                </div>
                            </div>
                        </div> : ""}
                </div>
            </div>
        </div>

    )
}