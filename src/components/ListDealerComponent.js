import React, { Component } from 'react'
import DealerService from '../services/DealerService';
import { Link, useNavigate } from 'react-router-dom';
import { Card, Col, Container, Row } from 'react-bootstrap';
class ListDealerComponent extends Component {
    constructor(props){
        super(props)
        this.state= {
            dealers: []
        }

    
    }

    componentDidMount(){
        DealerService.getdealers().then((res) => {
            this.setState({ dealers: res.data.dealerList});
            console.log(res.data.dealerList);
        });
    }


    render() {
        return (
            <div>
                
                <h1 style={{margin:'70px'}}>Dealers </h1>
                 <Container style={{margin:'70px 0 0 0'}}></Container>
                <h2 className="text-center"></h2>
                <div className="row">
                    <table className="table table-stripped table-bordered">
                    <thead>
                            <tr>
                               
                            
                              
                                <th>dealername</th>
                                <th>dealerpassword</th>
                                <th>dealeraccno</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.dealers.map(
                                    dealer =>
                                    <tr key = {dealer.dealerid}>
                                        <td> {dealer.dealername}</td>
                                        <td> {dealer.dealerpassword}</td>
                                        <td> {dealer.dealeraccno}</td>
                                       
                                    
                                    </tr>

                                )


                            }
                            
                        </tbody>
                    </table>
                    <Link to="/add-dealer"> <button className='btn btn-primary'>Add dealer</button></Link>
                </div>
                
            </div>
        )
    }
}
export default function WithNavigate(props) {
    let navigate = useNavigate();
    return <ListDealerComponent {...props} navigate={navigate} />
}
                
