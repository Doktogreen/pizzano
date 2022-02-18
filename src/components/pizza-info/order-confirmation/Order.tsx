import React, {useState} from "react";
import './index.css';

export default function OrderConfirmation(){
    return(
        <table cellPadding="0" cellSpacing="0" width="100%" style={{width: "100%"}}>
        <tr style={{width: "100%"}}>
            <td style={{width: "100%"}}>
                <table cellPadding="0" cellSpacing="0" width="100%" style={{maxWidth: "100%"}}>
                    <tr>
                        <td valign="top" style={{display: "flex", alignItems: "center", fontSize: "0", padding: "35px", justifyContent: "space-between", backgroundColor: "transparent"}}>
                            <div style={{display: "inline-block", maxWidth: "100%", minWidth: "100px", verticalAlign: "top", width: "100%"}}>
                                    <tr>
                                        <a className="navbar-brand" href="index.html"><span className="flaticon-pizza-1 mr-1"></span>Pizzano<br /><small>Delicous</small></a>
                                    </tr>
                                
                            </div>
                            <tr>
                                <td style={{fontFamily: "Open Sans, Helvetica, Arial, sans-serif", fontSize: "18px", fontWeight: "400", lineHeight: "24px"}}> <a href="#" target="_blank" style={{color: "#ffffff", textDecoration: "none"}}>
                                    <img src="https://img.icons8.com/color/48/000000/small-business.png" width="27" height="23" style={{display: "block", border: "0px"}} /></a> </td>
                            </tr>
                            
                        </td>
                    </tr>
                    <tr>
                        <td style={{padding: "35px 35px 20px 35px", backgroundColor: "#FAC564"}}>
                            <table cellPadding="0" cellSpacing="0" width="100%" style={{maxWidth: "600px"}}>
                                <tr>
                                    <td style={{fontFamily: "Open Sans, Helvetica, Arial, sans-serif", fontSize: "16px", fontWeight: "400", lineHeight: "24px", paddingTop: "25px"}}> <img src="https://img.icons8.com/carbon-copy/100/000000/checked-checkbox.png" width="125" height="120" style={{display: "block", border: "0px"}} /><br />
                                        <h2 style={{fontSize: "30px", fontWeight: "800", lineHeight: "36px", color: "#333333", margin: "0"}}> Thank You For Your Order! </h2>
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{fontFamily: "Open Sans, Helvetica, Arial, sans-serif", fontSize: "16px", fontWeight: "400", lineHeight: "24px", paddingTop: "10px"}}>
                                        <div style={{fontSize: "16px", fontWeight: "400", lineHeight: "24px", color: "#777777"}}> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium iste ipsa numquam odio dolores, nam. </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{paddingTop: "20px"}}>
                                        <table cellSpacing="0" cellPadding="0" width="100%">
                                        <tr>
                                                <td width="75%"  style={{backgroundColor:"#eeeeee", fontFamily: "Open Sans, Helvetica, Arial, sans-serif", fontSize: "16px", fontWeight: "800", lineHeight: "24px", padding: "10px"}}> Order Confirmation # </td>
                                                <td width="25%" style={{backgroundColor:"#eeeeee", fontFamily: "Open Sans, Helvetica, Arial, sans-serif", fontSize: "16px", fontWeight: "800", lineHeight: "24px", padding: "10px"}}> 2345678 </td>
                                            </tr>
                                            <tr>
                                                <td width="75%" style={{fontFamily: "Open Sans, Helvetica, Arial, sans-serif", fontSize: "16px", fontWeight: "400", lineHeight: "24px", padding: "15px 10px 5px 10px"}}> Purchased Item (1) </td>
                                                <td width="25%" style={{fontFamily: "Open Sans, Helvetica, Arial, sans-serif", fontSize: "16px", fontWeight: "400", lineHeight: "24px", padding: "15px 10px 5px 10px"}}> $100.00 </td>
                                            </tr>
                                            <tr>
                                                <td width="75%" style={{fontFamily: "Open Sans, Helvetica, Arial, sans-serif", fontSize: "16px", fontWeight: "400", lineHeight: "24px", padding: "5px 10px"}}> Shipping + Handling </td>
                                                <td width="25%" style={{fontFamily: "Open Sans, Helvetica, Arial, sans-serif", fontSize: "16px", fontWeight: "400", lineHeight: "24px", padding: "5px 10px"}}> $10.00 </td>
                                            </tr>
                                            <tr>
                                                <td width="75%" style={{fontFamily: "Open Sans, Helvetica, Arial, sans-serif", fontSize: "16px", fontWeight: "400", lineHeight: "24px", padding: "5px 10px"}}> Sales Tax </td>
                                                <td width="25%" style={{fontFamily: "Open Sans, Helvetica, Arial, sans-serif", fontSize: "16px", fontWeight: "400", lineHeight: "24px", padding: "5px 10px"}}> $5.00 </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{paddingTop: "20px"}}>
                                        <table cellSpacing="0" cellPadding="0" width="100%">
                                        <tr>
                                                <td width="75%" style={{fontFamily: "Open Sans, Helvetica, Arial, sans-serif", fontSize: "16px", fontWeight: "800", lineHeight: "24px", padding: "10px", borderTop: "3px solid #eeeeee", borderBottom: "3px solid #eeeeee"}}> TOTAL </td>
                                                <td width="25%" style={{fontFamily: "Open Sans, Helvetica, Arial, sans-serif", fontSize: "16px", fontWeight: "800", lineHeight: "24px", padding: "10px", borderTop: "3px solid #eeeeee", borderBottom: "3px solid #eeeeee"}}> $115.00 </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td height="100%" valign="top" width="100%" style={{padding: "0 35px 35px 35px", backgroundColor: "#FAC564"}}>
                            <table cellPadding="0" cellSpacing="0" width="100%" style={{maxWidth: "100%"}}>
                                <tr>
                                    <td valign="top" style={{fontSize:"0"}}>
                                        <div style={{display: "inline-block", maxWidth: "50%", minWidth: "240px", verticalAlign: "top", width: "100%"}}>
                                            <table cellPadding="0" cellSpacing="0" width="100%" style={{maxWidth: "300px"}}>
                                                <tr>
                                                    <td valign="top" style={{fontFamily: "Open Sans, Helvetica, Arial, sans-serif", fontSize: "16px", fontWeight: "400", lineHeight: "24px"}}>
                                                        <div style={{fontWeight: "800"}}>Delivery Address</div>
                                                        <div>675 Massachusetts Avenue<br />11th Floor<br />Cambridge, MA 02139</div>
                                                    </td>
                                                </tr>
                                            </table>
                                        </div>
                                        <div style={{display: "inline-block", maxWidth: "100%", minWidth: "240px", verticalAlign: "top", width: "100%"}}>
                                            <table cellPadding="0" cellSpacing="0" width="100%" style={{maxWidth: "300px"}}>
                                                <tr>
                                                    <td valign="top" style={{fontFamily: "Open Sans, Helvetica, Arial, sans-serif", fontSize: "16px", fontWeight: "400", lineHeight: "24px"}}>
                                                        <div style={{fontWeight: "800"}}>Estimated Delivery Date</div>
                                                        <div>January 1st, 2016</div>
                                                    </td>
                                                </tr>
                                            </table>
                                        </div>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td style={{padding: "35px", backgroundColor: "#ff7361"}}>
                            <table cellPadding="0" cellSpacing="0" width="100%" style={{maxWidth: "600px"}}>
                                <tr>
                                    <td style={{fontFamily: "Open Sans, Helvetica, Arial, sans-serif", fontSize: "16px", fontWeight: "400", lineHeight: "24px", paddingTop: "25px"}}>
                                        <h2 style={{fontSize: "24px", fontWeight: "800", lineHeight: "30px", color: "#ffffff", margin: "0"}}> Get 30% off your next order. </h2>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                   
                </table>
            </td>
        </tr>
    </table>
    )
}