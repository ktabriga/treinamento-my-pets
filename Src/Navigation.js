import { createStackNavigator } from 'react-navigation'
import PetListScreen from './Screens/Pets/PetListScreen'
import PetEditScreen from './Screens/Pets/PetEditScreen'

export default createStackNavigator({
  petListScreen: {screen: PetListScreen},
  petEditScreen: {screen: PetEditScreen}
}, {
  initialRouteName: 'petListScreen'
})
