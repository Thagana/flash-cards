import { action } from 'easy-peasy'

export default{
    cards: [],
    setCards: action((state, payload) => {
        state.cards = payload;
    }),
    content: [],
    setContent: action((state, payload) => {
        state.content = payload;
    }),
    modalOpen: false,
    setModalOpen: action((state) => {
        state.modalOpen = true
    }),
    closeModal: action((state) => {
        state.modalOpen = false;
    }),
    deleteCard: action((state, payload) => {
        state.cards = payload;
    })
}