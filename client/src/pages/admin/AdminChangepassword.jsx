import axios from "axios";
import React, { useState } from "react";
import { API_BASE_URL } from "../../config";

const AdminChangepassword = () => {
  const id = localStorage.getItem("userId");
  console.log(id)
  const [form, setForm] = useState({
    op: "",
    np: "",
    cnp: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res =await axios.put(`${API_BASE_URL}/api/admin/change/${id}`,form)
      alert("Password change is successfully");
    } 
 
    catch (er) {
      console.log(er);
     alert("Password chang is Failed");
    }
  };

  return (
    <div className="container-fluid">
      <div className="py-3 px-3 mt-3">
        <div className="col-sm-8 mx-auto">
          <form method="post" onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-sm-9 my-2 mx-auto">
                <input
                  type="text"
                  name="op"
                  value={form.op}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Enter Old Password"
                />
              </div>
            </div>

            <div className="row">
              <div className="col-sm-9 my-2 mx-auto">
                <input
                  type="text"
                  name="np"
                  value={form.np}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Enter New Password"
                />
              </div>
            </div>

            <div className="row">
              <div className="col-sm-9 my-2 mx-auto">
                <input
                  type="text"
                  name="cnp"
                  value={form.cnp}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Confirm New Password"
                />
              </div>
            </div>

            <div className="col-sm-6 mx-auto text-center mt-3">
              <button type="submit" className="btn btn-success">
                Update Password
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminChangepassword;