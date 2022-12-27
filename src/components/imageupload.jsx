import React, { useEffect, useState } from 'react';
import { FilesDragAndDrop } from './FileDragAndDrop.jsx';
import './imageupload.css';

export function UploadImageUIComponent({Userimages}) {
    const [popup, setPopup] = useState(false)
    const [imageURLs, setImageURLS] = useState([]);
    const [images, setImage] = useState([]);
    const [imageurl, setImageurl] = useState([]);

    useEffect(() => {
        if (images.length < 0) return;
        const newImageURLs = [];
        images.forEach(image => newImageURLs.push(URL.createObjectURL(image)));
        setImageURLS(newImageURLs);
        if(images) {
            upload(images);
        };
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

    const array = [];
    const upload = (images) => {
        console.log(images);
        images.map((file) => {
        const fileReader = new FileReader();
            fileReader.readAsDataURL(file);
            fileReader.onload = (e) => {
              const { result } = e.target;
                array.push(result);
                console.log(result);

            };
            return 0;
    });
    setImageurl(array);
    console.log(array);
}

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
                                    <button className='uploadbutton' id='notactive' type='button' onClick={()=>Userimages(imageurl)}>Upload</button>
                                </div>
                            </div>
                        </div> : ""}
                </div>
            </div>
        </div>
    )
}