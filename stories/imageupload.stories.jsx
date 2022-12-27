import React from 'react';
import { UploadImageUIComponent }  from '../dist/bundle.js';

export default{
    title: 'Example/uploadimage',
    component: UploadImageUIComponent,
};

const Template = (args) => <UploadImageUIComponent {...args} />;

export const handlepopup = Template.bind({});

handlepopup.args = {
    setPopup: false,
    label: 'button',
};