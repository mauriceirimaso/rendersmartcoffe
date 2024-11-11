import styles from './Emptycss';

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
    KeyboardAvoidingView,
  
     } from 'react-native';

const  empty =require('../assets/Empty/empty.png');
function Emptysearch(props)
{
   return(<>
           <KeyboardAvoidingView>
             <View style={styles.upperphoto}>
               <Image source={empty} style={{width:'70%',height:'70%'}}></Image>
             </View>
             <View style={styles.lowertext}>
                <Text style={styles.lowerpara}>No search Found </Text>
             </View>
             
           </KeyboardAvoidingView>

         </>)
}
export default Emptysearch