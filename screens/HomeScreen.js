import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';

import { Button, Tile, Card, Header, Text, Icon, SearchBar  } from 'react-native-elements';




export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  state = {
    search: '',
  };

  updateSearch = search => {
    this.setState({ search });
  };

  render() {
    const { search } = this.state;

    return (
      <View style={styles.container}>
      <View>
        <Header
          leftComponent={{ icon: 'menu', color: '#fff' }}
          centerComponent={{ text: 'AuToBus', style: { color: '#fff' } }}
          rightComponent={{ icon: 'home', color: '#fff' }}
          containerStyle={{
            backgroundColor: '#000000',
            justifyContent: 'space-around',
          }}
        />

      </View>

        <ScrollView style={styles.container}>
        <View>
        <SearchBar
          placeholder="Type Here..."
          onChangeText={this.updateSearch}
          value={search}
        />
        </View>
            <View>
              <Tile
                imageSrc={require('../assets/images/digital-marketing.jpg')}
                title="BRANDING"
                featured
                caption= {<Text style={{color: '#ffffff'}}>Short test description to go here</Text>}
                >

                </Tile>

            </View>

            <View>
            <Tile
              imageSrc={require('../assets/images/social-marketing.jpg')}
              title="DIGITAL MARKETING"
              featured
              caption="Some Caption Text"
              />
            </View>

            <View>
            <Tile
              imageSrc={require('../assets/images/coding.jpg')}
              title="CODING"
              featured
              caption="Some Caption Text"
              />
            </View>



        </ScrollView>

      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000'
  },

  welcomeImage: {
    width: 200,
    height: 100,
    resizeMode: 'contain',
    paddingTop:250,
    marginTop:200,
    marginLeft: 100
    }
});
