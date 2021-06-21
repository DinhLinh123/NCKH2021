import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import HeaderMonHoc from '../../layout/HeaderMonHoc';
import { StyledSemester } from '../Semesters/styled';
import { getFolders } from './action';
import { BsFolderFill } from 'react-icons/bs';

const Folder = () => {
    const dispatch = useDispatch();
    const folderSelecter = useSelector((state) => state.reducerFolder.list);
    useEffect(() => {
        dispatch(getFolders());
        
      }, []);
      console.log("folderSelecter = ", folderSelecter);
    return (
        <StyledSemester.Flex>
            <div><HeaderMonHoc /></div>
        <div className="Body">
        <div>
            <h1>Quản lý các file excel</h1>
            <StyledSemester.Body>
                {folderSelecter.map ((item, index ) => {

                <div key={index}><BsFolderFill />{item.folderName} </div>
})}
            </StyledSemester.Body>
        </div>
        </div>
        </StyledSemester.Flex>
    );
};

export default Folder;