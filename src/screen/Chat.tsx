import MaskedView from '@react-native-masked-view/masked-view';
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextStyle,ScrollView, TextProps, TouchableOpacity, FlatList } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { SliderBox } from "react-native-image-slider-box";

import lamborgini from '../assets/Toyota.png'

interface Props {
  navigation: any;
}

interface CarDetailsProps {
  id: string;
  label: string;
  value: string;
}
interface PostState {
  images: any[];
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

const Chat: React.FC<Props> = ({ navigation }) => {

  const [images, setImages] = React.useState([
    lamborgini, lamborgini, lamborgini, lamborgini,

  ]);
  const [expanded, setExpanded] = React.useState(false);

  const renderItem = ({ item }) => {
    if (expanded || carDetails.indexOf(item) < 5) {
      return (
        <View style={styles.p3_view}>
          <Text style={styles.commontext}>{item.label}</Text>
          <Text>{item.value}</Text>
        </View>
      );
    }
  };

  return (
    <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>

      <View style={styles.card}>
        <View style={styles.card_v1}>
          <View style={styles.V1_view}>
            <View style={{ flex: 1, justifyContent: 'space-between', flexDirection: 'row', width: "100%" }}>
              <View style={{ marginHorizontal: 2, backgroundColor: "#D9D9D9", borderRadius: 7, width: 40, paddingLeft: 3 }}>
                <MaterialCommunityIcons name="arrow-left" color='#000' size={32} />
              </View>
              <View style={{ flexDirection: 'row' }}>
                <View style={{ marginHorizontal: 2 }}>
                  <MaterialCommunityIcons name="tune" color='#fff' size={32} />
                </View>
                <View style={{ marginHorizontal: 2 }}>
                  <MaterialCommunityIcons name="heart-outline" color='#fff' size={32} />
                </View>
              </View>
            </View>
          </View>

        </View>
        <SliderBox
          images={images}
          sliderBoxHeight={200}
          dotColor="#FFEE58"
          inactiveDotColor="#90A4AE"
          style={styles.banner}
        />
      </View>
      {/* <Image source={item.bannerimg} style={styles.banner} /> */}
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
        <Text style={styles.detailsText}>Details</Text>
        <FlatList
          data={carDetails}
          keyExtractor={(item, index) => item.id}
          renderItem={renderItem}
        />
        {carDetails.length > 5 && (
          <TouchableOpacity style={styles.moreDetailsButton} >
            <GradientText  style={styles.moreDetailsText}>{expanded ? 'Less Details' : 'Show More Details'}</GradientText>
          </TouchableOpacity>
        )}
               
        <View style={styles.container_p4}>
          <Text style={styles.detailsText}>Details</Text>
          <View style={styles.p4_view}>
          <Text style={styles.commontext1}>2020 LAMBORGHINI AVENTADOR SVJ ONE ONLY 600KM</Text>
          </View>
        </View>
        <View style={styles.container_p4}>
          <Text style={styles.detailsText}>Location</Text>
          <View style={styles.p4_view}>
          <Text style={styles.commontext1}>Dubai, United Arab Emirates</Text>
          </View>
        </View>
      </View>
      </ScrollView>
      <View>
      <View style={styles.chatCallview}>
        <View style={styles.CallView}>
          <Text style={styles.chatText}>Chat</Text>
        </View>
        <View style={styles.CallView}>
          <LinearGradient start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }} colors={['#F06100', '#F04900', '#F03000', '#F00030', '#F0006D']} style={styles.linearGradient}>
            <Text style={styles.callText}>Call</Text>
          </LinearGradient>
        </View>
      </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5fcff',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 5,
  },
  card_v1: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'relative',
  },
  V1_view: {
    flex: 1,
    width: "100%",
    position: 'absolute',
    padding: 10,
    borderRadius: 10,
    zIndex: 1, // Ensure the absolute container is above other content
  },
  banner: {
    height: 230,
    width: '100%',
    borderRadius: 7
  },
  container_p1: {
    paddingHorizontal: 15,
    backgroundColor: "#fff",
    paddingBottom: 15,
  },
  container_p2: {
    flexDirection: 'row',
    paddingTop: 20,
    backgroundColor: "#fff",
  },
  linearGradient1: {
    width: '45%',
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 7,
    marginLeft: 20
  },
  location1: {
    color: "#fff",
    fontWeight: 'bold',
    fontSize: 16
  },
  gradienttext: {
    fontWeight: 'bold',
    fontSize: 18,
    marginVertical: 2
  },
  LamborghiniText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 10
  },
  container_p3: {
    marginTop: 10,
    paddingTop: 15,
    paddingHorizontal: 15,
    backgroundColor: "#fff",
    marginBottom: 5,
    flex: 1
  },
  detailsText: {
    fontWeight: '700',
    fontSize: 18,
    letterSpacing: 1
  },
  p3_view: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: "#DCDCDC",
    paddingVertical: 7
  },
  commontext: {
    fontSize: 14,
    color: '#000'
  },
  moreDetailsButton:{
    flex:1,
    justifyContent:'center',
    alignSelf:'center',
    alignItems:'center',
    borderBottomWidth:1,
    borderColor:"#DCDCDC",
    paddingBottom:7,
    // marginVertical:7,
    width:"100%",
    marginBottom:7,
    marginTop:3
  },
  moreDetailsText:{
    fontSize:18,
    fontWeight:'bold'
  },
  detailstext:{ 
    fontSize: 18, 
    fontWeight: 'bold', 
    color: '#000' 
  },
  container_p4:{
    marginVertical:10,
    borderBottomWidth:1,
    borderColor:"#DCDCDC",
    paddingBottom:7
  },
  p4_view:{
    marginVertical:7
  },
  commontext1: {
    fontSize: 16,
    color: '#000'
  },
  chatCallview: {
    // flex: 1,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  CallView: {
    backgroundColor: "#FFEEED",
    width: "48%",
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#F03000',
    borderRadius: 7
  },
  chatText: {
    color: '#F03000',
    fontWeight: 'bold',
    fontSize: 14
  },
  callText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14
  },
  linearGradient: {
    width: '100%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 7
  },
  linearGradient1: {
    width: '45%',
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 7,
  },
});

export default Chat;
