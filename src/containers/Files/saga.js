import { put, takeLatest } from "@redux-saga/core/effects";
import axios from "axios";
import { useParams } from "react-router";

import qs from 'qs';

import { AcctionTypes, getFiles, getFileSuccess, putFilesSuccess } from "./action";
import GetToken from "../Login/getToken";

const GET_API_FILE_URL= `https://api.quanlydoan.live/api/File/SearchAll/FolderName/` ; // ${idHocKy}


//--------- get------------------------
export function* sagaGetFiles (FolderId) {
    console.log("FolderId.payload " + FolderId.payload);
    try{
        
        const reponse = yield axios.get(`${GET_API_FILE_URL}${FolderId.payload}`, GetToken());
        console.log("aa"+ reponse);
        console.log(reponse.statusCode);
        if (reponse) {
            
            yield put({type: AcctionTypes.GET_FILES_SUCCESS,payload: reponse})
        }
        
    }catch(error){}
}

export function* watchSagaGetFiles(){
    yield takeLatest(AcctionTypes.GET_FILES, sagaGetFiles);
}