# uploaduicomponent

## About this UI Component

*** HI, This component is created to Upload Images, It has Both Manual Select option and Drag and Drop option. ***
*** WARNING ***
*** This only has the front-end/react/UI side of function. ***

The images that are selected or choosed can be accessed. and *** the images are already converted into base64 format. ***

## Install Command

``` npm install https://github.com/Kaavian-Systems-Pvt-Ltd/UploadUI.git ```

## peer dependencies

In case, if you have any problem with this Package dependencies, just install this

``` npm i -S react react-dom react-icons ```

## To Import or To Use

```import { UploadImageUIComponent } from '@kaavian-sys/imageuploaduicomponent';```

## How to Use

**First Create a useState**
**Then Call this (Userimages) and By using Use state the get the image that is being sent and store it in.**

```
function (any) () {

    const [images, setImages] = useState([]);

    //your Code to do whatever you what to do

    return(
        ...
         <UploadImageUIComponent Userimages={(image) => setImages(image)}/> 
        ...
    )
}

```

## Examples 

```
  import React, { useState } from 'react';

  import { UploadImageUIComponent } from '@kaavian-sys/imageuploaduicomponent';

  function App() {
    const [images, setImages] = useState([]);

    return (
        <div>
            <UploadImageUIComponent Userimages={(image) => setImages(image)}/>
            {images.map((fl2, index) => (
            <div key={index}>
                <img alt='' src={fl2}></img>
            </div>
            ))};
        </div>
        );
    }

export default App;
```

*** This Example will take the image store it and Display it Using a img Tag( <img></img> ). ***



#                                                         THANK YOU




