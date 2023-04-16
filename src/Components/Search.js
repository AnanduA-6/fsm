import React, { useState } from "react";

import "../Styles/Table.css";
import "../Styles/Search.css";


import { Navbar, NavDropdown, Form, FormControl, Button, Nav } from 'react-bootstrap'





const Table = () => {
  const [searchKey, setSearchKey] = useState('')
  const [parameter, setParameter] = useState('')
  const [data, setData] = useState([])



  function apiCall(url) {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setData(data)
        // if (!Array.isArray(data)) {
        //   setData([data])
        // }
        // else {
        //   setData(data)
        // }
      })
      .catch(error => console.error(error));
  }

  function handleSearch(event) {
    event.preventDefault();
    if (parameter === 'company') {
      let url = `http://localhost:15109/api/Nse/company?company=${searchKey}`
      apiCall(url)
    }
    if (parameter === 'isin') {
      let url = `http://localhost:15109/api/Nse/isin?isin=${searchKey}`
      apiCall(url)
    }
    if (parameter === 'symbol') {
      let url = `http://localhost:15109/api/Nse/symbol?symbol=${searchKey}`
      apiCall(url)
    }
    if (parameter === 'industry') {
      let url = `http://localhost:15109/api/Nse/industry?industry=${searchKey}`
      apiCall(url)
    }
    if (parameter === 'gics') {
      let url = `http://localhost:15109/api/Nse/industry?gics=${searchKey}`
      apiCall(url)
    }

  }



  return (




    <div>
      <div class="search-container">

        <form onSubmit={handleSearch} >

          <input type="text" placeholder="Search..." class="round" onChange={(e) => setSearchKey(e.target.value)}></input>

          <button class="but" type="submit" >Search</button>

        </form>

      </div>

      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="isin" onChange={(e) => setParameter(e.target.value)} />
        <label class="form-check-label" for="inlineRadio1">ISIN</label>
      </div>

      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="symbol" onChange={(e) => setParameter(e.target.value)} />
        <label class="form-check-label" for="inlineRadio2">SYMBOL</label>
      </div>

      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="industry" onChange={(e) => setParameter(e.target.value)} />
        <label class="form-check-label" for="inlineRadio2">INDUSTRY</label>
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="company" onChange={(e) => setParameter(e.target.value)} />
        <label class="form-check-label" for="inlineRadio2">COMPANY</label>
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="gics" onChange={(e) => setParameter(e.target.value)} />
        <label class="form-check-label" for="inlineRadio2">GICS</label>
      </div>






      <div class="container">







        <br></br>




        <br></br>




        <table class="table table-bordered">




          <thead>




            <tr>




              <th>COUNTRY</th>




              <th>EXCHANGE</th>




              <th>SYMBOL</th>




              <th>COMPANY</th>




              <th>ISIN</th>




              <th>DATE OF LIST</th>




              <th>FACE VALUE</th>




              <th>INDUSTRY</th>




              <th>SECTOR</th>




              <th>LISTING STATUS</th>




              <th>GICS</th>






            </tr>





          </thead>

          {

            data.length!== 0 ?
              data.map(item => {
                return <tr>
                  <td>{item.country}</td>




                  <td>{item.exchange}</td>




                  <td>{item.symbol}</td>




                  <td>{item.company}</td>




                  <td>{item.isinNumber}</td>




                  <td>{item.dateOfListing}</td>




                  <td>{item.faceValue}</td>




                  <td>{item.industry}</td>




                  <td>{item.sector}</td>




                  <td>{item.listingStatus}</td>




                  <td>{item.gics}</td>

                </tr>
              })
              : <h2 style={{ position: "absolute" }}>Sorry, no data found</h2>
          }


        </table>






      </div>
    </div>

  )

}

export default Table;