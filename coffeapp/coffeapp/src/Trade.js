import styles from  './Tradecss';

import privacy from '../assets/settingsicon/smallicons/privacy.png';
import settingsphoto from '../assets/footericons/orders2.png';
import search from '../assets/settingsicon/search.png';
import search2 from '../assets/settingsicon/searchsubmit.png';
import profilephoto1 from '../assets/settingsicon/profilephoto.png';
import gold from '../assets/settingsicon/gold.png';
import profile from '../assets/settingsicon/smallicons/profile.png';
import coffephoto2 from '../assets/productimages/coffe2.png';
import coffephoto3 from '../assets/productimages/coffe3.png';
import Footer from './Footer';
import History from './History';
import Emptyrecord from './Emptyrecord';

import history from '../assets/emptyphotoes/history.png'
import orders from  '../assets/emptyphotoes/orders.png'

import axios from 'axios';

import coffephoto1 from '../assets/productimages/coffe1.png';


import React, { useState ,useEffect} from 'react';



import { 
    SafeAreaView,
    Text, 
    Image,
    View ,
    ImageBackground,
    TextInput,
    Dimensions,
    StatusBar,
    Button,
    TouchableOpacity,
    Switch,
    ScrollView,
  
     } from 'react-native';
import Package from './Package';

function Trade()
{
    const [photo,setphoto]=useState(null);
    const [userDetails, setUserDetails] = useState([]);
    const [activeLink, setActiveLink] = useState('ongoing');
    const [data, setData] = useState([]);

    const baseurl='http://172.31.211.66:8000';

    useEffect(() => {
      const fetchUserDetails = async () => {
        try {
          const response = await fetch(`${baseurl}/api/getuserdetails/`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          });
          const result = await response.json();
          console.log('Fetched user details:', result);
          setUserDetails(result);
          if (result.coffephoto) {
            setphoto(result.profilephoto);
            console.log("photo url",photo)
        }
        } catch (error) {
          console.error('Error fetching user details:', error);
        }
      };
  
      fetchUserDetails();
    }, []);

    
  


  




    useEffect(() => {
     const fetchData = async () => {
       try {

         setData([]);
         const headers = {
           'Content-Type': 'application/json',
            
         };
 
         
         const url =
           activeLink === 'ongoing'
             ? `${baseurl}/api/getallorders/`
             : `${baseurl}/api/getallhistory/`;
 
         
         const response = await axios({
           method: 'GET',
           url: url,
           headers: headers,
         });
 
         if (response && response.status === 200) {
           setData(response.data); 
         }
       } catch (error) {
         console.error('Error fetching data:', error);
       }
     };
 
     
     fetchData();
   }, [activeLink]); 

    
   return(<>
           <StatusBar barStyle="light-content" backgroundColor={'rgb(28, 27, 27)'}  />
            <View style={styles.grandview}>
                 <View style={styles.blackview}>
                     <View style={styles.settings}>
                            <View style={styles.settingicon}>
                               <Image style={{width:'70%',height:'70%'}} source={settingsphoto}/>
                            </View>
                            <View style={styles.settingtext}>
                                      <Text style={{fontWeight:'800',color:'white'}}>My Order</Text>
                            </View>
                     </View>
                     <View style={styles.searchview}>
                         <View style={styles.searchicon}>
                            <Image style={{width:'60%',height:'60%'}} source={search}/>
                         </View>
                         <TextInput placeholder='search' placeholderTextColor='rgb(172, 168, 168)' style={styles.input}/>
                         <TouchableOpacity style={styles.searchsubmit}>
                              <Image style={{width:'100%',height:'100%',borderRadius:8}} source={search2}/>
                         </TouchableOpacity>
                     </View>

                     <View style={styles.settingsview}>
                          <View style={styles.profiledata}>
                               <View style={styles.profilepicture}>
                                  <Image style={{width:'70%',height:'85%'}} source={{uri:`https://wjowopzpnijescsqynza.supabase.co/storage/v1/object/public/media/profilephotoes/${userDetails.profilephoto}.png?t=2024-10-13T14%3A58%3A59.223Z`}}/>
                                  
                               </View>
                               <View style={styles.profilename}>
                                      <Text style={{fontWeight:'900'}}>{userDetails.fullnames || 'loading....'}</Text>
                                      <View style={styles.horizontal}>
                                          <Image style={{width:'10%',height:'100%'}} source={gold}/>
                                          <Text style={{color:'rgb(91, 88, 88)',fontWeight:'800',fontSize:10}}>{userDetails.membership ||'loading....'}</Text>
                                      </View>
                               </View>
                          </View>


                          <View style={styles.trade}>


                            <View style={styles.tradeheading}>
                                 <TouchableOpacity  style={[styles.ongoing, activeLink === 'ongoing' && styles.activeLink]}     onPress={() => setActiveLink('ongoing')}>
                                     <Text style={[{fontWeight: '800'}, activeLink === 'ongoing' && styles.activeText]}>ongoing</Text>
                                 </TouchableOpacity>
                                 <TouchableOpacity style={[styles.ongoing, activeLink === 'history' && styles.activeLink]}  onPress={() => setActiveLink('history')}>
                                     <Text style={[{fontWeight: '800'}, activeLink === 'history' && styles.activeText]}>History</Text>
                                 </TouchableOpacity>
                            </View>



                            <View style={styles.tradeorders}>
                               {activeLink === 'ongoing' ? (
                                 data.length > 0 ? (
                                 data.map((item, index) => (
                                    <Package
                                       key={index}
                                       coffeid={item.id}
                                       name={item.producttype}
                                       title={item.productname}
                                       id={`#${item.orderid}`}
                                       image={`https://wjowopzpnijescsqynza.supabase.co/storage/v1/object/public/media/coffephotoes/${item.coffephoto}.png?t=2024-10-14T08%3A25%3A20.142Z`} 
                                       cost={`$${parseFloat(item.price).toFixed(2)}`}
                                       date={item.date}
                                      time={item.time}
                                     />
                                     ))
                                    ) : (
                                         <Emptyrecord photo={orders} />
                                     )
                                  ) : (
                              data.length > 0 ? (
                              data.map((item, index) => (
                                  <History
                                      key={index}
                                      coffeid={item.id}
                                      name={item.producttype}
                                      title={item.productname}
                                      id={`#${item.orderid}`}
                                      image={`https://wjowopzpnijescsqynza.supabase.co/storage/v1/object/public/media/coffephotoes/${item.coffephoto}.png?t=2024-10-14T08%3A25%3A20.142Z`} 
                                      cost={`$${parseFloat(item.price).toFixed(2)}`}
                                      date={item.date}
                                      time={item.time}
                                      status={item.status}
                                      color={item.status === 'canceled' ? 'red' : 'green'}
                                     />
                                     ))
                                    ) : (
                                  <Emptyrecord photo={history} />
                                  )
                                  )}
                              </View>


                          </View>

                     </View>

                </View>
           </View>
           <View style={styles.footer}>
                  <Footer/>
             </View>
         </>)
}
export default Trade