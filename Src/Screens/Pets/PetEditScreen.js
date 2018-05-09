import React from 'react'
import {ScrollView, Text, Image, StyleSheet, View, KeyboardAvoidingView, Picker, TextInput} from 'react-native'
import Avatar from '../../Components/Avatar'
import Button from '../../Components/Button'
import Input from '../../Components/Input'
import Label from '../../Components/Label'
import especies, {findEspecie} from '../../Data/especies'

export default class PetEditScreen extends React.Component {
  static navigationOptions = {
    title: 'Pet'
  }

  state = {
    especieId: null,
    name: '',
  }

  handleSelectEspecie = (id) => {
    this.setState({especieId: id})
  }

  handleNameChange = name => {
    this.setState({name: name})
  }

  savePet = () => {
    this.props.navigation.state.params.savePet({
      id: this.state.id || Date.now(),
      name: this.state.name,
      especieId: this.state.especieId
    })
    this.props.navigation.goBack()
  }

  componentDidMount() {
    if (!this.props.navigation.state.params.pet) {
      return
    }
    const pet = this.props.navigation.state.params.pet
    this.setState({
      id: pet.id,
      name: pet.name,
      especieId: pet.especieId
    })
  }

  getSelectedAvatar = () => {
    if (this.state.especieId) {
      return findEspecie(this.state.especieId).avatar
    }
    return null
  }

  render() {
    return (
      <ScrollView keyboardShouldPersistTaps='handled'>
        <KeyboardAvoidingView 
          enabled
          keyboardVerticalOffset={350}
          behavior='padding'>
          <View style={{flexDirection: 'row', marginHorizontal: 15, marginTop: 15}}>
            <Avatar source={this.getSelectedAvatar()} />
            <View style={{justifyContent: 'center', flex: 1, marginLeft: 15}}>
              <Label text='Nome'/>
              <Input 
                value={this.state.name}
                onChangeText={this.handleNameChange} />
            </View>
          </View>
          <View style={styles.pickerContainer}>
            <Label text='Espécie'/>
            <Picker
              style={styles.picker}
              onValueChange={this.handleSelectEspecie}
              selectedValue={this.state.especieId}>
              <Picker.Item label={'Selecione a espécie'} />
              {
                especies.map(especie => (
                  <Picker.Item key={especie.id} label={especie.name} value={especie.id}/>
                ))
              }
            </Picker>
          </View>
          <View style={{marginHorizontal: 15}}>
            <Button 
              onPress={this.savePet}
              title='Salvar'/>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  screen: {
    padding: 20
  },
  picker: {
    color: 'grey',
  },
  pickerContainer: {
    marginTop: 15,
    marginHorizontal: 15,
    borderColor: 'grey',
    borderBottomWidth: 1,
    marginBottom: 20
  }
})
