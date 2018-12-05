import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Counter from './components/Counter';

/**
 * var totalSec = 25 * 60
undefined
totalSec / 60
25
totalSec % 60
0
totalSec--
1500
totalSec & 60
24
totalSec - (24* 60)
59
 */

export default class App extends React.Component {

  constructor () {
    super();
    this.state = {
      count: 25
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Pomodoro Timer!</Text>
        <Counter count={0} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
