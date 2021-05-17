import { put, takeLatest } from "@redux-saga/core/effects";
import axios from "axios";
import { AcctionTypes, getTopicSuccess } from "./action";

const GET_API_TOPICS_URL= `https://quanlydoan.live/api/DeTai/GetAllByHocKy/` ; //https://603ced5df4333a0017b68a5c.mockapi.io/api/apiaxios



export function* sagaGetTopics (idHocKy) {
    console.log("sagaTopic" + idHocKy);
    try{
        const reponse = yield axios.get(`${GET_API_TOPICS_URL}${idHocKy.payload}`);
        console.log(reponse.statusCode);
        if (reponse) {
            yield put(getTopicSuccess(reponse));
        }
        
    }catch(error){}
}

export function* watchSagaGetTopics(){
    yield takeLatest(AcctionTypes.GET_TOPICS, sagaGetTopics);
}

//===================================
