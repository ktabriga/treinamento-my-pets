import React from 'react'
import {TouchableOpacity, StyleSheet, Text} from 'react-native'
import Colors from '../Theme/Colors'

export default class Button extends React.Component {

  render() {
    return (
      <TouchableOpacity 
        onPress={this.props.onPress}
        style={styles.button}>
        <Text style={styles.text}>{this.props.title}</Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    height: 40,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primary
  },
  text: {
    fontWeight: 'bold',
    color: 'white'
  }
})
