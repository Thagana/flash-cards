import axios from 'axios';

export const postCard = (card) => {
		return axios.post('/', {
			title: card.title,
			cardFront: card.front,
			cardBack: card.back
		}).then((reposnse) => {
			console.log(reposnse);
		}).catch((error) => {
			console.error(error);
		})
	}