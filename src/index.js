import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Challenge, Home, TeamVoting} from './containters';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="home"
          component={Home}
          options={{title: 'Home', ...style}}
        />
        <Stack.Screen
          name="challenge"
          component={Challenge}
          options={{title: 'Join Challenge?', ...style}}
        />
        <Stack.Screen
          name="team"
          component={TeamVoting}
          options={{title: 'Team Voting', ...style}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const style = {
  headerStyle: {
    backgroundColor: '#fff',
  },
  headerTintColor: '#000000',
  headerTitleStyle: {
    fontWeight: '500',
    fontSize: 16,
  },
};

export default App;
