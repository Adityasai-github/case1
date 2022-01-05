import React, { Component } from 'react'
import FarmerService from '../services/FarmerService';
import { Link, useNavigate } from 'react-router-dom';
import { Card, Col, Container, Row } from 'react-bootstrap';
class ListFarmerComponent extends Component {
    constructor(props){
        super(props)
        this.state= {
            farmers: []
        }

        this.deleteFarmer=this.deleteFarmer.bind(this);
        this.editFarmer = this.editFarmer.bind(this);
    }
    editFarmer(id){
        this.props.navigate(`/updatefarmer/${id}`)
    }
    deleteFarmer(id){
        FarmerService.deleteFarmer(id).then(res =>{
            this.setState({farmers: this.state.farmers.filter(farmer =>farmer.id !==id)});
        })
    }
    componentDidMount(){
        FarmerService.getfarmers().then((res) => {
            this.setState({ farmers: res.data.farmerList});
            console.log(res.data.farmerList);
        });
    }


    render() {
        return (
            <div>
                
                <h1 style={{margin:'70px'}}>Farmers </h1>
                 <Container style={{margin:'70px 0 0 0'}}></Container>
                <h2 className="text-center"></h2>
                <div className="row">
                    <table className="table table-stripped table-bordered">
                    <thead>
                            <tr>
                               
                            
                                <th>farmername</th>
                                <th>farmerpassword</th>
                                <th>farmeraccno</th>
                                <th>farmeremail</th>
                                <th>rating</th>
                                <th>allRatings</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.farmers.map(
                                    farmer =>
                                    <tr key = {farmer.id}>
                                        <td> {farmer.farmername}</td>
                                        <td> {farmer.farmerpassword}</td>
                                        <td> {farmer.farmeraccno}</td>
                                        <td> {farmer.farmeremail}</td>
                                        <td> {farmer.rating}</td>
                                        <td> {farmer.allRatings} </td>
                                        <td>
                                            <button onClick={ () =>this.editFarmer(farmer.id)} className="btn btn-info">Update</button>
                                            <button style={ {marginLeft: "10px"}} onClick={ () => this.deleteFarmer(farmer.id)} className="btn btn-danger">Delete</button>
                                        </td>
                                    </tr>

                                )


                            }
                            
                        </tbody>
                    </table>
                    <Link to="/add-farmer"> <button className='btn btn-primary'>Add Farmer</button></Link>
                </div>
                
            </div>
        )
    }
}
export default function WithNavigate(props) {
    let navigate = useNavigate();
    return <ListFarmerComponent {...props} navigate={navigate} />
}
                
