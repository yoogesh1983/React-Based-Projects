import { DISABLE_BALANCE_ON_ADD, DISABLE_BALANCE_ON_EDIT, ALLOW_REGISTRATION } from './types';
  
  //Using dispatch
  export const setDisableBalanceOnAddAction = () => dispatch =>{
    // Get settings from localStorage
    const settings = JSON.parse(localStorage.getItem('settings'));
  
    // Toggle
    settings.disableBalanceOnAdd = !settings.disableBalanceOnAdd;
  
    // Set back to localStorage
    localStorage.setItem('settings', JSON.stringify(settings));
  
    dispatch ({
      type: DISABLE_BALANCE_ON_ADD,
      payload: settings.disableBalanceOnAdd
    });
  };
  

  //Not Using dispatch (Usin return instead)
  export const setDisableBalanceOnEditAction = () => {
    const settings = JSON.parse(localStorage.getItem('settings'));
    settings.disableBalanceOnEdit = !settings.disableBalanceOnEdit;
    localStorage.setItem('settings', JSON.stringify(settings));
  
    return {
      type: DISABLE_BALANCE_ON_EDIT,
      payload: settings.disableBalanceOnEdit
    };
  };


  
   //Not Using dispatch (Usin return instead)
  export const setAllowRegistrationAction = () => {
    const settings = JSON.parse(localStorage.getItem('settings'));
    settings.allowRegistration = !settings.allowRegistration;
    localStorage.setItem('settings', JSON.stringify(settings));

    return {
      type: ALLOW_REGISTRATION,
      //payload: settings.allowRegistration       -- Let's try another way
      ymsRegistrationValue: settings.allowRegistration
    };
  };
  