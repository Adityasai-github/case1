import React, { Component } from 'react'
import { Link, useNavigate,useParams } from 'react-router-dom';
import GooglePayButton from '@google-pay/button-react';
import CropService from '../services/CropService';

 

import { Card, Col, Container, Row } from 'react-bootstrap';
 
import Button from 'react-bootstrap/Button';
class BuyCrop extends Component {
    constructor(props){
        super(props)
        this.state={
            cropid: this.props.cropid,
            cropname: '',
            cropquantity: '',
            cropaddress: '',
            croptype: '',
            cropmincost: '',
            cropImg:''
        }
        // this.handleChange=this.handleChange.bind(this)
        this.changecropidHandler=this.changecropidHandler.bind(this);
        this.changecropnameHandler=this.changecropnameHandler.bind(this);
        this.changecropquantityHandler=this.changecropquantityHandler.bind(this);
        this.changecropaddressHandler=this.changecropaddressHandler.bind(this);
        this.changecroptypeHandler=this.changecroptypeHandler.bind(this);
        this.changecropmincostHandler=this.changecropmincostHandler.bind(this);
        this.addCrop=this.addCrop.bind(this);
    }

    componentDidMount(){
        CropService.getCropById(this.state.cropid).then(res =>{
                let crop = res.data;
                console.log(crop);
                this.setState({
                    cropImg: crop.cropImg,
                    cropid: crop.cropid,
                    cropname: crop.cropname,
                    cropquantity: crop.cropquantity,
                    cropaddress: crop.cropaddress,
                    croptype: crop.croptype,
                    cropmincost: crop.cropmincost
            })

            console.log(this.state.cropmincost);
        })
    }
   
    // handleChange(e){
    //     this.setState({
    //         method: e.target.value
    //     });
    //     let cost=this.state.cost;
    //     sessionStorage.setCost(cost, cost);
    // }
    
    
    addCrop = (c)=> {
        c.preventDefault();
        let crop={cropImg: this.state.cropImg,cropid: this.state.cropid,cropname: this.state.cropname, cropquantity: this.state.cropquantity, cropaddress: this.state.cropaddress, croptype: this.state.croptype, cropmincost: this.state.cropmincost};
        console.log( JSON.stringify(crop));
       

        CropService.buyCrop(crop,this.state.cropid).then(res => {
            //    // let navigate =  useNavigate();
               this.props.navigate("/crops")
            //     //let params = useParams();
            })

    }

    changecropidHandler= (event) =>{
        this.setState({cropid: event.target.value});
    }
    changecropnameHandler= (event) =>{
        this.setState({cropname: event.target.value});
    }
    changecropquantityHandler= (event) =>{
        this.setState({cropquantity: event.target.value});
    }
    changecropaddressHandler= (event) =>{
        this.setState({cropaddress: event.target.value});
    }
    changecroptypeHandler= (event) =>{
        this.setState({croptype: event.target.value});
    }
    changecropmincostHandler= (event) =>{
        this.setState({cropmincost: event.target.value});
    }

    render() {
        let cost= this.state.cropmincost
        return (
            <div>
            <br></br>
               <div className = "container">
                    <div className = "row">
                        <div className = "card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">crops purchased</h3>
                            <div className = "card-body">
                                <form>
                                <div className="form-group">
                                    <label>cropid : </label>
                                    <input placeholder="cropid" name="cropid" className="form-control"
                                    value={this.state.cropid} onChange={this.changecropidHandler}/>
                                </div>
                                <div className="form-group">
                                    <label>cropname : </label>
                                    <input placeholder="cropname" name="cropname" className="form-control"
                                    value={this.state.cropname} onChange={this.changecropnameHandler}/>
                                </div>

                                <div className="form-group">
                                    <label>cropquantity : </label>
                                    <input placeholder="cropquantity" name="cropquantity" className="form-control"
                                    value={this.state.cropquantity} onChange={this.changecropquantityHandler}/>
                                </div>
                                <div className="form-group">
                                    <label>cropaddress : </label>
                                    <input placeholder="cropaddress" name="cropaddress" className="form-control"
                                    value={this.state.cropaddress} onChange={this.changecropaddressHandler}/>
                                </div>
                                <div className="form-group">
                                    <label>croptype : </label>
                                    <input placeholder="croptype" name="croptype" className="form-control"
                                    value={this.state.croptype} onChange={this.changecroptypeHandler}/>
                                </div>
                                <div className="form-group">
                                    <label>cropmincost : </label>
                                    <input placeholder="cropmincost" name="cropmincost" className="form-control"
                                    value={this.state.cropmincost} onChange={this.changecropmincostHandler}/><br></br>
                                     <Link to={'/crops'}> <button className="btn btn-danger" style={{marginLeft: "10px"}}>Cancel</button></Link>
                                </div>

                                    {/* <input placeholder="dealersId" name="dealersId" className="form-control" 
                                            value={this.state.dealersId} onChange={this.changeDealersIdHandler}/> */}
                                    
                                    {/* <Link path="/payment" element={<Pay/>}/> */}<br></br>

                                    <GooglePayButton
           environment="TEST"
           paymentRequest={{
             apiVersion: 2,
             apiVersionMinor: 0,
             allowedPaymentMethods: [
              {
                type: 'CARD',
                parameters: {
                   allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
                   allowedCardNetworks: ['MASTERCARD', 'VISA'],
                 },
                 tokenizationSpecification: {
                   type: 'PAYMENT_GATEWAY',
                   parameters: {
                    gateway: 'example',
                    gatewayMerchantId: 'exampleGatewayMerchantId',
                  },
                },
               },
             ],
             merchantInfo: {
               merchantId: '12345678901234567890',
               merchantName: 'Farmer',
               
             },
             transactionInfo: {
              totalPriceStatus: 'FINAL',
              totalPriceLabel: 'Total',
               totalPrice: this.state.cropmincost+"" , 
               currencyCode: 'INR',
               countryCode: 'IN',
             },
             shippingAddressRequired: true,
             callbackIntents: ['SHIPPING_ADDRESS', 'PAYMENT_AUTHORIZATION'],
           }}
           onLoadPaymentData={paymentRequest => {
             console.log('Success', paymentRequest);
          }}
           onPaymentAuthorized={paymentData => {
               console.log('Payment Authorised Success', paymentData)
               return { transactionState: 'SUCCESS'}
           }
          }
          onPaymentDataChanged={paymentData => {
            console.log('On Payment Data Changed', paymentData)
            
               return { }
               
             }
           }
           
           
           existingPaymentMethodRequired='false'
           buttonColor='black'
          buttonType='Buy'
         />
                                </form>
                            </div>
                        </div>
                    </div>

               </div>
        </div>
        )
    }
}

export default function WithNavigate(props) {
    let navigate = useNavigate();
    let {cropidid} = useParams();
    return <BuyCrop {...props} navigate={navigate} cropidid={cropidid} />
}
