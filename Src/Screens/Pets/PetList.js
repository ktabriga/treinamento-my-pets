import React from 'react'
import {FlatList} from 'react-native'
import PetListItem from './PetListItem'
import {findEspecie} from '../../Data/especies'

export default class AnimalList extends React.Component {

  render() {
    const pets = this.props.pets
    return (
      <FlatList 
        data={pets}
        keyExtractor={pet => String(pet.id)}
        renderItem={(options) => (
          <PetListItem
            onPress={() => this.props.onPress(options.item)}
            pet={options.item}
            especie={findEspecie(options.item.especieId)}/>
        )}
      />
    )
  }
}

