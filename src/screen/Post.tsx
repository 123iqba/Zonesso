import MaskedView from '@react-native-masked-view/masked-view';
import React from 'react';
import { View, Text, StyleSheet, Image, TextStyle, TextProps, TouchableOpacity, FlatList } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { black } from 'react-native-paper/lib/typescript/styles/themes/v2/colors';

interface Props {
  navigation: any;
}

interface CarDetailsProps {
  id: string;
  label: string;
  value: string;
}

const carDetails: CarDetailsProps[] = [
  { id: '5', label: 'Trim', value: 'J' },
  { id: '6', label: 'Year', value: '2021' },
  { id: '7', label: 'Kilometers', value: '600' },
  { id: '8', label: 'Regional Specs', value: 'European Specs' },
  { id: '9', label: 'Doors', value: '2 Door' },
  { id: '10', label: 'Posted On', value: 'March 23, 2024' },
  { id: '11', label: 'Body Type', value: 'Sports Car' },
  { id: '12', label: 'Fuel Type', value: 'Petrol' },
  { id: '13', label: 'Seller Type', value: 'Showroom' },
  { id: '14', label: 'Transmission Type', value: 'Automatic Transmission' },
  { id: '15', label: 'Horsepower', value: '700-799 HP' },
  { id: '16', label: 'No. of Cylinders', value: '12' },
  { id: '17', label: 'Warranty', value: 'No' },
  { id: '18', label: 'Exterior Color', value: 'Blue' },
  { id: '19', label: 'Interior Color', value: 'Black' },
  { id: '20', label: 'Target Market', value: 'UAE' },
];

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

const Post: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={{borderTopWidth:3,width:"30%",alignSelf:'center',borderColor:"#F04900",marginTop:1}}>

      </View>
      <View style={styles.container_p1}>
        <View style={styles.container_p2}>
          <GradientText style={styles.gradienttext}>AED 99,000</GradientText>
          <LinearGradient start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }} colors={['#F06100', '#F04900', '#F03000', '#F00030', '#F0006D']} style={styles.linearGradient1}>
            <Text style={styles.location1}>Premium</Text>
          </LinearGradient>
        </View>
        <Text style={styles.LamborghiniText}>Lamborghini Aventador</Text>
      </View>
      <View style={styles.container_p3}>
        <Text style={{fontSize:18, fontWeight:'bold',color:'#000'}}>Details</Text>
        <FlatList
          data={carDetails}
          keyExtractor={(item, index) => item.id}
          renderItem={({ item }) => (
            <View style={styles.p3_view}>
              <View style={{width:"50%"}}>
              <Text style={styles.commontext}>{item.label}</Text>
              </View>
              <View style={{width:"50%"}}>
              <Text style={styles.commontext}>{item.value}</Text>
              </View>
            </View>
          )}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5fcff',
  },
  container_p1: {
    paddingTop: 20,
    paddingHorizontal: 20,
    backgroundColor:"#fff",
    paddingBottom:15,
  },
  container_p2: {
    flexDirection: 'row',
    paddingTop: 20,
    marginTop:20,
    backgroundColor:"#fff",
  },
  linearGradient1: {
    width: '45%',
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 7,
    marginLeft:20
  },
  location1: {
    color: "#fff",
    fontWeight: 'bold',
    fontSize: 16
  },
  gradienttext:{ 
    fontWeight: 'bold', 
    fontSize: 18, 
    marginVertical: 2 
  },
  LamborghiniText:{
    fontSize:18,
    fontWeight:'bold',
    color:'black',
    marginTop:10
  },
  container_p3:{
    marginTop:10,
    paddingTop:15,
    paddingHorizontal:15,
    backgroundColor:"#fff",
    marginBottom:5,
    flex:1
  },
  detailsText:{
    fontWeight:'700',
    fontSize:18,
    letterSpacing:1
  },
  p3_view:{
    flex:1,
    justifyContent:'space-between',
    flexDirection:'row',
    borderBottomWidth:1,
    borderColor:"#DCDCDC",
    paddingVertical:7
  },
  commontext:{
    fontSize:14,
    color:'#000'
  }
});

export default Post;