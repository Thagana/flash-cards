import React, { Component } from 'react';
import Card from './Card';

class CardSingle extends Component {


    constructor(props) {
        super(props);
                this.state = {
                	isLoading : false,
                	showFront: true,
                	cards: [
        				{	id: 1,
        					title: 'History',
        					cardFront: 'Who is the first black president of south africa',
        					cardBack: 'Nelson Mandel',
        					date: '2019/09/28',
        					rating: 5,
        					opened: true,
        					isEdited: true,
        					dateEdited: '2019/09/28',
        					author: 'Samuel Mothwa'
        				},
        				{	id: 2,
        					title: 'History',
        					cardFront: 'When was Sharpvile Marsecar',
        					cardBack: '1978',
        					date: '2019/09/28',
        					rating: 2.3,
        					opened: false,
        					isEdited: false,
        					dateEdited: 'null',
        					author: 'Samuel Mothwa'
        				},
        				{	id: 3,
        					title: 'Biology',
        					cardFront: 'What is the respiretory system?',
        					cardBack: 'The part responsible for breathing',
        					date: '2019/09/28',
        					rating: 3.3,
        					opened: true,
        					isEdited: false,
        					dateEdited: 'null',
        					author: 'Samuel Mothwa'
        				}
                	],
                	currentCard: {}
                }
    }

    componentWillMount() {
    	const currentCards = this.state.cards;

    	this.setState({
    		cards: currentCards,
    		currentCard : this.getRandonCard(currentCards)
    	})
    }

    getRandonCard(currentCards){
    	let card = currentCards[ Math.floor(Math.random() * currentCards.length) ]
    	return card;
    }

    changeCard(){
    	const currentCards = this.state.cards;
    	this.setState({
    		currentCard: this.getRandonCard(currentCards)
    	})
    }

    revealCard(){
    	this.setState({ showFront : false })
    }

    render() {
        return (
            <div className="container" style={{ padding: '10px' }}>
            	<Card  title={this.state.currentCard.title}
            			date={this.state.currentCard.date}
            			showFront={this.state.showFront}
            			cardFront={this.state.currentCard.cardFront}
            			cardBack={this.state.currentCard.cardBack}
            		 />
            	<div className="container change-button has-text-centered" style={{ padding: '10px' }}>
	        		 <button className="button is-primary is-outlined" onClick={this.revealCard.bind(this)}>Chnage</button>
            	</div>
        		 <div className="container change-button has-text-centered" style={{ padding: '10px' }}>
	        		 <button className="button is-primary is-outlined" onClick={this.changeCard.bind(this)}>Chnage</button>
        		 </div>
            </div>
        );
    }
}

export default CardSingle;
