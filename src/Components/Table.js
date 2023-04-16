import React from "react";

import "../Styles/Table.css";





const Table = () => {

    return (






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

                {/*

                    <tbody>




                        {




                            securityMaster.loading ? '' :




                                securityMaster.data.map((obj) => (




                                    //console.log(obj);




                                    <tr key={obj.isinNumber}>




                                        <td>{obj.exchange}</td>




                                        <td>{obj.country}</td>




                                        <td>{obj.currency}</td>




                                        <td>{obj.isinNumber}</td>




                                        <td>{obj.symbol}</td>




                                        <td>{obj.nameOfCompany}</td>




                                        <td>{obj.series}</td>




                                        <td>{obj.sector}</td>




                                        <td>{obj.industry}</td>




                                        <td>{obj.gics}</td>




                                    </tr>)




                                )




                        }




                    </tbody> */}







            </table>






        </div>

    )

}

export default Table;