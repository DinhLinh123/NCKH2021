import { put, takeLatest } from "@redux-saga/core/effects";
import axios from "axios";
import { AcctionTypes, getTopicSuccess } from "./action";

const GET_API_TOPICS_URL= "http://localhost:8006/api/GiangVien/get-all" ; //https://603ced5df4333a0017b68a5c.mockapi.io/api/apiaxios



export function* sagaGetTopics () {
    try{
        const reponse = yield axios.get(GET_API_TOPICS_URL);
        console.log(reponse.statusCode);
        if (reponse) {
            yield put(getTopicSuccess(reponse));
        }
        
    }catch(error){}
}

export function* watchSagaGetTopics(){
    yield takeLatest(AcctionTypes.GET_TOPICS, sagaGetTopics);
}