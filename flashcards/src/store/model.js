import { action } from 'easy-peasy'

export default {
    firstComplete: false,
    hasSecondContent: false,
    savePressed: false,
    handleSaveCard: action(state => {
        state.savePressed = true;
    }),
    content: [],
    setContent: action((state, payload) => {
        state.content = payload;
    }),
    setHasSecondContent: action((state, payload) => {
        state.hasSecondContent = payload;
    }),
    setFirstComplate: action((state) => {
        state.firstComplete = true;
    })
}