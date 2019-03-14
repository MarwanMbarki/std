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

import { Button, Tile, Card  } from 'react-native-elements';



export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container}>
            <View style={styles.container}>
            <Tile
              imageSrc={require('../assets/images/digital-marketing.jpg')}
              title="BRANDING"
              featured
              caption="Some Caption Text"
              />

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



  _handleLearnMorePress = () => {
    WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/guides/development-mode');
  };

  _handleHelpPress = () => {
    WebBrowser.openBrowserAsync(
      'https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes'
    );
  };
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
