import React from 'react';
import Product from "./Product";
import {Products} from  '../db/seed';
import './main.css';

export default class ProductList extends React.Component{
    constructor(){
        super();
        this.state = {
            products: []
        }
    }

    componentDidMount() {
        this.setState({products:Products})
    }

    handleVoteUp = (productId) => {
        const {products} = this.state;
        let cloneProducts = products.map(item =>{
           if(item.id === productId){
              return Object.assign({},item,{
                   votes:item.votes + 1,
               })
           }else {
               return item
           }
        });

        this.setState({products:cloneProducts})
    };

    render() {
        const products = this.state.products.sort((a, b) => (
            b.votes - a.votes
        ));
        const listItems = products.map((item) =>
            <Product
                votes = {item.votes}
                key={'product-' + item.id}
                id ={item.id}
                productImageUrl = {item.productImageUrl}
                title = {item.title}
                url = {item.url}
                submitterAvatarUrl = {item.submitterAvatarUrl}
                onVote={this.handleVoteUp}
            />
        );

        return(
            <>
                <h1>Voting App</h1>
                <div className='items'>
                    {listItems}
                </div>
            </>
        )
    }
}