import React from 'react'
import {View, FlatList, Text, StyleSheet, Animated, Pressable} from 'react-native'
import { Picker } from '@react-native-picker/picker';

const data = [30, 40, 50, 60, 70, 80, 90, 100, 101, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141,];

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
        <Text style = {styles.text}>What is Your Height?</Text>
        <Text style = {styles.text1}>Height in cm. Don’t worry, you can always change it later</Text>
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
    left: 80,
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
  left: 34,
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