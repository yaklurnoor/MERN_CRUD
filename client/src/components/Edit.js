import React, { useContext, useState } from 'react'
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const Edit = () => {
    const [inpval, setINP] = useState({
        name: "",
        email: "",
        age: "",
        mobile: "",
        work: "",
        add: "",
        desc: ""
    })
    
    const setdata = (e) => {
      console.log(e.target.value);
      const { name, value } = e.target;
      setINP((preval) => {
          return {
              ...preval,
              [name]: value
          }
      })
    }
    
      return (
        <div className="container">
          <NavLink to="/" >Edit</NavLink>
          <form>
            <div className="row">
              <div class="mb-3 col-lg-6 col-md-6 col-12" >
                <label for="exampleInputEmail1" class="form-label">Name</label>
                <input type="text" class="form-control" value={inpval.name} onChange={setdata}  name="name" id="name" aria-describedby="emailHelp" />
    
              </div>
    
              <div class="mb-3 col-lg-6 col-md-6 col-12">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input type="email" class="form-control" value={inpval.email}  onChange={setdata}  name = "email" id="exampleInputEmail1" aria-describedby="emailHelp" />
    
              </div>
              <div class="mb-3 col-lg-6 col-md-6 col-12">
                <label for="exampleInputEmail1" class="form-label">Age</label>
                <input type="number" class="form-control" value={inpval.age} onChange={setdata}  name="age" id="number" aria-describedby="emailHelp" />
    
              </div>
              <div class="mb-3 col-lg-6 col-md-6 col-12">
                <label for="exampleInputEmail1" class="form-label">Mobile</label>
                <input type="number" class="form-control" value={inpval.mobile} onChange={setdata}  name ="mobile" id="mobile" aria-describedby="emailHelp" />
    
              </div>
              <div class="mb-3 col-lg-6 col-md-6 col-12">
                <label for="exampleInputEmail1" class="form-label">Work</label>
                <input type="text" class="form-control" value={inpval.work} onChange={setdata}   name="work" id="work" aria-describedby="emailHelp" />
    
              </div>
              <div class="mb-3 col-lg-6 col-md-6 col-12">
                <label for="exampleInputEmail1" class="form-label">Address</label>
                <input type="text" class="form-control" value={inpval.address} onChange={setdata}  name="address" id="address" aria-describedby="emailHelp" />
    
              </div>
    
              <div class="mb-3 col-lg-12 col-md-12 col-12">
                <label for="description" class="form-label">Description</label>
                <textarea class="form-control" value={inpval.description} onChange={setdata}  name="description" id="exampleFormControlTextarea1" rows="3"></textarea>
    
              </div>
    
              <button type="submit" class="btn btn-primary">Submit</button>
            </div>
          </form>
    
        </div>
      )
}

export default Edit;