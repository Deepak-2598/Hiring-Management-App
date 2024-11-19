import { useDispatch, useSelector } from "react-redux"
import { removeApplicant } from "../redux/common/applicantSlice";

const ApplicantCartData = () => {
    // const applicantData = useSelector((state) => state.applicantData.data)
    const hiredApplicants = useSelector(state => state.applicantData.cartData)
    const dispatch = useDispatch();

    const handleRemoveBtn = (data) => {
        dispatch(removeApplicant(data.id))
    }

    return(
        <div>
            <h1>List of Applicants Hired</h1>
            <table className="cart-table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {hiredApplicants.map((data) => (
                        <tr key={data.id}>
                            <td>{data.id}</td>
                            <td>{data.first_name}</td>
                            <td><button onClick={() => handleRemoveBtn(data)}>Remove</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ApplicantCartData