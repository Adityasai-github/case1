import React, { Component } from 'react'
import { Link, useNavigate, useParams} from 'react-router-dom'
import FarmerService from '../services/FarmerService';

class CreateFarmer extends Component {
    constructor(props) {
        super(props)
        this.state={
             
            farmername: '',
            farmerpassword: '',
            farmeraccno: '',
            farmeremail: '',
            rating: 0,
            allRatings:  []    
         }
        // this.changeIDHandler=this.changeIDHandler.bind(this);
        this.changefarmernameHandler=this.changefarmernameHandler.bind(this);
        this.changefarmerpasswordHandler=this.changefarmerpasswordHandler.bind(this);
        this.changefarmeraccnoHandler=this.changefarmeraccnoHandler.bind(this);
        this.changefarmeremailHandler=this.changefarmeremailHandler.bind(this);
        this.changeratingHandler=this.changeratingHandler.bind(this);
        this.changeallRatingsHandler=this.changeallRatingsHandler.bind(this);

        this.addFarmer=this.addFarmer.bind(this);
    }

    addFarmer = (f)=> {
        f.preventDefault();
        let farmer={ farmername: this.state.farmername,
            farmerpassword: this.state.farmerpassword, 
            farmeraccno: this.state.farmeraccno, 
            farmeremail: this.state.farmeremail, 
            rating: this.state.rating, 
            allRatings: this.state.allRatings};
        console.log( JSON.stringify(farmer));

        FarmerService.addFarmers(farmer).then(res =>{
            this.props.navigate("/farmers")
        })

    }

    //  changeIDHandler= (event) =>{
    //     this.setState({id: event.target.value});
    // }
    changefarmernameHandler (event) {
        this.setState({farmername: event.target.value});
    }
    changefarmerpasswordHandler (event) {
        this.setState({farmerpassword: event.target.value});
    }
    changefarmeraccnoHandler (event) {
        this.setState({farmeraccno: event.target.value});
    }
    changefarmeremailHandler (event) {
        this.setState({farmeremail: event.target.value});
    }
    changeratingHandler (event) {
        this.setState({rating: event.target.value});
    }
    changeallRatingsHandler (event) {
        this.setState({allRatings: event.target.value});
    }


    render() {
        return (
            <div>
                <div className = "container">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        <h3 className="text-center">Add Farmer</h3>
                        <div className="card-body">
                            <form>
                                {/* <div className="form-group">
                                    <label>ID : </label>
                                    <input placeholder="ID" name="ID" className="form-control"
                                    value={this.state.id} onChange={this.changeIDHandler}/>
                                </div> */}
                                <div className="form-group">
                                    <label>farmername : </label>
                                    <input placeholder="farmername" name="farmername" className="form-control"
                                    value={this.state.farmername} onChange={this.changefarmernameHandler}/>
                                </div>
                                <div className="form-group">
                                    <label>farmerpassword : </label>
                                    <input placeholder="farmerpassword" name="farmerpassword" className="form-control"
                                    value={this.state.farmerpassword} onChange={this.changefarmerpasswordHandler}/>
                                </div>
                                <div className="form-group">
                                    <label>farmeraccno : </label>
                                    <input placeholder="farmeraccno" name="farmeraccno" className="form-control"
                                    value={this.state.farmeraccno} onChange={this.changefarmeraccnoHandler}/>
                                </div>
                                <div className="form-group">
                                    <label>farmeremail : </label>
                                    <input placeholder="farmeremail" name="farmeremail" className="form-control"
                                    value={this.state.farmeremail} onChange={this.changefarmeremailHandler}/>
                                </div>
                                <div className="form-group">
                                    <label>rating : </label>
                                    <input placeholder="rating" name="rating" className="form-control"
                                    value={this.state.rating} onChange={this.changeratingHandler}/>
                                </div>
                                <div className="form-group">
                                    <label>allRatings : </label>
                                    <input placeholder="allRatings" name="allRatings" className="form-control"
                                    value={this.state.allRatings} onChange={this.changeallRatingsHandler}/>
                                </div>
                                <button className="btn btn-success" onClick={this.addFarmer}>Add</button>
                                <Link to={'/farmers'}> <button className="btn btn-danger" style={{marginLeft: "10px"}}>Cancel</button></Link>
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
    return <CreateFarmer {...props} navigate={navigate} />
}
