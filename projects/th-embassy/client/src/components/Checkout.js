import React, { Component } from "react"
// import withItem from "../context/ItemProvider";

class Checkout extends Component {
    constructor() {
        super()
        this.state = {

        }
    }

    getCart = () => {
        console.log(JSON.parse(localStorage.getItem("cart")))
        if(JSON.parse(localStorage.getItem("cart")) === [])
            return JSON.parse(localStorage.getItem("cart"))
        else
            return []
    }

    clearCart = () => {
        localStorage.clear();
        alert("Your order has been placed")
        this.props.history.push("/")

    }

    render() {
        return (
            <div>
                Checkout
                <div>
                        <h2>Your Order:</h2>                       
                        {
                        
                            this.getCart().map(item => {
                            return (
                                <div key={item._id + "fhjfk"}>
                                    <h2>{item.name}</h2>
                                    <img className="imgApparel" src={item.imgUrl} alt={`${item.name}`} />
                                    <h2 className="ApparelPrice">{item.price}</h2>
                                </div>
                                
                            )
                            })
                        }
                        <button onClick={this.clearCart } >Checkout</button>
                </div>
            </div>
        )
    }
}

export default Checkout