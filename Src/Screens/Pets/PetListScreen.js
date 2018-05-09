import React from 'react'
import {View, Image, StyleSheet} from 'react-native'
import Input from '../../Components/Input'
import PetList from './PetList'
import Icon from 'react-native-vector-icons/MaterialIcons'

export default class PetListScreen extends React.Component {
  static navigationOptions = ({navigation}) => ({
    title: 'Pets',
    headerRight: (
      <Icon
        name='add'
        size={22}
        style={styles.add}
        onPress={() => navigation.navigate('petEditScreen', {savePet: navigation.state.params.savePet})}/>
    )
  })

  state = {
    pets: [],
    search: ''
  }

  handleEdit = pet => {
    this.props.navigation.navigate('petEditScreen', {
      pet,
      savePet: this.savePet
    })
  }

  savePet = newPet => {
    const newPets = this.state.pets
      .filter(pet => pet.id !== newPet.id)
      .concat(newPet)
    this.setState({ pets: newPets })
  }

  componentDidMount() {
    this.props.navigation.setParams({
      savePet: this.savePet
    })
  }

  handleSearch = search => {
    this.setState({ search })
  }

  render() {
    return (
      <View>
        <Input 
          onChangeText={this.handleSearch}
          style={styles.search}
          placeholder='Buscar'/>
        <PetList 
          onPress={this.handleEdit}
          pets={this.state.pets.filter(p => p.name.includes(this.state.search))}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  add: {
    marginRight: 10
  },
  search: {
    margin: 15
  }
})
