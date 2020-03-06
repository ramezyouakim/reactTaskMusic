
/** Main Route Of The App */

//Imports
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

//Screens
import HomeScreen from '../screens/home';
import PlaylistArtistsScreen from '../screens/playlistArtists'

//Main Stack Navigator
const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
  PlaylistArtistsScreen: {
    screen: PlaylistArtistsScreen,
    navigationOptions :{
      title: 'Artists',
    }
  }
});

export default createAppContainer(AppNavigator);