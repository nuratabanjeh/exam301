import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
export class Item extends Component {
    render() {
        return (
            <>
            <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={this.props.item.strDrinkThumb} />
  <Card.Body>
    <Card.Title>{this.props.item.strDrink}</Card.Title>
    
    <Button onClick={()=>this.props.addFav(this.props.idx)} variant="primary">Add To Fav</Button>
  </Card.Body>
</Card>
</>
        )
    }
}

export default Item
