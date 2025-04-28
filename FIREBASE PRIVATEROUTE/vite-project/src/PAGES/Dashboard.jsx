import React, { useEffect, useState } from 'react'
import axios from 'axios';


const Dashboard = () => {
  const [fetchdata, setfetchdata] = useState([]);


  function fetchproduct() {
    axios
      .get('https://fakestoreapi.com/products')
      .then(response => { setfetchdata(response.data) })
      .catch(error => { console.log(error) })
  }
  console.log(fetchdata)

useEffect(() => {
    fetchproduct();
  }, [])


  return (

    <div className="card-container">
      {fetchdata.map((el) => (
        <div key={el.id} className="card">

          <img src={el.image} alt={el.title} />

          <h3>{el.title}</h3>
          <p className="card-price">${el.price}</p>
          <span className="card-category">{el.category}</span>
          <p>{el.description}</p>

        </div>
      ))}
    </div>)

}

export default Dashboard;




  