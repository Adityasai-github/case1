import React, { Component } from 'react'
import { Link, useNavigate, useParams} from 'react-router-dom'
import FarmerService from '../services/FarmerService';

class UpdateFarmer extends Component {
    constructor(props) {
        super(props)
        this.state={
            id: this.props.id,
            farmername: '',
            farmerpassword: '',
            farmeraccno: '',
            farmeremail: '',
            rating: '',
            allRatings: ''
        }
        this.changeidHandler=this.changeidHandler.bind(this);
        this.changefarmernameHandler=this.changefarmernameHandler.bind(this);
        this.changefarmerpasswordHandler=this.changefarmerpasswordHandler.bind(this);
        this.changefarmeraccnoHandler=this.changefarmeraccnoHandler.bind(this);
        this.changeratingHandler=this.changeratingHandler.bind(this);
        this.changeallRatingsHandler=this.changeallRatingsHandler.bind(this);
    }
    componentDidMount(){
        FarmerService.getFarmerById(this.state.id).then(res =>{
                let farmer = res.data;
                console.log(farmer);
                this.setState({
                    id: farmer.id,
                    farmername: farmer.farmername,
                    farmerpassword: farmer.farmerpassword,
                    farmeraccno: farmer.farmeraccno,
                    farmeremail: farmer.farmeremail,
                    rating: farmer.rating,
                    allRatings: farmer.allRatings

                    

                    
                }
                 
                )

        })
    }





    addFarmer = (f)=> {
        f.preventDefault();
        let farmer={id: this.state.id, farmername: this.state.farmername,farmerpassword: this.state.farmerpassword, farmeraccno: this.state.farmeraccno, farmeremail: this.state.farmeremail, rating: this.state.rating, allRatings: this.state.allRatings};
        console.log( JSON.stringify(farmer));

        FarmerService.addFarmers(farmer).then(res =>{
            this.props.navigate("/farmers")
        })

    }

     changeidHandler= (event) =>{
        this.setState({id: event.target.value});
    }
    changefarmernameHandler= (event) =>{
        this.setState({farmername: event.target.value});
    }
    changefarmerpasswordHandler= (event) =>{
        this.setState({farmerpassword: event.target.value});
    }
    changefarmeraccnoHandler= (event) =>{
        this.setState({farmeraccno: event.target.value});
    }
    changefarmeremailHandler= (event) =>{
        this.setState({farmeremail: event.target.value});
    }
    changeratingHandler= (event) =>{
        this.setState({rating: event.target.value});
    }
    changeallRatingsHandler= (event) =>{
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
                                <div className="form-group">
                                    <label>id : </label>
                                    <input placeholder="ID" name="ID" className="form-control"
                                    value={this.state.id} onChange={this.changeidHandler}/>
                                </div>
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
    let{id} = useParams();
    return <UpdateFarmer {...props} navigate={navigate} id = {id} />
}