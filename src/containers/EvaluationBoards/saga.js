import { put, takeLatest } from "@redux-saga/core/effects";
import axios from "axios";
import { AcctionTypes, getEvaluationBoardSuccess} from "./action";

const GET_API_EVELUATIONBOARDS_URL= "https://603ced5df4333a0017b68a5c.mockapi.io/api/HoiDongTotNghieps" ; //https://603ced5df4333a0017b68a5c.mockapi.io/api/apiaxios



export function* sagaGetEvaluationBoards () {
    try{
        const reponse = yield axios.get(GET_API_EVELUATIONBOARDS_URL);
        console.log(reponse.statusCode);
        if (reponse) {
            yield put(getEvaluationBoardSuccess(reponse));
        }
        
    }catch(error){}
}

export function* watchSagaGetEvaluationBoards(){
    yield takeLatest(AcctionTypes.GET_EVALUATIONBOARDS, sagaGetEvaluationBoards);
}