import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Animated,
  Button,
  Easing,
} from 'react-native';

const App = () => {
  const water = useState(new Animated.Value(0))[0];
  const opacity = useState(new Animated.Value(0))[0];
  const waterTranslate = water.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -320],
  });

  const translateWaterY = () => {
    Animated.parallel([
      Animated.timing(water, {
        toValue: 1,
        duration: 4000,
        useNativeDriver: true,
        easing: Easing.linear,
      }).start(),
      Animated.timing(opacity, {
        toValue: 1,
        duration: 4000,
        useNativeDriver: true,
        easing: Easing.linear,
      }).start(),
    ]).start();
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View style={styles.body}>
            <View style={styles.circle}>
              <Animated.View
                style={[
                  styles.water,
                  {transform: [{translateY: waterTranslate}], opacity},
                ]}
              />
            </View>

            <View style={{backgroundColor:'white'}}>
              <Text style={{textAlign: 'center', marginVertical: 20,zIndex:10}}>
                Downloading..
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                backgroundColor: 'white',
                zIndex: 10,
              }}>
              <Button
                style={styles.button}
                onPress={() => translateWaterY()}
                title="Start"
              />

              <Button style={styles.button} title="Reset" />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollView: {
    backgroundColor: 'white',
  },
  body: {
    backgroundColor: 'white',
  },
  circle: {
    marginTop: 150,
    width: 300,
    height: 300,
    borderRadius: 300 / 2,
    marginBottom: 30,
    backgroundColor: 'transparent',
  },
  water: {
    width: 300,
    height: 300,
    borderRadius: 300 / 2,
    backgroundColor: 'lightblue',
    zIndex: 0,
    marginTop: 330,
    opacity: 0,
  },
  button: {
    paddingTop: 30,
    zIndex:10
  },
});

export default App;
