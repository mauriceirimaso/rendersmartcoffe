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


function Scroll()
{
   return(<>
      <View style={{width:'50%',height:'50%',borderWidth:2,borderColor:'red'}}>
         <ScrollView style={{flex:1,width:'100%',height:'100%',borderColor:'green',borderWidth:2}}>
            <Text>
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae fuga dicta sapiente nemo fugit minima vitae alias, suscipit eligendi id neque vel quasi ullam quia soluta quis. Deserunt, corporis blanditiis.
             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos officiis laboriosam praesentium molestias beatae. Facere ducimus impedit sunt eum tempora quae, id accusantium est, officiis cum quisquam necessitatibus quas sint.
             Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum voluptate animi ratione reprehenderit pariatur quasi alias placeat sapiente cum blanditiis laboriosam mollitia deleniti doloremque, rerum libero, recusandae eum praesentium culpa?
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, autem eveniet. Et blanditiis consectetur enim nostrum ex animi est libero quos magnam saepe ratione, itaque inventore molestiae architecto alias molestias!
             Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae dolorum voluptates enim nam ab ipsa voluptatibus vel laborum distinctio, officiis odio a ullam. Voluptate ut itaque repudiandae repellat, eos labore!
             
            </Text>
         </ScrollView>

      </View>
         </>)
}
export default Scroll