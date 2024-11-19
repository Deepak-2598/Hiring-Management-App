import React, { useState, useEffect } from 'react';
import { addApplicant, fetchApplicantData, removeApplicant } from '../redux/common/applicantSlice';
import { useDispatch, useSelector } from 'react-redux';
import ApplicantForm from './ApplicantForm';
import ApplicantCartData from './ApplicantCartData'

const ApplicantData = () => {
    const dispatch = useDispatch();
    const applicantData = useSelector((state) => state.applicantData.data)
    const cartData = useSelector((state) => state.applicantData.cartData)
    const [isHired, setIsHired] = useState({})    
    useEffect(() => {
        dispatch(fetchApplicantData());
    },[dispatch])

    useEffect(() => {
        const hiredState = {}
        cartData.forEach(applicant => {
            hiredState[applicant.id] = true;
        })
        setIsHired(hiredState)
    },[cartData])

    const handleHireBtn = (data) => {
        setIsHired((prevState) => ({
            ...prevState,
            [data.id]:true,
        }))
        dispatch(addApplicant(data));
    }
    const handleRemoveBtn = (data) => {
        setIsHired((prevState) => ({
            ...prevState,
            [data.id]:false,
        }))
        dispatch(removeApplicant(data.id));
    }

    return(
        <div>
            <div>
                <ApplicantForm />
            </div>
            <h1>Hired Applicants</h1>
            <table className='table-data'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {applicantData?.map((data) => (
                        <tr key={data.id}>
                            <td>{data.id}</td>
                            <td>{data.first_name}</td>
                            <td>
                                {!isHired[data.id] ? (
                                  <button className='hire-btn' onClick={() => handleHireBtn(data)}>Hire</button>
                                ) : (
                                  <button className='remove-btn' onClick={() => handleRemoveBtn(data)}>Remove</button>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div><ApplicantCartData /></div>
        </div>
    )
}

export default ApplicantData