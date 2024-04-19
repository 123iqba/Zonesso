import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image, ScrollView } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Boats from '../assets/Boats.png'
import Motors from '../assets/motors.png'
import MotorBikes from '../assets/Motorbikes.png'
import Showsroom from '../assets/Showrooms.png'
import partAccessories from '../assets/Parts_Accessories.png'
import Numberplate from '../assets/Number_Plates.png'
import carservice from '../assets/Car_Service.png'
import carwash from '../assets/Car_Wash.png'
import carrecovery from '../assets/Car_Recovery.png'
import slide from '../assets/slide.png'
import Totoyacar from '../assets/Toyota_Pic.png'
import toyotalogo from '../assets/Toyota_Logo.png'
interface Props {
  navigation: any;
  data: { id: string; title: string }[];
  items: Item[];

}

const ShowroomsDATA = [
  {
    id: '1',
    title: 'Toyota Motors',
    img: Totoyacar,
    logo: toyotalogo,
    location: '1km away'
  },
  {
    id: '2',
    title: 'Toyota Motors',
    img: Totoyacar,
    logo: toyotalogo,
    location: '1.2km away'
  },
  {
    id: '3',
    title: 'Toyota Motors',
    img: Totoyacar,
    logo: toyotalogo,
    location: '1.2km away'
  },
  {
    id: '4',
    title: 'Toyota Motors',
    img: Totoyacar,
    logo: toyotalogo,
    location: '1.2km away'
  },
]

const DATA = [
  {
    id: '1',
    title: 'Motors',
    img: Motors
  },
  {
    id: '2',
    title: 'Motorbikes',
    img: MotorBikes
  },
  {
    id: '3',
    title: 'Showrooms',
    img: Showsroom
  },
  {
    id: '4',
    title: 'Parts & Accessories',
    img: partAccessories
  },
  {
    id: '5',
    title: 'Number Plates',
    img: Numberplate
  },
  {
    id: '6',
    title: 'Car Service',
    img: carservice
  },
  {
    id: '7',
    title: 'Car Wash',
    img: carwash
  },
  {
    id: '8',
    title: 'Car Recovery',
    img: carrecovery
  },
  {
    id: '9',
    title: 'Boats',
    img: Boats
  },
]

const renderItem = ({ item }) => (
  <View style={styles.mainflat}>
    <View style={styles.flatbox}>
      <TouchableOpacity style={styles.menuBox}>
        <Image style={styles.icon} source={item.img} />
        <Text style={styles.info}>{item.title}</Text>
      </TouchableOpacity>
    </View>
  </View>
);


const Home: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
        <View style={styles.header}>
          <View style={styles.header_p1}>
            <MaterialCommunityIcons name="map-marker" color='#f0003c' size={32} />
            <Text style={styles.location}>Dubai</Text>
          </View>
          <MaterialCommunityIcons name="magnify" color='#000' size={32} />
        </View>
        <View style={styles.container_2}>
          <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            numColumns={3}
          />
        </View>
        <View style={styles.sliderview}>
          <Image source={slide} style={styles.slider} />
        </View>
        <View style={{ marginTop: 20, marginHorizontal: 12 }}>
          <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', marginBottom: 10, justifyContent: 'space-between' }}>
            <Text style={{ fontWeight: 'bold', fontSize: 20, }}>Top Showrooms</Text>
            <Text style={{ fontSize: 12, color: '#F03000' }}>View all</Text>
          </View>

          <View style={styles.mapView}>
            {ShowroomsDATA.map((item) => (
              <View style={styles.mapbox} key={item.id}>
                <TouchableOpacity>
                  <Image style={styles.toyotaimg} source={item.img} />
                 
                 <View  style={{marginTop:7}}>
                 <View style={styles.logoview}>
                   <Image style={{height:30}} source={item.logo} />
                    <View style={{marginLeft:10}}>
                      <Text style={styles.info1}>{item.title}</Text>
                      <Text style={styles.info1}>{item.location}</Text>
                    </View>
                </View>
                 </View>
                 
                  
                </TouchableOpacity>
              </View>
            ))}
          </View>
        </View>

      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 10,
    paddingRight: 12
  },
  header_p1: {
    flexDirection: "row",
    alignItems: 'center',
    paddingTop: 7
  },
  location: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  container_2: {
    marginVertical: 20,
    marginHorizontal: 12
  },
  mainflat: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: "center",
    padding: 7,
  },
  flatbox: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 7,
    shadowColor: '#000',
    backgroundColor: "#fff",
    width: '100%',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.43,
    shadowRadius: 4.51,
    elevation: 7,
  },

  menuBox: {
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  icon: {
    width: 70,
    height: 70,
    alignSelf: 'center'
  },
  info: {
    fontSize: 12,
    color: '#000',
    alignSelf: "center",
    marginBottom: 7
  },
  sliderview: {
    justifyContent: 'center',
    marginTop: 5,
    alignSelf: 'center',
    width: "100%",
    alignItems: "center"
  },
  slider: {
    justifyContent: 'center',
    width: '93%',
    borderWidth: 1,
    borderColor: '#E1E1E1',
    borderRadius: 10
  },
  mapView: {
    flex: 1,
    flexDirection: 'row'
  },
  mapbox: {
    width: "43%"
  },
  toyotaimg: {
    width: 150,
    height: 120
  },
  logoview:{
    alignItems:'center',
    flexDirection:'row'
  },
  info1:{
  color:'#000'
  }
});

export default Home;
