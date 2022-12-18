import React, { useState }from 'react';
import './imageupload.css';

function FilesDragAndDrop() {

  const [dragactive, setDragActive] = useState(false);


  function handleFile(files) {
    alert("Number of files: " + files.length);
  }

  const handleDrag = function (e) {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = function (e) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files);
    }
  };

return (
    <div className='FileDragAndDropOverAllDiv'>
        <div className='uploadparas'>
        <img alt='' className='uploadicon' src="https://img.icons8.com/fluency/48/null/upload-to-cloud.png"/>
        <p className='draganddroppara'>Drag and Drop Here</p>
        <p className='orpara'>or</p>
        </div>
        <div className='shownimagesheading'>
        <h3>Upload Images</h3>
        </div>
        <form className='draganddroparea' onDragEnter={handleDrag} onSubmit={(e) => e.preventDefault()}></form>
        <label className={dragactive ? "drag-active" : "" }>
        </label>
        {
        dragactive && <div onDragEnter={handleDrag} onDragLeave={handleDrag} onDragOver={handleDrag} onDrop={handleDrop}></div>
        }
    </div>
);
}

export {
  FilesDragAndDrop
}