import React from 'react'
import {View, FlatList, Text, StyleSheet, Animated, Pressable} from 'react-native'

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37,
38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63,,,,,];

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);



export default class AnimatedHeader extends React.Component {
	state = {
		animatedValue: new Animated.Value(0),
	};

	
	_renderItem = ({item}) => {
		return (
			<View style={styles.nonsenseItem}>
				<Text style={styles.itemText}>{item}</Text>
			</View>
		)
	};
	
	render() {
		let translateY = this.state.animatedValue.interpolate({
			inputRange: [0, 180],
			outputRange: [0, -180],
			extrapolate: 'clamp',
		});
		
		return (
			<View style={styles.container}>
        <Text style = {styles.text}>How Old Are You?</Text>
        <Text style = {styles.text1}>Age in years. his will help us to personalize an excrise program plan that suits you.</Text>
          <View style = {styles.containerList} >
            <AnimatedFlatList showsVerticalScrollIndicator={false}
              contentContainerStyle={{marginTop: 200}}
              scrollEventThrottle={200} // <-- Use 1 here to make sure no events are ever missed
              onScroll={Animated.event(
                [{nativeEvent: {contentOffset: {y: this.state.animatedValue}}}],
                {useNativeDriver: true} // <-- Add this
              )}
              data={data}
              renderItem={this._renderItem}
              keyExtractor={(item, i) => i}/>
            <Animated.View style={[styles.headerWrapper, {transform: [{translateY}]}]}/>
          </View>
          <View>
            <Pressable style={styles.button}>
              <Text style={styles.textbtn}>Contineu</Text>
            </Pressable>
          </View>
    </View>
     
		)
	}
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1A5653',
    alignItems: 'center',
    color: '#FFFFFF',
    flex: 1,
},
line:{
  top: 200,
},
containerList:{
  alignItems: 'center',
  width: 100,
  height: 350,
  top: 250,
},
	nonsenseItem: {
		backgroundColor: 'red',
    color: 'white',
		margin: 8,
	},
	itemText: {
		backgroundColor: '#1A5653',
    color: 'gold',
		fontSize: 20,
		padding: 20,
	},
	
  text: {
    position: 'absolute',
    width: 343,
    height: 37,
    left: 90,
    top: 90,

   fontStyle: 'normal',
   fontWeight: 500,
   fontSize: 32,
   display: 'flex',
   color: 'white',

},
text1: {
  position: 'absolute',
  width: 366,
  height: 45,
  left: 30,
  top: 139,

 fontStyle: 'normal',
 fontWeight: 400,
 fontSize: 18,
 textAlign: 'center',
 alignItems: 'center',
 letterSpacing: -0.02,
 display: 'flex',
 color: 'white',

},
button: {
    top: 330,
    width: 343,
    height: 70,
    alignItems: 'center',
    borderRadius: 22,
    backgroundColor: '#E0FE10',
  },
  textbtn: {
    fontSize: 24,
    padding: 17,
    fontWeight: 500,
    color: 'black',
  },
});