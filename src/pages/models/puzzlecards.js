export default {
  namespace: 'puzzlecards',
  state: {
    data: [
      {
        id: 1,
        question: 'Did you hear about the two silk worms in a race?',
        answer: 'It ended in a tie',
      },
      {
        id: 2,
        question: 'What happens to a frog\'s car when it breaks down?',
        answer: 'It gets toad away',
      },
    ],
    counter: 100,
  },
    reducers: {
      addNewCard(state, { payload: newCard }) {
        const nextCounter = state.counter + 1;
        const newCardWithId = { ...newCard, id: nextCounter };
        const nextData = state.data.concat(newCardWithId);
        return {
          data: nextData,
          counter: nextCounter,
        };
      }
    },
  };