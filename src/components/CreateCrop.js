import React, { Component } from 'react'
import { Link, useNavigate, useParams} from 'react-router-dom'
import CropService from '../services/CropService';

class CreateCrop extends Component {
    constructor(props) {
        super(props)
        this.state={
            cropid:'',
            cropname: '',
            cropquantity: '',
            cropaddress: '',
            croptype: '',
            cropImg: '',
            cropmincost: ''
        }
        this.changecropidHandler=this.changecropidHandler.bind(this);
        this.changecropnameHandler=this.changecropnameHandler.bind(this);
        this.changecropquantityHandler=this.changecropquantityHandler.bind(this);
        this.changecropaddressHandler=this.changecropaddressHandler.bind(this);
        this.changecroptypeHandler=this.changecroptypeHandler.bind(this);
        this.changecropmincostHandler=this.changecropmincostHandler.bind(this);
        this.addCrop=this.addCrop.bind(this);
        this.changecropImgHandler=this.changecropImgHandler.bind(this);
    }
    addCrop = (c)=> {
        c.preventDefault();
        const formData = new FormData();
        formData.append('cropid', this.state.cropid);
        formData.append('cropname', this.state.cropname);
        formData.append('cropquantity', this.state.cropquantity);
        formData.append('cropaddress', this.state.cropaddress);
        formData.append('croptype', this.state.croptype);
        formData.append('cropImg', this.state.cropImg);
        formData.append('cropmincost', this.state.cropmincost);

        CropService.addCrops(formData).then(res =>{
            this.props.navigate("/crops")
        })

    }
    changecropImgHandler=(event) =>{
        this.setState({cropImg: event.target.files[0]});
        console.log(this.state.cropImg.data);
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
        return (
            <div>
                <div className = "container">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        <h3 className="text-center">Add Crop</h3>
                        <div className="card-body">
                            <form>

                            <div className = "form-group">
                                        <label> Crop Image: </label>
                                         
                                        <input type="file" className="form-control" name="file" onChange={this.changecropImgHandler}/>
                                    </div>
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
                                    value={this.state.cropmincost} onChange={this.changecropmincostHandler}/>
                                </div>
                                <button className="btn btn-success" onClick={this.addCrop}>Add</button>
                                <Link to={'/crops'}> <button className="btn btn-danger" style={{marginLeft: "10px"}}>Cancel</button></Link>
                                
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
    return <CreateCrop {...props} navigate={navigate} />
}
