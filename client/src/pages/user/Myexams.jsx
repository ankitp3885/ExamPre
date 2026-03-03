import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { API_BASE_URL } from '../../config';
const Myexams = () =>{
    const [data ,setData]=useState([]);
    const handlefetch = async()=>{
        const res=await axios.get(`${API_BASE_URL}/api/exams/exams`)
        setData(res.data)
        //console.log(res.data[0])
    }
    useEffect(()=>{
        handlefetch();
    },[])
    console.log(data)

  return (
   
        <div className="row">
            <div className="col-sm-12">
                <div className="w-90 mx-auto mt-5 border p-2">
                <h1>My Exam</h1>
                <table className="w-100 mx-auto mt-2 border mb-4">
                    <thead>
                        <tr>
                            <th className="pt-1 border border-2 ps-3 pb-1">S.No</th>
                            <th className="pt-1 border border-2 ps-3 pb-1"> Exam Name</th>
                            <th className="pt-1 border border-2 ps-3 pb-1">Date Duration</th>
                            <th className="pt-1 border border-2 ps-3 pb-1">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item,i)=>(
                            <tr key={item._id}>
                                <td>{i+1}</td>
                                <td>{item.title}</td>
                                <td>{item.date}</td>
                                <td>{item.duration}</td>
                                <td>
                                    <Link className='btn btn-primary' to={`/userDashboard/getexam/` + item._id}>Start</Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                    </table>
            </div>
        </div>
    </div>
  )
}

export default Myexams