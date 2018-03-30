import ActionTypes from './ActionTypes';
import firebase from 'firebase';


export function authWithGoogle(credential){
    return dispatch=>{
        console.log(credential)
        alert(credential)
    }
}