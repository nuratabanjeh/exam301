import React, { Component } from 'react'
import axios from 'axios';
import Item from './Item'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
export class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allData: [],
        }
    }
    componentDidMount = async () => {
        // const server = 'http://localhost:3001';
        const server = 'https://exam301backendnura.herokuapp.com/';
        const allData = await axios.get(`${server}/all`)
        console.log("🚀 ~ file: Home.js ~ line 8 ~ Home ~ componentDidMount= ~ allData", allData.data)
        this.setState({
            allData: allData.data
        })

    }
    addfav = async (idx) => {
        // const server = 'http://localhost:3001';
        const server = 'https://exam301backendnura.herokuapp.com/';
        const obj = {
            strDrink: this.state.allData[idx].strDrink,
            strDrinkThumb: this.state.allData[idx].strDrinkThumb,
        }
        console.log("🚀 ~ file: Home.js ~ line 28 ~ Home ~ addfav=async ~ obj", obj);
        await axios.post(`${server}/addToFav`, obj)
    }
    render() {
        return (
            <>
                <Row xs={1} md={3} className="g-4">
                    {this.state.allData.map((item, idx) => (
                        <Col>
                            <Item
                                key={idx}
                                item={item}
                                addfav={this.addfav}
                                idx={idx}
                            />
                        </Col>
                    )
                    )
                    }
                </Row>
            </>
        )
    }
}

export default Home
