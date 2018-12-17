//contact Reducer
export const GET_CONTACTS = 'get_All_Contacts';
export const ADD_CONTACT = 'add_Contacts';
export const EDIT_CONTACT = 'edit_Contacts';
export const DELETE_CONTACT = 'delete_Contacts';
export const GET_CONTACT = 'get_Single_Contact';


//Setting Reducer
export const DISABLE_BALANCE_ON_ADD = 'DISABLE_BALANCE_ON_ADD';
export const DISABLE_BALANCE_ON_EDIT = 'DISABLE_BALANCE_ON_EDIT';
export const ALLOW_REGISTRATION = 'ALLOW_REGISTRATION';
export const CHANGE_RUNTIME_ENVIRONMENT = 'CHANGE_RUNTIME_ENVIRONMENT';


//Auth Reducer (Using Latest Approach)
export type AUTH_EVENT = | AUTH_USER | AUTH_ERROR;

export type AUTH_USER = {
    type: 'auth_user',
    payload: string,
    isAuthenticated: boolean,
}
export type AUTH_ERROR = {
    type: 'auth_error',
    payload: string,
}