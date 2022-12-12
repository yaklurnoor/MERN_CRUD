import React, { Component } from 'react';



const Home = (props) => {
  

        return (
            <div className = "mt-5">
                <div className = "container">
                <div className = "add_btn mb-2 mt-2" >
                    <button className = "btn btn-primary" >Add Data</button>

                </div>
                <table class="table">
  <thead>
    <tr className = "table-dark">
      <th scope="col">ID</th>
      <th scope="col">UserName</th>
      <th scope="col">Email</th>
      <th scope="col">Job</th>
      <th scope="col">Number</th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto@gmail.com</td>
      <td>Sales Manager </td>
      <td>5555555555</td>
      <td className = "d-flex justify-content-between">
      <button className = "btn btn-success"><i class="fas fa-eye"></i></button>
      <button className = "btn btn-primary"><i class="fas fa-pen"></i></button>
      <button className = "btn btn-danger"><i class="fas fa-trash-alt"></i></button>
      </td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Jacob@gmail.com</td>
      <td>ProdUct Owner</td>
      <td>77777777</td>
      <td className = "d-flex justify-content-between">
      <button className = "btn btn-success"><i class="fas fa-eye"></i></button>
      <button className = "btn btn-primary"><i class="fas fa-pen"></i></button>
      <button className = "btn btn-danger"><i class="fas fa-trash-alt"></i></button>
      </td>
    </tr>
    
  </tbody>
</table>
                </div>
                       
            </div>
        );
   
}

export default Home;