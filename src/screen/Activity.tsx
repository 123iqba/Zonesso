import React, { useState } from 'react';
import { StyleSheet, ScrollView, View, TextStyle, Text, TextInput, FlatList, Image, TouchableOpacity, TextProps } from 'react-native';
import toyotapic from '../assets/Toyota_Pic.png'
import lamborgini from '../assets/Toyota.png'
import LinearGradient from 'react-native-linear-gradient';
import MaskedView from '@react-native-masked-view/masked-view';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

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
interface Property {
  id: string;
  bannerimg: string;
  price: string;
  name: string;
  address: string;
  description: string;
  year: string;
  location: any;
  postedOn: string;
  postedby: string;
  locationimg: any
}

const propertyData: Property[] = [
  {
    id: '1',
    bannerimg: lamborgini,
    locationimg: toyotapic,
    price: '250,000',
    name: 'Lamborghini Aventador',
    description: 'AVENTADOR S | INTERIOR CARBON | TWO TONE INTERIOR',
    address: 'Dubai',
    year: '1990',
    location: 'Dubai',
    postedOn: '14/3/24',
    postedby: 'Toyota Motors'
  },
  {
    id: '2',
    bannerimg: lamborgini,
    locationimg: toyotapic,
    price: '250,000',
    name: 'Lamborghini Aventador',
    description: 'AVENTADOR S | INTERIOR CARBON | TWO TONE INTERIOR',
    address: 'Dubai',
    year: '1990',
    location: 'Dubai',
    postedOn: '14/3/24',
    postedby: 'Toyota Motors'
  },
  {
    id: '3',
    bannerimg: lamborgini,
    locationimg: toyotapic,
    price: '250,000',
    name: 'Lamborghini Aventador',
    description: 'AVENTADOR S | INTERIOR CARBON | TWO TONE INTERIOR',
    address: 'Dubai',
    year: '1990',
    location: 'Dubai',
    postedOn: '14/3/24',
    postedby: 'Toyota Motors'
  },
  {
    id: '4',
    bannerimg: lamborgini,
    locationimg: toyotapic,
    price: '250,000',
    name: 'Lamborghini Aventador',
    description: 'AVENTADOR S | INTERIOR CARBON | TWO TONE INTERIOR',
    address: 'Dubai',
    year: '1990',
    location: 'Dubai',
    postedOn: '14/3/24',
    postedby: 'Toyota Motors'
  },
];

const Activity: React.FC = () => {
  const [searchText, setSearchText] = useState<string>('');

  const handleSearch = (text: string) => {
    setSearchText(text);
  }

  const renderItem = ({ item }: { item: Property }) => (
    <View style={styles.card}>
      <View style={styles.card_v1}>
        <View style={styles.V1_view}>
          <View style={{ flex: 1, justifyContent: 'space-between', flexDirection: 'row', width: "100%" }}>
            <LinearGradient start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }} colors={['#F06100', '#F04900', '#F03000', '#F00030', '#F0006D']} style={styles.linearGradient1}>

              <Text style={styles.location1}>Premium</Text>
            </LinearGradient>
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
      <Image source={item.bannerimg} style={styles.banner} />
      <View style={{ marginTop: 10 }}>
        <GradientText style={{ fontWeight: 'bold', fontSize: 18, marginVertical: 2 }}>AED {item.price}</GradientText>
        <Text style={{ fontWeight: 'bold', fontSize: 18, color: ['#F06100', "#F04900", '#F03000', '#F00030', "#F0006D"], marginVertical: 2 }}>Lamborghini Aventador</Text>
        <Text style={{ fontSize: 14, marginVertical: 2 }}>AVENTADOR S | INTERIOR CARBON | TWO TONE INTERIOR </Text>
        <Text><Text style={{ fontWeight: 'bold' }}>Location : </Text>{item.location}</Text>
      </View>
      <View style={styles.productCard}>
        <Image source={item.locationimg} style={styles.locationimg} />
        <View style={styles.productInfo}>
          <Text><Text style={{ fontWeight: 'bold' }}>Location : </Text>{item.location}</Text>
          <Text><Text style={{ fontWeight: 'bold' }}>Posted on : </Text>{item.postedOn}</Text>
          <Text> <Text style={{ fontWeight: 'bold' }}>Posted by : </Text>{item.postedby}</Text>
        </View>
      </View>
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
  );

  const filteredData = propertyData.filter((item) => {
    return item.address.toLowerCase().includes(searchText.toLowerCase());
  });

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
        <View style={styles.header}>
          <View style={styles.header_p1}>
            <MaterialCommunityIcons name="arrow-left" color='#000' size={32} />
            <Text style={styles.location}>Dubai</Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <View style={{ marginHorizontal: 2 }}>
              <MaterialCommunityIcons name="magnify" color='#000' size={32} />
            </View>
            <View style={{ marginHorizontal: 2 }}>
              <MaterialCommunityIcons name="tune" color='#000' size={32} />
            </View>
            <View style={{ marginHorizontal: 2 }}>
              <MaterialCommunityIcons name="heart-outline" color='#000' size={32} />
            </View>
          </View>
        </View>
        <View style={{ backgroundColor: "#fff", paddingLeft: 12, }}>
          <Text style={{ fontSize: 15, fontWeight: 800 }}>Showing <Text style={{ color: "#F03000  " }}>200</Text> results in Dubai</Text>
        </View>

        <FlatList
          data={filteredData}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 5,
    marginBottom: 7,
    paddingHorizontal: 15,
    paddingVertical: 15
  },
  card_v1:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'relative',
  },
  V1_view:{
    flex: 1,
    width: "100%",
    position: 'absolute',
    padding: 10,
    borderRadius: 10,
    zIndex: 1, // Ensure the absolute container is above other content
  },
  banner: {
    height: 223,
    width: '100%',
    borderRadius: 7
  },

  price: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5
  },
  address: {
    fontSize: 16,
    marginBottom: 5
  },
  productCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    paddingVertical: 5,
    marginVertical: 10,
  },
  locationimg: {
    width: 60,
    height: 60,
    borderRadius: 7
  },
  productInfo: {
    marginLeft: 15
  },

  chatCallview: {
    flex: 1,
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
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 10,
    paddingRight: 12,
    backgroundColor: "#fff"
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
  location1: {
    color: "#fff",
    fontWeight: 'bold',
    fontSize: 16
  }

});

export default Activity;
