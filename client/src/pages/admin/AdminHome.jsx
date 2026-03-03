import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { API_BASE_URL } from '../../config';
 
 function AdminHome() {
    const [data,setData] = useState([]);
    const handlefetch = async ()=>{
        const res  = await axios.get(`${API_BASE_URL}/api/admindashboard/`)
        setData(res.data);
    }
    useEffect(()=>{
        handlefetch()
    },[])
   return (
     <div>
        {data.totalExaminees}
        {data.totalExams}
        {data.totalSubject}
     </div>
   )
 }
 
 export default AdminHome