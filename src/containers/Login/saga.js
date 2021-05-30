import { put, takeLatest } from "@redux-saga/core/effects";
import axios from "axios";
import { AcctionTypes, addLogin,} from "./action";

const POST_API_LOGIN_URL= "http://auth.quanlydoan.live/connect/token";
//------------POST------------------------------
export function* sagaAddLogins(action) {
    console.log(action.payload,'saga');
    
   try {
       const reponse = yield axios.post(POST_API_LOGIN_URL, action.payload);

       //  yield reponse && put(addLoginSuccess(action.payload));
       if(reponse) yield addLogin();
   } catch (error) {

       console.log({error});
   }
 }
 
export function* watchSagaAddLogins() {
   yield takeLatest(AcctionTypes.ADD_LOGINS, sagaAddLogins);
 }
