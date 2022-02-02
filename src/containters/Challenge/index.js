import * as React from 'react';
import {View, Text, Image, TouchableOpacity, FlatList} from 'react-native';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';

import styles from './style';

const listArr = [
  {
    image:
      'https://i.pinimg.com/originals/2b/91/8c/2b918c72bec18e23b935a29f48b2a123.jpg',
    name: 'Jasmin Smith',
    thumb: 0,
  },
  {
    image:
      'https://i.pinimg.com/236x/ce/02/c6/ce02c6ca32d8744bed7e25eab4650e29.jpg',
    name: 'Benjamin Cruz',
    thumb: 1,
  },
  {
    image:
      'https://i.pinimg.com/originals/2b/91/8c/2b918c72bec18e23b935a29f48b2a123.jpg',
    name: 'Samantha Sy',
    thumb: 0,
  },
  {
    image:
      'https://i.pinimg.com/236x/ce/02/c6/ce02c6ca32d8744bed7e25eab4650e29.jpg',
    name: 'Merlyn',
    thumb: 1,
  },
  {
    image:
      'https://i.pinimg.com/originals/2b/91/8c/2b918c72bec18e23b935a29f48b2a123.jpg',
    name: 'Curt Florence',
    thumb: 1,
  },
];

function Challenge() {
  function renderItem({item, index}) {
    return (
      <View style={styles.renderItemViewStyle} key={index}>
        <Image style={styles.itemProfileViewStyle} source={{uri: item.image}} />
        <Text style={styles.nameTextStyle}>{item.name}</Text>
        <View
          style={[
            styles.itemThumbViewStyle,
            {
              backgroundColor: item.thumb === 0 ? 'red' : 'green',
            },
          ]}>
          <IconFontAwesome
            name={item.thumb === 0 ? 'thumbs-down' : 'thumbs-up'}
            size={18}
            color="#fff"
          />
        </View>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <View style={styles.headerViewStyle}>
        <Text style={styles.headerTextStyle}>Join Challenge?</Text>
      </View>
      <View style={styles.cardViewStyle}>
        <View style={styles.cardHearderStyle}>
          <Text style={styles.cardHeaderTextStyle}>100km Marathon</Text>
        </View>
        <View style={styles.thumbViewStyle}>
          <TouchableOpacity
            style={[styles.thumbsButtonStyle, {backgroundColor: 'green'}]}>
            <IconFontAwesome name="thumbs-up" size={20} color="#fff" />
            <Text style={styles.countTextStyle}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.thumbsButtonStyle, {backgroundColor: 'red'}]}>
            <IconFontAwesome name="thumbs-down" size={20} color="#fff" />
            <Text style={styles.countTextStyle}>6</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.epicVoteViewStyle}>
          <Text style={styles.epicVoteTextStyle}>
            YOU NEED 1 MORE VOTE TO FOR EPIC {'\n'} TEAM TO JOIN 100KM MARATHON
          </Text>
        </View>
        <View style={styles.seprateStyle} />
        <FlatList
          data={listArr}
          contentContainerStyle={{marginTop: 18.5}}
          renderItem={items => renderItem(items)}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </View>
  );
}
export default Challenge;
