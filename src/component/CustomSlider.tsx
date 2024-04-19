import React from 'react';
import { View,Text, TextProps } from 'react-native';
import Slider from '@react-native-community/slider';
import { StyleSheet } from 'react-native';
import { TextStyle } from 'react-native';
import MaskedView from '@react-native-masked-view/masked-view';
import LinearGradient from 'react-native-linear-gradient';

interface SliderProps {
  min: number;
  max: number;
  value: number;
  onValueChange: (value: number) => void;
}
interface GradientTextProps extends TextProps {
  children: React.ReactNode;
  style?: TextStyle;
}
const GradientText: React.FC<GradientTextProps> = ({ children, style, ...rest }) => {
  const gradientColors = ['#FF5733', '#F00030', '#F0006D'];

  return (
    <MaskedView
      maskElement={
        <Text style={style} {...rest}>
          {children}
        </Text>
      }>
      <LinearGradient
        colors={gradientColors}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}>
        <Text style={[style, { opacity: 0 }]} {...rest}>
          {children}
        </Text>
      </LinearGradient>
    </MaskedView>
  );
};


const CustomSlider: React.FC<SliderProps> = ({ min, max, value, onValueChange }) => {
  return (
    <View style={{ width: "100%", }}>
      <Slider
        style={{ width: '100%',marginVertical:10 }}
        minimumValue={min}
        maximumValue={max}
        value={value}
        onValueChange={onValueChange}
        minimumTrackTintColor="#F00030"
        maximumTrackTintColor="#000"
        thumbTintColor="#F03000"
        tapToSeek
        // trackStyle={{ height: 10 }}
        // thumbStyle={{ height: 10, width: 20, backgroundColor: 'transparent' }}
      />
      <View style={styles.commonView}>
        <Text style={styles.minStyle}>AED {min}</Text>
        <GradientText style={styles.gradText}>AED {value}</GradientText>
      </View>

    </View>
  );
};
const styles = StyleSheet.create({
  minStyle:{
    fontWeight:'bold',
    fontSize:18
  },

  gradText:{ 
    fontWeight: 'bold', 
    fontSize: 18, 
    marginVertical: 2
   },
   commonView:{
    justifyContent:'space-between',
    flexDirection:'row'
  }
})

export default CustomSlider;