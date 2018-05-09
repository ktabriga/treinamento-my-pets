import React from 'react'
import Label from '../Components/Label'
import {StyleSheet, View} from 'react-native'
import appStyles from '../Theme/AppStyles'
import Input from '../Components/Input'
import Avatar from '../Components/Avatar'

/*
        <View style={{flex: 1, backgroundColor: 'red'}}>
        </View>
        <View style={{flex: 1, backgroundColor: 'green'}}>
        </View>
*/

export default class Playground extends React.Component {

  render() {
    return (
      <View style={appStyles.screen}>
        <Label text='Nome' />
        <Input />
        <Avatar source={require('../Images/Avatar_Alien-128.png')}/>
      </View>
    )
  }
}
