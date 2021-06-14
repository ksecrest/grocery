import { Component } from 'react';

class ItemForm extends Component {
    state = { inv: "", price: "", quantity: "", healthy: true, complete: false}
    handleChange = (e) => {
        const { name, value } =  e.target
        this.setState({ [name]: value })

    }
    handleSubmit = (e) => {
        e.preventDefault()
        // function to add the items in state to the list of items
        this.props.addItem(this.state)
        this.setState({ inv: "", price: "", quantity: "", healthy: true, complete: false })
        
        
    }
    render() {
        const { inv, price, quantity, healthy } = this.state
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
                    value={healthy}
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