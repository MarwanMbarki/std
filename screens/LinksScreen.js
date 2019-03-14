import React from 'react';
import { ScrollView, StyleSheet, View, Image, WebView } from 'react-native';
import { ExpoLinksView } from '@expo/samples';

import { Button, Tile, Card, ListItem, Icon, Divider, Switch, Text, Tooltip } from 'react-native-elements';

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Service',
  };



  render() {

    const list = [
    {
      id:1,
      name: 'Amy Farha',
      avatar_url: 'https://randomuser.me/api/portraits/men/41.jpg',
      subtitle: 'Vice President'
    },
    {
      id:2,
      name: 'Chris Jackson',
      avatar_url: 'https://randomuser.me/api/portraits/women/42.jpg',
      subtitle: 'Vice Chairman'
    },
    {
      id:3,
      name: 'Amy Farha',
      avatar_url: 'https://randomuser.me/api/portraits/men/31.jpg',
      subtitle: 'Vice President'
    },
    {
      id:4,
      name: 'Chris Jackson',
      avatar_url: 'https://randomuser.me/api/portraits/men/21.jpg',
      subtitle: 'Vice Chairman'
    },
    {
      id:5,
      name: 'Amy Farha',
      avatar_url: 'https://randomuser.me/api/portraits/women/54.jpg',
      subtitle: 'Vice President'
    },
    {
      id:6,
      name: 'Chris Jackson',
      avatar_url: 'https://randomuser.me/api/portraits/men/55.jpg',
      subtitle: 'Vice Chairman'
    },
    {
      id:7,
      name: 'Amy Farha',
      avatar_url: 'https://randomuser.me/api/portraits/women/11.jpg',
      subtitle: 'Vice President'
    },
    {
      id:8,
      name: 'Chris Jackson',
      avatar_url: 'https://randomuser.me/api/portraits/women/23.jpg',
      subtitle: 'Vice Chairman'
    },
    {
      id:9,
      name: 'Amy Farha',
      avatar_url: 'https://randomuser.me/api/portraits/women/71.jpg',
      subtitle: 'Vice President'
    },
    {
      id:10,
      name: 'Chris Jackson',
      avatar_url: 'https://randomuser.me/api/portraits/men/63.jpg',
      subtitle: 'Vice Chairman'
    },
    {
      id:11,
      name: 'Amy Farha',
      avatar_url: 'https://randomuser.me/api/portraits/men/36.jpg',
      subtitle: 'Vice President'

    },
    {
      id:12,
      name: 'Chris Jackson',
      avatar_url: 'https://randomuser.me/api/portraits/women/19.jpg',
      subtitle: 'Vice Chairman'
    },
    {
      id:13,
      name: 'Amy Farha',
      avatar_url: 'https://randomuser.me/api/portraits/women/9.jpg',
      subtitle: 'Vice President'
    },
    {
      id:14,
      name: 'Chris Jackson',
      avatar_url: 'https://randomuser.me/api/portraits/men/41.jpg',
      subtitle: 'Vice Chairman'
    },
  ]
    return (
      <View style={styles.container}>


        <ScrollView style={styles.container}>
            <View>
            {
                list.map((l, i) => (
                  <ListItem
                  
                    key={i}
                    leftAvatar={{ source: { uri: l.avatar_url } }}
                    title={l.name}
                    subtitle={l.subtitle}
                    rightIcon={
                      <Icon name='ios-checkmark-circle-outline'
                            type='ionicon'
                            color='#359205'
                            />
                    }



                  />


                ))
              }
            </View>


        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({

  containerContent: {
    flex: 1,
    backgroundColor: '#000',
    height: 200,
    resizeMode: 'contain',
    borderBottomColor: '#fff',
    borderBottomWidth: 1
  },
  container: {
    flex: 1,
    backgroundColor: '#000'
  }
});
