import React from 'react'
import {TextInput, StyleSheet} from 'react-native'
import Colors from '../Theme/Colors'

export default class Input extends React.Component {

  render() {
    return (
      <TextInput 
        onChangeText={this.props.onChangeText}
        placeholder={this.props.placeholder}
        value={this.props.value}
        underlineColorAndroid='transparent'
        style={[styles.input, this.props.style]} />
    )
  }
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    padding: 2,
    borderColor: Colors.grey,
    borderBottomWidth: 1,
    marginBottom: 5,
    color: Colors.grey
  }
})
