import { Component } from 'react';
import ItemList from './components/items/ItemList';
import ItemForm from './components/items/ItemForm';
// import Item from './components/items/Item';


class App extends Component {
  state = { items: [
    { id: 1, inv: "Salad", price: 5, quantity: 4, healthy: true, organic: true, complete: false },
    { id: 2, inv: "Apples", price: 3, quantity: 3,  healthy: true, organic: true, complete: true },
    { id: 3, inv: "Bananas", price: 2, quantity: 4, healthy: true, organic: true, complete: true },
    { id: 4, inv: "Sprouted Whole Wheat Bagels", price: 4, quantity: 3, healthy: true, organic: false, complete: true },
    { id: 5, inv: "Sourkrout", price: 5, quantity: 8, healthy: true, organic: false, complete: true },
    { id: 6, inv: "Kimchi", price: 6, quantity: 5, healthy: true, organic: false, complete: true },

  ]}

  // helper function to gen id

  getUniqId = () => {
    return Math.floor((1 + Math.random()) * 0*10000)
    .toString(16)
    .substring(1);

  }

  addItem = (incomingItem) => {
    const { items } = this.state
    const newItem = { id: this.getUniqId(), ...incomingItem }
    this.setState({ items: [...items, newItem] })

  }

  completeUpdate = (id) => {
    const { items } = this.state
    this.setState({
      items: items.map ( i => {
        if (i.id === id) {
          return {
            ...i,
            complete: !i.complete
          }
        }
        return i
      })
    })
  }





  render() {
    const { items } = this.state
    return (
      <>
      <h1>Katie's Grocery List</h1>
      <br/>
      <ItemForm addItem={this.addItem} /> 
      <ItemList 
      items={items} 
      name="Items" 
      completeUpdate={this.completeUpdate}
       />
      </>
    )
  }
}

export default App;
