import React from 'react';

export default class Product extends React.Component{
    handleUpVote = () => {
        this.props.onVote(this.props.id);
    };

    render() {
        return(
            <div className='item'>
                <div className='productImage'>
                    <img src={this.props.productImageUrl} alt=""/>
                </div>
                <div className='middle content'>
                    <div className='header'>
                        <button onClick={this.handleUpVote} >
                            🔺
                        </button>
                        {this.props.votes}
                    </div>
                    <div className='description'>
                        <a href={this.props.url}>
                            {this.props.title}
                        </a>
                        <p>
                            {this.props.description}
                        </p>
                    </div>
                    <div className='extra'>
                        <span>Submitted by:</span>
                        <img
                            alt = 'avatar'
                            className='avatar'
                            src={this.props.submitterAvatarUrl}
                        />
                    </div>
                </div>
            </div>
        )
    }
}