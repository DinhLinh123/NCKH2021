import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import HeaderMonHoc from '../../layout/HeaderMonHoc';
import { StyledSemester } from '../Semesters/styled';
import { getFolders } from './action';
import { FcFolder } from 'react-icons/fc';

const Folder = () => {
    const dispatch = useDispatch();
    const folderSelecter = useSelector((state) => state.reducerFolder.list);
    useEffect(() => {
        dispatch(getFolders());
        
      }, []);
      console.log("folderSelecter.folderName = ", folderSelecter);
    return (
        <StyledSemester.Flex>
            <div><HeaderMonHoc /></div>
        <div className="Body">
        <div>
            <h1>Quản lý các Folder</h1>
            <StyledSemester.Body>
                {folderSelecter.map ((item, index ) => {
                    return (

                <div className="folder" key={index}>
                    <div className="folderIcon"><FcFolder /></div>
                    <div className="nameFolder">{item.folderName}</div> 
                </div>
                )})}
            </StyledSemester.Body>
        </div>
        </div>
        </StyledSemester.Flex>
    );
};

export default Folder;