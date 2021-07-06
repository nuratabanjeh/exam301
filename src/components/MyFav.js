import axios from 'axios';
import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import UpdateForm from './UpdateForm'
export class MyFav extends Component {
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
        // const server = 'http://localhost:3001';
        const server = 'https://exam301backendnura.herokuapp.com';
        const favData = await axios.get(`${server}/getFav`);
        // console.log("🚀 ~ file: MyFav.js ~ line 8 ~ MyFav ~ componentDidMount=async ~ favData", favData.data)
        this.setState({
            favArray: favData.data
        })
    }
    delete = async (id) => {
        // console.log("🚀 ~ file: MyFav.js ~ line 23 ~ MyFav ~ delete ~ id", id)
        // const server = 'http://localhost:3001';
        const server = 'https://exam301backendnura.herokuapp.com';

        const newArray = await axios.delete(`${server}/deleteFav?id=${id}`);
        console.log("🚀 ~ file: MyFav.js ~ line 27 ~ MyFav ~ delete ~ newArray", newArray)

        this.setState({
            favArray: newArray.data
        })
    }
    showUpdateForm = (idx) => {
        // console.log("🚀 ~ file: MyFav.js ~ line 38 ~ MyFav ~ idx", idx)
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
        console.log("🚀 ~ file: MyFav.js ~ line 55 ~ MyFav ~ updateData=async ~ e", e.target)
        const obj = {
            strDrink: e.target.strDrink.value,
            strDrinkThumb: e.target.strDrinkThumb.value,
            idDrink: this.state.favArray[this.state.index]['_id']
        }
        // const server = 'http://localhost:3001';
        const server = 'https://exam301backendnura.herokuapp.com';
        console.log("🚀 ~ file: MyFav.js ~ line 69 ~ MyFav ~ updateData= ~ obj", this.state.favArray)
        console.log("🚀 ~ file: MyFav.js ~ line 69 ~ MyFav ~ updateData= ~ obj", this.state.index)
        const newData = await axios.put(`${server}/updateFav`, obj);
        console.log("🚀 ~ file: MyFav.js ~ line 61 ~ MyFav ~ updateData=async ~ obj", newData.data)
        this.setState({
            favArray: newData.data,
            show: false
        })


    }
    render() {
        return (
            <>
                <Row xs={1} md={3} className="g-4">
                    {this.state.favArray.map((item, idx) => {
                        console.log("🚀 ~ file: MyFav.js ~ line 94 ~ MyFav ~ {this.state.favArray.map ~ item", item)

                        return (
                            <Col key={idx}>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Body>
                                        <Card.Img variant="top" src={item.strDrinkThumb} />
                                        <Card.Title>{item.strDrink}</Card.Title>
                                        <Button variant="primary" onClick={() => this.showUpdateForm(idx)} >Update</Button>
                                        <Button variant="primary" onClick={() => this.delete(item.idDrink)} >Delete</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )
                    })
                    }
                </Row>
                <UpdateForm
                    show={this.state.show}
                    handleClose={this.handleClose}
                    strDrink={this.state.strDrink}
                    strDrinkThumb={this.state.strDrinkThumb}
                    updateData={this.updateData} />
            </>
        )
    }
}

export default MyFav;

