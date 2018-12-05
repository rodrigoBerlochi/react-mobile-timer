import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Counter from './components/Counter';



export default class App extends React.Component {

  constructor () {
    super();

    this.longCycle = 25 * 60;

    this.shortCycle = 5 * 60;

    this.state = {
      count: this.longCycle,
      isLongCycle: true
    }

  }

  countDown () {
    this.countDownInterval = setInterval(() => {

      this.setState(
        (prevState) => {
          let nextTime = --prevState.count;

          nextTime = nextTime === 0 ? this.shortCycle : nextTime;
          
          const nextCycle = (nextTime === 0) ? !prevState.isLongCycle : prevState.isLongCycle;

          return { count:  nextTime, isLongCycle: nextCycle }
        }
      );
    }, 1000);
  }

  parseTime = (seconds) => {
    const _minutes = Math.floor(seconds / 60).toString().padStart(2, '0');
    const _seconds = (seconds % 60).toString().padStart(2, '0');
    return `${_minutes}:${_seconds}`;
  }

  componentDidMount () {
    this.countDown();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>{this.state.isLongCycle ? 'It\'s work time!' : 'Let\'s rest...'}</Text>
        <Counter count={this.parseTime(this.state.count)} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#42c2f4',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
