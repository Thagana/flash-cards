import React from 'react';
import Card from './Card';
import { getAllCards } from './functions/getAllcards';
import { Redirect } from 'react-router-dom';

class Component extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
        	isLoading : false,
        	data: [
				{
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
				{
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
				{
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
        	]
        }

    }

    componentDidMount() {
		getAllCards()
				.then((response) => {
					// console.log(response);
					if(response.data.message === "Access Denied"){
						this.props.push(`/login`);
					}
				})
				.catch(error => console.log(error));
    }
    render() {
    	const { data, isLoading } = this.state;
        return (
            <div>
            {  
            	!isLoading ? (
            		data.map((card,i) => {
            			return (
            			 <div key={i} className="container" style={{ 'padding': '10px' }}>
            			 	<Card title={card.title} date={card.date} cardFront={card.cardFront} />
						 </div> );
            		})
            	)
            	: 'Loading ...'
            }
            </div>
        );
    }
}

export default Component;
