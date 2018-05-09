import React from 'react'
import {Text, StyleSheet} from 'react-native'
import Colors from '../Theme/Colors'

export default class Label extends React.Component {

  render() {
    const text = this.props.text.toUpperCase()
    return (
      <Text style={styles.label}>{text}</Text>
    )
  }
} 

const styles = StyleSheet.create({
  label: {
    color: Colors.grey,
    fontWeight: 'bold',
    fontSize: 10
  }
})
