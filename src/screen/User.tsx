import MaskedView from '@react-native-masked-view/masked-view';
import React, { useState } from 'react';
import {
  FlatList,
  TextInput,
  TextProps,
  View,
  TextStyle,
  Image,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CustomSlider from '../component/CustomSlider';

interface GradientTextProps extends TextProps {
  children: React.ReactNode;
  style?: TextStyle;
}

interface Option {
  name: ReactNode;
  id: string;
  label: string;
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

interface Props {
  navigation: any;
  options: Option[];
  onSelect: (option: Option) => void;
}

// const options = [
//   { id: '1', name: 'Apple' },
//   { id: '2', name: 'Banana' },
//   { id: '3', name: 'Orange' },
//   { id: '4', name: 'Grapes' },
//   { id: '5', name: 'Watermelon' },
//   { id: '6', name: 'Pineapple' },
//   { id: '7', name: 'Mango' },
//   { id: '8', name: 'Strawberry' },
//   { id: '9', name: 'Kiwi' },
//   { id: '10', name: 'Peach' },
// ];

const User: React.FC<Props> = ({ navigation, onSelect }) => {
 
  const [value, setValue] = useState(10);
  const [searchText, setSearchText] = useState('');
  const [filteredOptions, setFilteredOptions] = useState();

  

  const handleSliderChange = (newValue: number) => {
    setValue(newValue);
  };

  const handleSearch = (text: string) => {
    // const filtered = filteredOptions.filter(filteredOptions => filteredOptions.name.toLowerCase().includes(text.toLowerCase()));
    // setSearchText(text);
    // setFilteredOptions(filtered);
  };
  
  const handleSelectOption = () => {
    setSearchText('');
    // setFilteredOptions(options);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <MaterialCommunityIcons name="arrow-left" color='grey' size={32} />
        <Text style={styles.FilterText}>Filters</Text>
        <GradientText style={{ fontWeight: 'bold', fontSize: 18, marginVertical: 2 }}>Reset</GradientText>
      </View>
      <View style={styles.container_p1}>
        <View style={styles.p3_view}>
          <Text style={styles.commontext}>City</Text>
          <View style={styles.P1_View}>
            <Text style={styles.commontext1}>Dubai</Text>
            <MaterialCommunityIcons name="chevron-right" color='grey' size={32} />
          </View>
        </View>
        <View style={styles.p3_view}>
          <Text style={styles.commontext}>Category</Text>
          <View style={styles.P1_View}>
            <Text style={styles.commontext1}>Motors</Text>
            <MaterialCommunityIcons name="chevron-right" color='grey' size={32} />
          </View>
        </View>
        <View style={{marginVertical: 15}}>
          <Text style={styles.commonPrice}>Price ( AED )</Text>
          <CustomSlider
            min={10}
            max={10000}
            value={value}
            onValueChange={handleSliderChange}
          />
        </View>
        <View>
        <Text style={styles.commonPrice}>Keywords</Text>
          <TextInput
            style={{ height: 47, marginTop:10,borderRadius:10, borderColor: 'gray', borderWidth: 1, paddingHorizontal: 10 }}
            placeholder="Search..."
            onChangeText={handleSearch}
            value={searchText}
          />
          <FlatList
            data={filteredOptions}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => handleSelectOption(item)}>
                <Text>{item.name}</Text>
              </TouchableOpacity>
            )}
            keyExtractor={item => item.id}
          />
        </View>
        <View style={{marginVertical: 15}}>
          <Text style={styles.commonPrice}>Year</Text>
          <CustomSlider
            min={10}
            max={10000}
            value={value}
            onValueChange={handleSliderChange}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '100%',
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
  FilterText: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#000',
  },
  container_p1: {
    flex: 1,
    marginHorizontal: 15,
  },
  p3_view: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#DCDCDC',
    paddingVertical: 15,
  },
  commontext: {
    fontSize: 16,
    color: '#000',
    fontWeight: 'bold',
  },
  commontext1: {
    fontSize: 16,
    color: '#000',
  },
  P1_View: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  commonPrice: {
    fontSize: 18,
    marginTop: 20,
    fontWeight: 'bold',
    color: '#000',
  },
});

export default User;