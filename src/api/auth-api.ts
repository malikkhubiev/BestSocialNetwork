import { FormDataType } from './../types/types';
import authData from "../DATA/authDATA";

export const authAPI = {
    logIn(loginData:FormDataType, callBack:Function) {
        let counter = 0;
        authData.map(obj => {
            if (obj.email === loginData.email && obj.password === loginData.password) {
                callBack(true, obj.name);
            } else {
                counter++;
            }
        });
        if (counter === authData.length) {
            callBack('Wrong Email or Password');
        }
    }
}