import React, { Component } from "react"
import { withItem } from "../context/ItemProvider.js"



class ShopPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            category: "",
            price: "",
            imgUrl: ""

        }
    }
    componentDidMount() {
        this.props.getApparel()

    }

    addToCart = item => {

        let cart = JSON.parse(localStorage.getItem("cart")) || []
        cart.push(item)
        localStorage.setItem("cart", JSON.stringify(cart))
    }

    render() {
        const { apparel } = this.props
        const mappedApparel = apparel.map(item => {
            return (

                <section className="ApparelContainer">
                    <div className="container" key={item._id}>
                        <h1 className="ApparelName"> {item.name}</h1>
                        <img className="imgApparel" src={item.imgUrl} alt={`${item.name}`} />
                        <h2 className="ApparelPrice">{item.price}</h2>
                        <button onClick={() => this.addToCart(item)}>Add To Cart</button>
                      
                    </div>
                </section>

            )
        })
        return (
            <div>
                {mappedApparel}
            </div>
        )
    }
}

export default withItem(ShopPage)