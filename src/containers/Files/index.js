import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import Folder from '../Folder';
import { getFiles } from './action';
import { ImFileExcel } from 'react-icons/im';
import { StyledSemester } from '../Semesters/styled';
import UpFile from './uploadFile';

const File = () => {
    let {id} = useParams();
    const fileSelecter = useSelector((state) => state.reducerFile.list);
    console.log("fileSelecter ", fileSelecter);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getFiles(id));
      }, []);
    return (
        <StyledSemester.Flex>
            <UpFile />
            {/* <div className="FolderFile"><Folder /></div> */}
            <StyledSemester.Body className="flexFile">
            
            <div className="divFile">
                <div>
                    <h1>Quản lý File</h1>
                    {fileSelecter?.map ((item, index ) => (
                        
                        <div className="bodyFile" key={index}>
                            <div className="iconFile"><ImFileExcel /></div>
                    <div className="nameFile">{item.fileName}</div>
                    </div>
                    ))}
                </div>
            </div>
            </StyledSemester.Body>
        </StyledSemester.Flex>
    );
};

export default File;