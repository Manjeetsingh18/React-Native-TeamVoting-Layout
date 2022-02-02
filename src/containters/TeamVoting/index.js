import * as React from 'react';
import {View, Image, FlatList, Text} from 'react-native';
import {ProgressBar, Colors} from 'react-native-ui-lib';
import styles from './style';

const listArr = [
  {
    action: 'Add',
    follow: '10k',
    image: [
      {
        image:
          'https://i.pinimg.com/originals/2b/91/8c/2b918c72bec18e23b935a29f48b2a123.jpg',
      },
      {
        image:
          'https://i.pinimg.com/originals/2b/91/8c/2b918c72bec18e23b935a29f48b2a123.jpg',
      },
    ],
  },
  {
    action: 'Add',
    follow: '10k',
    image: [
      {
        image:
          'https://i.pinimg.com/originals/2b/91/8c/2b918c72bec18e23b935a29f48b2a123.jpg',
      },
      {
        image:
          'https://i.pinimg.com/originals/2b/91/8c/2b918c72bec18e23b935a29f48b2a123.jpg',
      },
      {
        image:
          'https://i.pinimg.com/originals/2b/91/8c/2b918c72bec18e23b935a29f48b2a123.jpg',
      },
    ],
  },
  {
    action: 'Remove',
    follow: '10k',
    image: [
      {
        image:
          'https://i.pinimg.com/originals/2b/91/8c/2b918c72bec18e23b935a29f48b2a123.jpg',
      },
      {
        image:
          'https://i.pinimg.com/originals/2b/91/8c/2b918c72bec18e23b935a29f48b2a123.jpg',
      },
    ],
  },
];

function TeamVoting() {
  const [progresses, setProgresses] = React.useState(0);

  React.useEffect(() => {
    startProgress(90);
  }, []);

  function startProgress(stepSize) {
    let tempProgresses = Math.min(progresses + stepSize, 100);
    setProgresses(tempProgresses);

    if (progresses < 100) {
      setTimeout(() => {
        startProgress(stepSize);
      }, 800);
    }
  }

  const customElement = param => {
    console.log('param ==>>', param);
    return (
      <View
        style={{
          borderRadius: 4,
          borderWidth: 0.2,
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: Colors.green30,
        }}>
        <Text>{param.action}</Text>
        <Text>{param.follow}</Text>
      </View>
    );
  };

  const renderItem = ({item, index}) => {
    return (
      <View style={{marginVertical: 1.6}} key={index}>
        <ProgressBar
          progress={progresses}
          customElement={customElement(item)}
          style={[styles.progressBar, styles.styledProgressBar]}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerViewStyle}>
        <Text style={styles.headerTextStyle}>Team Voting</Text>
      </View>
      <View style={styles.cardViewStyle}>
        <View style={styles.cardHearderStyle}>
          <Text style={styles.cardHeaderTextStyle}>How was your week?</Text>
        </View>
        <View style={styles.seprateStyle} />
        <FlatList
          data={listArr}
          renderItem={items => renderItem(items)}
          contentContainerStyle={{marginTop: 18.5}}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </View>
  );
}
export default TeamVoting;
