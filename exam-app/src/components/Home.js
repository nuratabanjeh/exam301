import axios from 'axios'
import React, { Component } from 'react'
import Row from 'react-bootstrap/Row'
import Item from './Item'
import Col from 'react-bootstrap/Col'
export class Home extends Component {
    constructor(props){
        super(props);
        this.state={
            allData:[],
        }
    }
    componentDidMount=async()=>{
        const server ='http://localhost:3001/'
        const allData = await axios.get(`${server}/all`)
        console.log("🚀 ~ file: Home.js ~ line 8 ~ Home ~ componentDidMount=async ~ allData", allData.data)
        this.setState({
            allData:allData.data
        })
    }
    addFav = async (idx)
 =>{
    const server ='http://localhost:3001/'
    const obj ={
        strDrink:this.state.allData[idx].strDrink,
        strDrinkThumb:this.state.allData[idx].strDrinkThumb,
    }

 }  
   render() {
        return (
            <Row xs={2} md={3} lg={6}>
           {this.state.allData.map((item,idx)=>{
               <Col>
               <Item
               key={idx}
               item={item}
               addFav={this.addFav}
               idx={idx}/>
               </Col>
           })}
           </Row>
        )
        
    }
}

export default Home
