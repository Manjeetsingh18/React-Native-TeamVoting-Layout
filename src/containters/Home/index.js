import * as React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './style';

function Home(props) {
  function onPressChallenge() {
    props.navigation.navigate('challenge');
  }
  function onPressTeamVoting() {
    props.navigation.navigate('team');
  }
  return (
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        <TouchableOpacity
          style={styles.bottonStyle}
          onPress={() => onPressChallenge()}>
          <Text style={styles.textStyle}>Challenge</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.bottonStyle}
          onPress={() => onPressTeamVoting()}>
          <Text style={styles.textStyle}>Team Voting</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
export default Home;
