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
  Dimensions,
} from 'react-native';
import {Svg, Rect, Path} from 'react-native-svg';
const AnimatedPath = Animated.createAnimatedComponent(Path);
const AnimatedRect = Animated.createAnimatedComponent(Rect);

{
  /* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,128L48,149.3C96,171,192,213,288,202.7C384,192,480,128,576,122.7C672,117,768,171,864,213.3C960,256,1056,288,1152,266.7C1248,245,1344,171,1392,133.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
   */
}

const App = () => {
  const {width, height} = Dimensions.get('window');
  const anim = useState(new Animated.Value(0))[0];
  const anim2 = useState(new Animated.Value(0))[0];

  /*  For path1 */
  const d1 =
    'M0,96L26.7,122.7C53.3,149,107,203,160,234.7C213.3,267,267,277,320,288C373.3,299,427,309,480,293.3C533.3,277,587,235,640,186.7C693.3,139,747,85,800,58.7C853.3,32,907,32,960,48C1013.3,64,1067,96,1120,90.7C1173.3,85,1227,43,1280,69.3C1333.3,96,1387,192,1413,240L1440,288L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z';
  const d2 =
    'M0,32L26.7,37.3C53.3,43,107,53,160,90.7C213.3,128,267,192,320,192C373.3,192,427,128,480,106.7C533.3,85,587,107,640,122.7C693.3,139,747,149,800,170.7C853.3,192,907,224,960,240C1013.3,256,1067,256,1120,256C1173.3,256,1227,256,1280,234.7C1333.3,213,1387,171,1413,149.3L1440,128L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z';
  const d3 =
    'M0,224L26.7,213.3C53.3,203,107,181,160,154.7C213.3,128,267,96,320,117.3C373.3,139,427,213,480,208C533.3,203,587,117,640,74.7C693.3,32,747,32,800,53.3C853.3,75,907,117,960,149.3C1013.3,181,1067,203,1120,218.7C1173.3,235,1227,245,1280,234.7C1333.3,224,1387,192,1413,176L1440,160L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z';

  /* for path2 */
  const d4 =
    'M0,128L16,138.7C32,149,64,171,96,165.3C128,160,160,128,192,122.7C224,117,256,139,288,133.3C320,128,352,96,384,122.7C416,149,448,235,480,240C512,245,544,171,576,170.7C608,171,640,245,672,272C704,299,736,277,768,240C800,203,832,149,864,106.7C896,64,928,32,960,69.3C992,107,1024,213,1056,234.7C1088,256,1120,192,1152,165.3C1184,139,1216,149,1248,138.7C1280,128,1312,96,1344,122.7C1376,149,1408,235,1424,277.3L1440,320L1440,320L1424,320C1408,320,1376,320,1344,320C1312,320,1280,320,1248,320C1216,320,1184,320,1152,320C1120,320,1088,320,1056,320C1024,320,992,320,960,320C928,320,896,320,864,320C832,320,800,320,768,320C736,320,704,320,672,320C640,320,608,320,576,320C544,320,512,320,480,320C448,320,416,320,384,320C352,320,320,320,288,320C256,320,224,320,192,320C160,320,128,320,96,320C64,320,32,320,16,320L0,320Z';
  const d5 =
    'M0,192L16,202.7C32,213,64,235,96,224C128,213,160,171,192,149.3C224,128,256,128,288,133.3C320,139,352,149,384,160C416,171,448,181,480,197.3C512,213,544,235,576,213.3C608,192,640,128,672,101.3C704,75,736,85,768,90.7C800,96,832,96,864,85.3C896,75,928,53,960,90.7C992,128,1024,224,1056,224C1088,224,1120,128,1152,122.7C1184,117,1216,203,1248,250.7C1280,299,1312,309,1344,277.3C1376,245,1408,171,1424,133.3L1440,96L1440,320L1424,320C1408,320,1376,320,1344,320C1312,320,1280,320,1248,320C1216,320,1184,320,1152,320C1120,320,1088,320,1056,320C1024,320,992,320,960,320C928,320,896,320,864,320C832,320,800,320,768,320C736,320,704,320,672,320C640,320,608,320,576,320C544,320,512,320,480,320C448,320,416,320,384,320C352,320,320,320,288,320C256,320,224,320,192,320C160,320,128,320,96,320C64,320,32,320,16,320L0,320Z';
  const d6 =
    'M0,160L16,144C32,128,64,96,96,69.3C128,43,160,21,192,42.7C224,64,256,128,288,138.7C320,149,352,107,384,80C416,53,448,43,480,37.3C512,32,544,32,576,26.7C608,21,640,11,672,48C704,85,736,171,768,170.7C800,171,832,85,864,69.3C896,53,928,107,960,128C992,149,1024,139,1056,122.7C1088,107,1120,85,1152,85.3C1184,85,1216,107,1248,128C1280,149,1312,171,1344,192C1376,213,1408,235,1424,245.3L1440,256L1440,320L1424,320C1408,320,1376,320,1344,320C1312,320,1280,320,1248,320C1216,320,1184,320,1152,320C1120,320,1088,320,1056,320C1024,320,992,320,960,320C928,320,896,320,864,320C832,320,800,320,768,320C736,320,704,320,672,320C640,320,608,320,576,320C544,320,512,320,480,320C448,320,416,320,384,320C352,320,320,320,288,320C256,320,224,320,192,320C160,320,128,320,96,320C64,320,32,320,16,320L0,320Z';

  const fillOpacity = anim.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });
  const offset = fillOpacity.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 10],
  });
  const strokeOpacity = offset.interpolate({
    inputRange: [0, 10],
    outputRange: [0, 1],
    extrapolateRight: 'clamp',
  });
  const path = anim.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [d1, d2, d3],
  });
  const path2 = anim2.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [d4, d5, d6],
  });
  const fill = strokeOpacity.interpolate({
    inputRange: [0, 1],
    outputRange: ['rgba(26, 26, 255, 0.3)', 'rgba(0, 153, 255, 1.0)'],
  });

  const fill2 = strokeOpacity.interpolate({
    inputRange: [0, 1],
    outputRange: ['rgba(0, 255, 255, 0.3)', 'rgba(0, 153, 255, 1.0)'],
  });

  const water = useState(new Animated.Value(0))[0];
  const opacity = useState(new Animated.Value(0))[0];
  const waterTranslate = water.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -320],
  });
  const oneToFivePx = offset.interpolate({
    inputRange: [0, 10],
    outputRange: ['1px', '5px'],
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

    Animated.timing(anim, {
      toValue: 1,
      duration: 10000,
      useNativeDriver: true,
    }).start();

    Animated.timing(anim2, {
      toValue: 1,
      duration: 10000,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View style={styles.body}>
            {/* <View style={styles.circle}>
              <Animated.View
                style={[
                  styles.water,
                  {transform: [{translateY: waterTranslate}], opacity},
                ]}
              />
            </View> */}

            {/*  <View style={{backgroundColor:'white'}}>

              <Svg>
                <Path d="M0,128L48,149.3C96,171,192,213,288,202.7C384,192,480,128,576,122.7C672,117,768,171,864,213.3C960,256,1056,288,1152,266.7C1248,245,1344,171,1392,133.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" fill="#0099ff"></Path>
              </Svg>
              <Text style={{textAlign: 'center', marginVertical: 20,zIndex:10}}>
                Downloading..
              </Text>
            </View> */}
            {/*  <View
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
            </View> */}
          </View>
          <View style={styles.circle}>
            <Svg
              viewBox="0 0 1440 320"
              width="100%"
              height="100"
              style={{marginBottom: 30}}>
              <AnimatedPath d={path} fill={fill} opacity="0.56" />
              <AnimatedPath d={path2} fill={fill2} opacity="0.78" />
            </Svg>
            <Button onPress={() => translateWaterY()} title="hello word" />
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
    zIndex: 10,
  },
});

export default App;
