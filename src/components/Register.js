//import { Navigate } from "react-router-dom";
import React, { useState } from 'react'
import Dashboard from "./Dahboard";
import axios from 'axios';
function Regster(props) {
  const [data, setdata] = useState({ Username: '', Email: '', Mobile: '', Usertype: '', Password: '' })
  const apiUrl = "http://localhost:8000/api/users/";
  //const [value, setValue] = React.useState();
  //  const navigate = useNavigate();

  const [selectedCounty, setSelectedCountry] = useState("");
  const users = {
    user: ["user"],
    company: ["company"]
  };

  const userTypeList = Object.keys(users).map(key => ({
    name: key
  }));

  function handleCountrySelect(e) {
    console.log("Selected userType", e.target.value);
    const countrySel = e.target.value;
    //countrySel !== "" ? users[countrySel] : [];
    setSelectedCountry(countrySel);
  }


  const Registration = (e) => {
    e.preventDefault();
    //debugger;
    //alert('TYpe------'+data.Usertype);
    const data1 = { user_name: data.Username, email_id: data.Email, mobile_no: data.Mobile, user_type: selectedCounty, password: data.Password };
    console.log('datattttttt;;;;');
    axios.post(apiUrl, data1)
      .then((result) => {
        //debugger;
        console.log('regter;;;;');
        console.log(result.data);
        if ('access_token' in result.data) {
          //alert('Invalid User');
          console.log('set access_token;;;;');
          const userName = 'Anu';
          localStorage.setItem('access_token', result.data.access_token);
          localStorage.setItem('user', userName);
          alert("Registered successfully");
          window.location.href = "/Dashboard";
        } else {
          //navigate('/Login1', { replace: true })
          console.log('eleeee;;;;');
        //return <Navigate replace to="/Login1" />;
        }
      })
  }
  const onChange = (e) => {
    e.persist();
    //debugger;
    //alert('Name----'+ e.target.name);
    //alert('Value----'+e.target.value);
    setdata({ ...data, [e.target.name]: e.target.value });
    //    alert(e.target.value);
  }
  return (
    <div className="">
      <div className="card o-hidden border-0 shadow-lg my-5" style={{ "marginTop": "5rem !important" }}>
        <div className="card-body p-0">
          <div className="row">
            <div className="col-lg-12">
              <div className="p-5">
                <div className="text-center">
                  <h1 className="h4 text-gray-900 mb-4">Create a New User</h1>
                </div>
                <form onSubmit={Registration} className="user">
                  <div className="form-group row">
                    <div className="col-sm-6 mb-3 mb-sm-0">
                      <input type="text" name="Email" onChange={onChange} value={data.Email} className="form-control" id="exampleFirstName" placeholder="Email" />
                    </div>
                    <div className="col-sm-6">
                      <input type="Password" name="Password" onChange={onChange} value={data.Password} className="form-control" id="exampleLastName" placeholder="Password" />
                    </div>
                  </div>
                  <div className="form-group">
                    <input type="text" name="Username" onChange={onChange} value={data.Username} className="form-control" id="exampleInputEmail" placeholder="Username" />
                  </div>
                  <div className="form-group row">
                    <div className="col-sm-6 mb-3 mb-sm-0">
                      <input type="text" name="Mobile" onChange={onChange} value={data.Mobile} className="form-control" id="exampleInputPassword" placeholder="Mobile" />
                    </div>
                    <div className="col-sm-6">
                      <select
                        //value={value}
                        //onChange={e => setValue(e.currentTarget.value)}
                        onChange={e => handleCountrySelect(e)}
                        value={selectedCounty}
                        className="form-control" id="exampleRepeatPassword" placeholder="Usertype">
                        <option value="">Select the user type</option>
                        {userTypeList.map((country, key) => (
                          <option key={key} value={country.name}>
                            {country.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <button type="submit" className="btn btn-primary  btn-block">
                    Create User
                  </button>
                  <hr />
                </form>
                <hr />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Regster  