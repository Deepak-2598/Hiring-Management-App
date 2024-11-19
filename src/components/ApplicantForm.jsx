import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addApplicantData } from "../redux/common/applicantSlice";

const ApplicantForm = () => {
    const [name, setName] = useState();
    const [roleType, setRoleType] = useState();
    const applicantData = useSelector((state) => state.applicantData.data)
    const dispatch = useDispatch();

    const handleSubmitBtn = (e) => {
        e.preventDefault();
        const applicantId = applicantData.length + 1;
        dispatch(addApplicantData({ first_name:name, id:applicantId }));
        // console.log(addApplicantData,'addApplicant-dispatch.......');
        setName('');
        setRoleType('');
    }

    return(
    <div className="cointainer">
        <div className="card">
        <h1>Hiring Form</h1>
        <form className="applicant-form" onSubmit={handleSubmitBtn}>
            <input 
                type="text" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                name="userName"
                placeholder="Name"
                required
            />
            <input 
                type="text" 
                value={roleType}
                onChange={(e) => setRoleType(e.target.value)}
                name="roleApplying"
                placeholder="Role Applying"
                required
            />
            <button type="submit">Submit</button>
        </form>
        </div>
    </div>
)}

export default ApplicantForm