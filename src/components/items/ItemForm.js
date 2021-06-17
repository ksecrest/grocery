import { Component } from 'react';
import Item from './Item';

class ItemForm extends Component {
    state = { inv: "", price: "", quantity: "", healthy: true, organic: true, complete: false}
    handleChange = (e) => {
        const { name, value } =  e.target
        this.setState({ [name]: value })

    }
    handleSubmit = (e) => {
        e.preventDefault()
        // function to add the items in state to the list of items
        this.props.addItem(this.state)
        this.setState({ inv: "", price: "", quantity: "", healthy: true, organic: true, complete: false })
        
        
    }
    render() {
        const { inv, price, quantity, healthy, organic } = this.state
        return (
            <form onSubmit={this.handleSubmit} >
                <input
                    name='inv'
                    placeholder="Grocery Item"
                    value={inv}
                    onChange={this.handleChange}

                />

                    <input
                    name='price'
                    type='currency'
                    placeholder="Price"
                    value={price}
                    onChange={this.handleChange}

                />

                    <input
                    name='quantity'
                    type='number'
                    placeholder="Quantity"
                    value={quantity}
                    onChange={this.handleChange}

                />

                    <label for="healthy"> Healthy</label>
                
                    <input
                    type='checkbox'  
                    name='healthy' 
                    defaultChecked={healthy.true}
                    onChange={this.handleChange}
            />
                    <label for="organic"> Organic</label>
                
                    <input
                    type='checkbox'  
                    name='organic' 
                    value={organic.true}
                    onChange={this.handleChange}
            />


                    <br/>
                    <br/>
                <button type='submit'>Add Item</button>
                    <br/>
                    <br/>
            </form>
        )
    }
}

export default ItemForm;