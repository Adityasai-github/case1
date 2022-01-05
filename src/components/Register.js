import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import './Register.css'

export class Register extends Component {
  constructor(props) {
    super(props)

    this.state = {
         ID:'',
         farmername:'',
         farmerpassword:'',
         farmeremail:'',
         farmeraccno:'',
        
     
         
         farmernameError:'',
         farmerpasswordError:'',
         farmeremailError:'',
         farmeraccnoError:'',
         isProfile: false
    }
    this.register=this.register.bind(this)
    this.handleChange=this.handleChange.bind(this)
}
valid(){
    if(this.state.farmername.length<4 && this.state.farmerpassword.length<3 && this.state.farmeremail.length<5 && this.state.farmeraccno.length<3 ) {
        this.setState({
          farmernameError:"Name cannot be less than 3 word",
          farmerpasswordError:"Password should be more than 6", 
            farmeremailError:"Invalid email id",
            farmeraccnoError:"Your accno is invalid one "

        })
    }
    else if(this.state.farmername.length<4){
        this.setState({
          farmernameError:"Name cannot be less than 3 word"})
    }
    else if(this.state.farmerpassword.length<3){
        this.setState({
          farmerpasswordError:"Password should be more than 3"
        })
    }
    else if(this.state.farmeremail.length<5){
        this.setState({
          farmeremailError:"Invalid email id"
        })
    }
    else if(this.state.farmeraccno.length<3){
        this.setState({
            farmeraccnoError:"Invalid accno"
        })
    }
    else{
        return true
    }
}
register(e){
    this.setState({
      farmernameError:"",
        farmerpasswordError:"",
        farmeremailError:"",
        farmeraccnoError:""

    })
    e.preventDefault()
    
    if(this.valid()){
        fetch("http://localhost:8081/farmer/addfarmers",{
            "method":"POST",
            "headers":{
                "content-type":"application/json",
                "accept":"application/json",
                "Access-Control-Allow-Origin":"*"
            },
            "body": JSON.stringify({
                ID: this.state.ID,
                farmername:this.state.farmername,
                farmerpassword: this.state.farmerpassword,
                farmeremail: this.state.farmeremail,
                farmeraccno:this.state.farmeraccno
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
          
               <h5>farmername</h5>
               <input type='text'  placeholder="Enter Your Name" onChange={(e) => this.handleChange({farmername: e.target.value})} />

               <h5>farmerpassword</h5>
               <input type='text'  placeholder="Enter Your password" onChange={(e) => this.handleChange({farmerpassword: e.target.value})} />

               <h5>farmeremail</h5>
               <input type='email'  placeholder="Enter Your Email" onChange={(e) => this.handleChange({farmeremail: e.target.value})} />

               <h5>faccno</h5>
               <input type='number'  placeholder="Enter Your Accountno" onChange={(e) => this.handleChange({farmeraccno: e.target.value})} />


               <button type='submit' onClick={(e)=>this.register(e)} className='register__signUpButton'>Sign Up</button>
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

export default Register