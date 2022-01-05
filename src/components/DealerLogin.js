import axios from 'axios';
import React, { Component } from 'react'
import { Button, Col, Container, ListGroup, Nav, Navbar, Offcanvas, Row, Tab } from 'react-bootstrap';
import { Link , useNavigate, useParams } from 'react-router-dom';

class DealerLogin extends Component {
    constructor(props){
        super(props)
        this.state={
            dealername:"",
            dealerpassword:"",
            loggedIn: false
    }

    this.changeLogPass= this.changeLogPass.bind(this);
    this.onLogIn = this.onLogIn.bind(this);
    this.changeLogInName = this.changeLogInName.bind(this);
    this.navigates= this.navigates.bind(this);
    }

    changeLogInName(e){
        this.setState({dealername: e.target.value});
    }

      changeLogPass(e){
        this.setState({dealerpassword: e.target.value});
    }

    onLogIn(){
        let logindetail = {  farmername:this.state.dealername,
            farmerpassword:this.state.dealerpassword};

            axios.post("http://localhost:8081/farmer/auth",logindetail)



            .then(response=> {console.log(response)
                if(response.status!=200)
                return(Promise.reject(response))
                return(response)})
              .then(response=>{
                  alert("You're loggedIn  Successfully")
                  this.setState({loggedIn: true}); 
                  this.navigates()
              })
              .catch(err=>{
                  alert("Invalid Username or password..")
                
              });
              
    }   
    navigates(){

      this.props.navigate("/farmer-dash");

  }
    


    render() {
        return (
            <section className="vh-101 gradient-custom">
          <br/>  <br/>  <br/>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div className="card bg-dark text-white" style={{ borderRadius: '1rem' }}>
                <div className="card-body p-5 text-center">

                  <div className="mb-md-5 mt-md-4 pb-5">
                    <h1>Login</h1>

                    {/* <h2 className="fw-bold mb-2 text-uppercase" style={{ color: 'white' }}>Receptionist Login</h2> */}
                    <p className="text-white-50 mb-5" >Please enter your Email and password!</p>

                    <div className="form-outline form-white mb-4">
                      <input
                        type="text"
                        id="form1Example13"
                        className="form-control form-control-lg"
                        placeholder="Enter Your Email"
                        name="dealername"
                        value={this.state.dealername}
                        onChange={this.changeLogInName}
                        // onChange={changeLogInData}
                      />
                      <label className="form-label" for="typeEmailX"></label>
                    </div>

                    <div className="form-outline form-white mb-4">
                      <input
                        type="password"
                         name="dealerPassword"
                        id="form1Example23"
                        className="form-control form-control-lg"
                        placeholder="Enter Your Password"
                        onChange={this.changeLogPass}
                      />
                      <label className="form-label" for="typePasswordX"></label>
                    </div>

                    <button
                      type="submit"
                      className="btn btn-primary btn-lg btn-block"
                      onClick={this.onLogIn}
                      // onSubmit={this.handleSubmit}
                    >
                      Sign in
                    </button>
                    <div className="divider d-flex align-items-center my-4">
                      <p className="mb-5 pb-lg-2 text-white">
                        Don't have an account?{" "}
                        <Link to="/register">Register here</Link>
                      </p>
                    </div>


                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
           
        )
    }
}

 


export default function WithNavigate(props) {
    let navigate = useNavigate();
    return <DealerLogin {...props} navigate={navigate} />
}