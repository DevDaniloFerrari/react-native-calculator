import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View
} from 'react-native';
import Button from './src/components/Button';

export default class App extends Component {
  render() {
    return (<>
      <SafeAreaView style={styles.container}>
        <View style={styles.buttons}>
          <Button label='AC'></Button>
          <Button label='/'></Button>
          <Button label='7'></Button>
          <Button label='8'></Button>
          <Button label='9'></Button>
          <Button label='*'></Button>
          <Button label='4'></Button>
          <Button label='5'></Button>
          <Button label='6'></Button>
          <Button label='-'></Button>
          <Button label='1'></Button>
          <Button label='2'></Button>
          <Button label='3'></Button>
          <Button label='+'></Button>
          <Button label='0'></Button>
          <Button label='.'></Button>
          <Button label='='></Button>
        </View>
      </SafeAreaView>
    </>
    );
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  }
})