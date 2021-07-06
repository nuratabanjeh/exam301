import axios from 'axios';
import React, { Component } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import UpdateForm from "./UpdateForm"
export class myFav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            favArray: [],
            show: false,
            index: -1,
            strDrink: '',
            strDrinkThumb: ''
        }
    }
    componentDidMount = async () => {
        const server = 'http://localhost:3001/';
        const favData = await axios.get(`${server}/getFav`);

        favArray: favData.data
    }

    delete = async (id) => {
        const server = 'http://localhost:3001/';
        const newArray = await axios.delete(`${server}/deleteFav?id=${id}`);
        console.log("🚀 ~ file: MyFav.js ~ line 24 ~ myFav ~ delete ~ newArray", newArray)
        this.setState({ favArray: newArray.data })

    }
    showUpdateForm = (idx) => {
        this.setState({
            show: true,
            index: idx,
            strDrink: this.state.favArray[idx].strDrink,
            strDrinkThumb: this.state.favArray[idx].strDrinkThumb,
        })
    }
    handleClose = () => {
        this.setState({
            show: false
        })
    }
    updateData = async (e) => {
        e.preventDefault();
        const obj = {
            strDrink: e.target.strDrink.value,
            strDrinkThumb: e.target.strDrinkThumb.value,
            idDrink: this.state.favArray[this.state.index]['idDrink']
        }
        const server = 'http://localhost:3001/';
        const newData = await axios.put(`${server}/updateFav`, obj);
        this.setState({
            favArray: newData.data,
            show: false
        })
    }
    render() {
        return (
            <>
                <Row xs={2} md={3} lg={6}>

                    {this.state.favArray.map((item, idx) => {

                        <Col>

                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={item.strDrinkThumb} />
                                <Card.Body>
                                    <Card.Title>{item.strDrink}</Card.Title>

                                    <Button onClick={() => this.showUpdateForm(idx)} variant="primary">update</Button>
                                    <Button onClick={() => this.delete(item.idDrink)} variant="primary">delete</Button>

                                </Card.Body>
                            </Card>
                        </Col>


                    })


                    }
                </Row>

                <UpdateForm
                    show={this.state.show}
                    handleClose={this.handleClose}
                    strDrink={this.state.strDrink}
                    strDrinkThumb={this.state.strDrinkThumb}
                    updateData={this.updateData}
                />
            </>
        )
    }
}


export default myFav
