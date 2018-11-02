import React from 'react';

//This method is used to modify the localStorage Setting
const modifyLocalStorageSetting = (param, value, toggleable) => {
    const settings = JSON.parse(localStorage.getItem('settings'));

    if(toggleable){
      settings[param] = !settings[param];
    }
    else{
      settings[param] = value;
    }
    localStorage.setItem('settings', JSON.stringify(settings));
    return settings;
};



export {modifyLocalStorageSetting};