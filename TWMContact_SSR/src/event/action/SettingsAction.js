import { DISABLE_BALANCE_ON_ADD, DISABLE_BALANCE_ON_EDIT, ALLOW_REGISTRATION, CHANGE_RUNTIME_ENVIRONMENT } from '../Types';
  
  export const setDisableBalanceOnAddAction = () => {
    // Get settings from localStorage
    const settings = JSON.parse(localStorage.getItem('settings'));
  
    // Toggle
    settings.disableBalanceOnAdd = !settings.disableBalanceOnAdd;
  
    // Set back to localStorage
    localStorage.setItem('settings', JSON.stringify(settings));
  
    return {
      type: DISABLE_BALANCE_ON_ADD,
      payload: settings.disableBalanceOnAdd
    };
  };
  
  export const setDisableBalanceOnEditAction = () => {
    const settings = JSON.parse(localStorage.getItem('settings'));
    settings.disableBalanceOnEdit = !settings.disableBalanceOnEdit;
    localStorage.setItem('settings', JSON.stringify(settings));
  
    return {
      type: DISABLE_BALANCE_ON_EDIT,
      payload: settings.disableBalanceOnEdit
    };
  };


  
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


  export const setRunningEnvironmentAction = () => {
    const settings = JSON.parse(localStorage.getItem('settings'));
    settings.runningOnProdEnvironment = !settings.runningOnProdEnvironment;
    localStorage.setItem('settings', JSON.stringify(settings));

    return {
      type: CHANGE_RUNTIME_ENVIRONMENT,
      payload: settings.runningOnProdEnvironment
    };
  };
  