import React from 'react'

const Cases = ({ stateCases }) => {
    return (
    <div class="container">
    <center><h2>Corona in India</h2></center>            
    <table class="table table-hover table-dark">
      <thead>
        <tr>
          <th>ID</th>
          <th>State Name</th>
          <th>Total Cases</th>
          <th>Total Recovered</th>
          <th>Total Deaths</th>
        </tr>
      </thead>
      <tbody>
          {stateCases.map((stateC) =>(
            <tr>
            <td>{stateC.id}</td>
            <td>{stateC.name}</td>
            <td>{stateC.cases}</td>
            <td>{stateC.recovered}</td>
            <td>{stateC.deaths}</td>
          </tr>
          ))}
      </tbody>
    </table>
  </div>);
};

export default Cases;