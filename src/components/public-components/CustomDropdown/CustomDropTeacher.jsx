import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllteachers } from '../../../store/profile/teachers/teachersSlice';
import CustomDropdown from './CustomDropdown';

const CustomDropTeacher = ({handleSelect}) => {
  
        const dispatch = useDispatch();
        const { records } = useSelector((state) => state.teachers);
      
        useEffect(() => {
            dispatch(getAllteachers());
        }, [dispatch]);
    return <CustomDropdown records={records} handleSelect={handleSelect}  />;
    };


export default CustomDropTeacher;
