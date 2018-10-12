import { DISABLE_BALANCE_ON_ADD, DISABLE_BALANCE_ON_EDIT, ALLOW_REGISTRATION, CHANGE_RUNTIME_ENVIRONMENT } from '../Types';
  
  const initialState = {};

  export default function(state = initialState, action) {

    switch (action.type) {
      
      case DISABLE_BALANCE_ON_ADD:
        return {
          ...state,
          disableBalanceOnAdd: action.payload
        };


      case DISABLE_BALANCE_ON_EDIT:
        return {
          ...state,
          disableBalanceOnEdit: action.payload
        };


      case ALLOW_REGISTRATION:
        return {
          ...state,
          allowRegistration: action.ymsRegistrationValue
        };


      case CHANGE_RUNTIME_ENVIRONMENT:
        return {
          ...state,
          runningOnTestEnvironment: action.payload
        };


      default:
        return state;

    }
  }
  