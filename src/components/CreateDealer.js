import React, { Component } from 'react'
import { Link, useNavigate, useParams} from 'react-router-dom'
import DealerService from '../services/DealerService';
class CreateDealer extends Component {
    constructor(props) {
        super(props)
        this.state={
             
          dealerid: '',
           dealername:'',
           dealerpassword: '',
            dealeraccno: '' 
         }
        // this.changeIDHandler=this.changeIDHandler.bind(this);
        this.changedealeridHandler=this.changedealeridHandler.bind(this);
        this.changedealernameHandler=this.changedealernameHandler.bind(this);
        this.changedealerpasswordHandler=this.changedealerpasswordHandler.bind(this);
        this.changedealeraccnoHandler=this.changedealeraccnoHandler.bind(this);
        this.addDealer=this.addDealer.bind(this);
        
    }

    addDealer = (d)=> {
        d.preventDefault();
        let dealer={ dealerid: this.state.dealerid,
            dealername: this.state.dealername,
            dealerpassword:this.state.dealerpassword,
            dealeraccno: this.state.dealeraccno}; 
            
        console.log( JSON.stringify(dealer));

        DealerService.addDealers(dealer).then(res =>{
            this.props.navigate("/dealers")
        })

    }

    //  changeIDHandler= (event) =>{
    //     this.setState({id: event.target.value});
    // }
    changedealeridHandler (event) {
        this.setState({dealerid: event.target.value});
    }
    changedealernameHandler (event) {
        this.setState({dealername: event.target.value});
    }
    changedealerpasswordHandler (event) {
        this.setState({dealerpassword: event.target.value});
    }
    changedealeraccnoHandler (event) {
        this.setState({dealeraccno: event.target.value});
    }

    render() {
        return (
            <div>
                <div className = "container">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        <h3 className="text-center">Add Dealer</h3>
                        <div className="card-body">
                            <form>
                                {/* <div className="form-group">
                                    <label>ID : </label>
                                    <input placeholder="ID" name="ID" className="form-control"
                                    value={this.state.id} onChange={this.changeIDHandler}/>
                                </div> */}
                                <div className="form-group">
                                    <label>dealerid : </label>
                                    <input placeholder="dealerid" name="dealerid" className="form-control"
                                    value={this.state.dealerid} onChange={this.changedealeridHandler}/>
                                </div>
                                <div className="form-group">
                                    <label>dealername : </label>
                                    <input placeholder="dealername" name="dealername" className="form-control"
                                    value={this.state.dealername} onChange={this.changedealernameHandler}/>
                                </div>
                                <div className="form-group">
                                    <label>dealerpassword : </label>
                                    <input placeholder="dealerpassword" name="dealerpassword" className="form-control"
                                    value={this.state.dealerpassword} onChange={this.changedealerpasswordHandler}/>
                                </div>
                                <div className="form-group">
                                    <label>dealeraccno : </label>
                                    <input placeholder="dealeraccno" name="dealeraccno" className="form-control"
                                    value={this.state.dealeraccno} onChange={this.changedealeraccnoHandler}/>
                                </div>
                                
                                <button className="btn btn-success" onClick={this.addDealer}>Add</button>
                                <Link to={'/dealers'}> <button className="btn btn-danger" style={{marginLeft: "10px"}}>Cancel</button></Link>
                            </form>
                        </div>
                    </div>
                </div>
                
                
                
            </div>
        )
    }
}
export default function WithNavigate(props) {
    let navigate = useNavigate();
    return <CreateDealer {...props} navigate={navigate} />
}
