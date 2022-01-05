import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import './Register.css'

export class Register1 extends Component {
  constructor(props) {
    super(props)

    this.state = {
        dealerid:'',
         dealername:'',
         dealerpassword:'',
         dealeraccno:'',
        
     
         
         dealernameError:'',
         dealerpasswordError:'',
         dealeraccnoError:'',
         isProfile: false
    }
    this.register1=this.register1.bind(this)
    this.handleChange=this.handleChange.bind(this)
}
valid(){
    if(this.state.dealername.length<4 && this.state.dealerpassword.length<3 &&  this.state.dealeraccno.length<3 ) {
        this.setState({
          dealernameError:"Name cannot be less than 3 word",
          dealerpasswordError:"Password should be more than 6", 
            dealeraccnoError:"Your accno is invalid one "

        })
    }
    else if(this.state.dealername.length<4){
        this.setState({
          dealernameError:"Name cannot be less than 3 word"})
    }
    else if(this.state.dealerpassword.length<3){
        this.setState({
          dealerpasswordError:"Password should be more than 3"
        })
    }
    
    
    else if(this.state.dealeraccno.length<3){
        this.setState({
            dealeraccnoError:"Invalid accno"
        })
    }
    else{
        return true
    }
}
register1(e){
    this.setState({
      dealernameError:"",
        dealerpasswordError:"",
        dealeraccnoError:""

    })
    e.preventDefault()
    
    if(this.valid()){
        fetch("http://localhost:8083/trader/adddealers",{
            "method":"POST",
            "headers":{
                "content-type":"application/json",
                "accept":"application/json",
                "Access-Control-Allow-Origin":"*"
            },
            "body": JSON.stringify({
                dealername:this.state.dealername,
                dealerpassword: this.state.dealerpassword,
                dealeraccno:this.state.dealeraccno
            })
        })
        .then(response=> response.json())
        .then(response=>{
            alert("You have been Registered Successfully")
            
        })
        
        .catch(err=>{
            alert("Your Registration is successfulll..!!!!")
        })
        
    }
}
handleChange(changeObject){
    this.setState(changeObject)
}
  render() {
    return (
        <div className='register'>
        <Link to='/'>
            <h1>Registration Dashboard</h1>
       </Link>

       <div className="register__container">
           <h1>Sign-up</h1>

           <form>
          
               <h5>tradername</h5>
               <input type='text'  placeholder="Enter Your Name" onChange={(e) => this.handleChange({dealername: e.target.value})} />

               <h5>traderpassword</h5>
               <input type='text'  placeholder="Enter Your password" onChange={(e) => this.handleChange({dealerpassword: e.target.value})} />

               <h5>traderaccno</h5>
               <input type='number'  placeholder="Enter Your Accountno" onChange={(e) => this.handleChange({dealeraccno: e.target.value})} />


               <button type='submit' onClick={(e)=>this.register1(e)} className='register__signUpButton'>Sign Up</button>
           </form>

           <p>
                By signing-up you agree to the E-Shop Conditions of Use & Sale. Please
                see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
            </p>
            <Link to='/login'>
            <h6  className='register__registerButton'>Sign In your Respective Account</h6>
            </Link>
       </div>
    </div>
    )
  }
}

export default Register1