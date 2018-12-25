import { DISABLE_BALANCE_ON_ADD, DISABLE_BALANCE_ON_EDIT, ALLOW_REGISTRATION, CHANGE_RUNTIME_ENVIRONMENT } from '../Types';
import {modifyLocalStorageSetting} from '../../components/template/Function_Common';
  

  export const setDisableBalanceOnAddAction = () => {
    const settings = modifyLocalStorageSetting('disableBalanceOnAdd', null, true);
    return {
      type: DISABLE_BALANCE_ON_ADD,
      payload: settings.disableBalanceOnAdd
    };
  };
  


  export const setDisableBalanceOnEditAction = () => {
    const settings = modifyLocalStorageSetting('disableBalanceOnEdit', null, true);
    return {
      type: DISABLE_BALANCE_ON_EDIT,
      payload: settings.disableBalanceOnEdit
    };
  };


  
  export const setAllowRegistrationAction = () => {
    const settings = modifyLocalStorageSetting('allowRegistration', null, true);
    return {
      type: ALLOW_REGISTRATION,
      //payload: settings.allowRegistration       -- Let's try another way
      ymsRegistrationValue: settings.allowRegistration
    };
  };



  export const setRunningEnvironmentAction = () => {
    const settings = modifyLocalStorageSetting('runningOnTestEnvironment', null, true);
    return {
      type: CHANGE_RUNTIME_ENVIRONMENT,
      payload: settings.runningOnTestEnvironment
    };
  };
  
