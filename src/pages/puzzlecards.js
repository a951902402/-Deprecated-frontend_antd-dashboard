import React, { Component } from 'react';
import { Card, Button } from 'antd';
import { connect } from 'dva';

const namespace = 'puzzlecards';

const mapStateToProps = (state) => {
  const cardList = state[namespace].data;
  return {
    cardList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onClickAdd: (newCard) => {
      const action = {
        type: '${namespace}/addNewCard',
        payload: newCard,
      };
      dispatch(action);
    },
  };
};

@connect(mapStateToProps,mapDispatchToProps)
export default class PuzzleCardsPage extends Component {

  /*   addNewCard = () => {
      this.setState(prevState => {
        const prevCardList = prevState.cardList;
        this.counter += 1;
        const card = {
          id: this.counter,
          question: 'Speak Italiano？',
          answer: 'Hey!It\'s me,Mario!',
        };
        return {
          cardList: prevCardList.concat(card),
        };
      });
    } */

  render() {
    return (
      <div>
        {
          this.props.cardList.map(card => {
            return (
              <Card key={card.id}>
                <div>Q: {card.question}</div>
                <div>
                  <strong>A: {card.answer}</strong>
                </div>
              </Card>
            );
          })
        }
        {<div>
          <Button onClick={() => this.props.onClickAdd({
            question: 'Speak Italiano？',
            answer: 'Hey!It\'s me,Mario!',
          })}>Add Card</Button>
        </div>}
      </div>
    );
  }
}