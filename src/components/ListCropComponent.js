import React, { Component } from 'react'
import CropService from '../services/CropService'
import { Link, useNavigate } from 'react-router-dom';
import { Card, Col, Container, Row } from 'react-bootstrap';
import Button from '@material-ui/core/Button'; 
class ListCropComponent extends Component {
    constructor(props){
        super(props)
        this.state= {
            crops: []
        }
        this.deleteCrop=this.deleteCrop.bind(this);
        this.editCrop = this.editCrop.bind(this);
    }
    editCrop(cropid){
        this.props.navigate(`/updatecrop/${cropid}`)
    }
    deleteCrop(cropid){
        CropService.deleteCrop(cropid).then(res =>{
            this.setState({crops: this.state.crops.filter(crop =>crop.cropid !==cropid)});
        })
    }

    sortCrops(type){
        if(type==="fruit" || type==="vegetable"){
            this.setState({crops: this.state.crops.filter(crop => crop.croptype=== type)});
        } else if(type=== "all"){
            this.setState({crops: this.state.crops});
        }
        }
    

    componentDidMount(){
        CropService.getcrops().then((res) => {
            this.setState({ crops: res.data.cropList});
            console.log(res.data);
        });
    }



    render() {
        return (
            <div>
                <h1 style={{margin:'70px'}}>Crops </h1>
                 <Container style={{margin:'70px 0 0 0'}}>
  <Row>
      <Col xs={2} > Vegetables&Fruits</Col>
      <Col>
      <Row>
       
  {this.state.crops.map(crop => 
    <Col key={crop.id}> <Card style={{ width: '12rem' }}>
    <Card.Body style={{height:'8rem'}} className='d-flex align-items-center overflow-hidden'>
  <Card.Img   className='box w-100'   src={'data:image/png;base64,'+ crop.cropImg.data} />
  </Card.Body>
  <Card.Body>
    <Card.Title>{crop.cropname}</Card.Title>
    <Card.Text>
    Address:{crop.cropaddress}<br/>
    quantity:{crop.cropquantity}<br/>
    type:{crop.croptype}<br/>
    mincost:{crop.cropmincost}

    </Card.Text>
    
  </Card.Body>
</Card></Col>
     )   }
     
     </Row></Col></Row>
   
</Container>

<button onClick={() =>this.sortCrops("fruit")} className="btn btn-info">Fruits </button>
<button onClick={() =>this.sortCrops("vegetable")} className="btn btn-info">Vegetables </button>
<button onClick={() =>this.sortCrops("all")} className="btn btn-info">All </button>
                <h2 className="text-center">Crops List</h2>
                <div className="row">
                    <table className="table table-stripped table-bordered">
                        <thead>
                            <tr>
                                
                                <th>cropname</th>
                                <th>cropquantity</th>
                                <th>cropaddress</th>
                                <th>croptype</th>
                                <th>cropmincost</th>
                                <th>image</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.crops.map(
                                    crop =>
                                    <tr key = {crop.cropid}>
                                        <td> {crop.cropname}</td>
                                        <td> {crop.cropquantity}</td>
                                        <td> {crop.cropaddress}</td>
                                        <td> {crop.croptype}</td>
                                        <td> {crop.cropmincost}</td>
                                        <td> <img style={{width: 100, height: 100}}  src= {'data:image/png;base64,'+ crop.cropImg.data}/></td>
                                        <td>
                                            <button onClick={ () =>this.editCrop(crop.cropid)} className="btn btn-info">BUY</button>
                                            <button style={ {marginLeft: "10px"}} onClick={ () => this.deleteCrop(crop.cropid)} className="btn btn-danger">Delete</button>
                                        </td>
                                    </tr>

                                )


                            }
                            
                        </tbody>
                    </table>
                    <Link to="/add-crop"> <button className='btn btn-primary'>Add Crop</button></Link>
                </div>
                
            </div>
        )
    }
}
export default function WithNavigate(props) {
    let navigate = useNavigate();
    return <ListCropComponent {...props} navigate={navigate} />
}