import React from 'react'
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native'
import Avatar from '../../Components/Avatar'
import PetList from './PetList'


export default class PetListItem extends React.Component {
  render() {
    const {pet, especie, onPress} = this.props
    return (
      <TouchableOpacity 
        onPress={onPress}
        style={styles.item}>
        <Avatar source={especie.avatar} />
        <View style={styles.dados}>
          <Text style={styles.itemNome}>{pet.name}</Text>
          <Text>{especie.name}</Text>
        </View>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    padding: 10
  },
  itemNome: {
    fontWeight: 'bold',
    fontSize: 16
  },
  dados: {
    marginLeft: 10,
    justifyContent: 'center'
  }
})
