import React from 'react';


import styles from './Homecss'; 
import Order from './Order'; 
import Home from './Home'; 
import { useState,useEffect } from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';

const star = require('../assets/icons/rating.png');

interface ProductionProps {
  id: string;
  photo: string;
  rating: string;
  coffename: string;
  status: string;
  price: string;
}

import { useNavigation } from '@react-navigation/native';

import { 
   SafeAreaView,
   Text, 
   Image,
   View,
   Dimensions,
   TouchableOpacity 
 } from 'react-native';
 import { Alert } from 'react-native';



function Production(props: ProductionProps) {

  const [isDarkMode, setIsDarkMode] = useState(false);


   const navigation = useNavigation() as any;
  const imagePath = `../assets/productimages/${props.photo}.png`; 
  let getId = props.id;


  const baseURL = 'http://172.31.211.66:8000';


  
  useEffect(() => {
    const loadTheme = async () => {
        try {
            const storedTheme = await AsyncStorage.getItem('theme');
            if (storedTheme !== null) {
                setIsDarkMode(storedTheme === 'dark');
            }
        } catch (error) {
            console.error("Failed to load theme from storage", error);
        }
    };

    loadTheme();
}, []);



  const checkIfLoggedIn = async () => {
    try {
      const response = await fetch(`${baseURL}/isloggedin/`);
      const result = await response.json();

      if (result.isloggedin) {
       navigation.navigate('Order', { getId })
      } else {
        Alert.alert('Login first!');
        navigation.navigate('Login');
      }
    } catch (error) {
      console.error('Error checking login status:', error);
      
    }
  };

  return (
    <View style={styles.coffeproduct}>
      
      <TouchableOpacity style={styles.imageview} onPress={()=>{navigation.navigate('Coffedata',{ getId })}}>
        <View style={styles.rateus}>
          <View style={styles.rateusicon}>
            <Image source={star} style={{ width: '100%', height: '100%' }} />
          </View>
          <View style={styles.rateusicon}>
            <Text style={{ fontSize: 12, color: 'white', fontWeight: '900', marginTop: 5 }}>
              {props.rating}
            </Text>
          </View>
        </View>
        <Image 
          source={{ uri: `https://wjowopzpnijescsqynza.supabase.co/storage/v1/object/public/media/coffephotoes/${props.photo}.png?t=2024-10-13T14%3A59%3A23.473Z` }} 
          style={{ borderRadius: 20, width: '100%', height: '100%' }} 
        />
      </TouchableOpacity>
      <View style={styles.imagedescr}>
        <Text style={isDarkMode? styles.darkcoffeproductword :styles.coffeproductword}>{props.coffename}</Text>
        <Text style={isDarkMode? styles.darklowtext :styles.lowtext}>{props.status}</Text>
      </View>
      <View style={styles.price}>
        <View style={styles.dollars}>
          <Text style={isDarkMode? styles.darkdollarstext:styles.dollarstext}>$ {props.price}</Text>
        </View>

        <TouchableOpacity 
          style={styles.addsign} 
          
           onPress={() => checkIfLoggedIn()}

        >

          <View>
            <Text style={styles.addsigntext}>+</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Production;
