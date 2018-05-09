import React from 'react'
import {Image, StyleSheet, View} from 'react-native'
import Colors from '../Theme/Colors'

export default class Input extends React.Component {

  render() {
    if (!this.props.source) {
      return <View style={[styles.avatar, {backgroundColor: Colors.greyLight}]} />
    }
    return (
      <Image 
        source={this.props.source}
        style={styles.avatar}/>
    )
  }
}

const styles = StyleSheet.create({
  avatar: {
    height: 80,
    width: 80,
    borderRadius: 40,
  }
})
