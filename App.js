import React from 'react';
import { Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
 <Stack.Navigator initialRouteName="Categories">
        <Stack.Screen name="Categories" component={CategoriesScreen}  options={{ headerShown: false}}/>
        <Stack.Screen name="CategoriesMeals" component={CategoriesMealsScreen}/>
</Stack.Navigator>
</NavigationContainer>
  );


}
const CategoriesScreen = ({ navigation }) => {

  let data = { dishName:'Sepagatte', country:'Italian' }
  return (
      <View style={{flex:1,justifyContent:'center', 
      alignItems:'center'}}>
          <Text>
          <Button title="Go to meals" onPress={() => {
              navigation.navigate("CategoriesMeals",data);
  }}/>
              </Text>
          </View>
  );
  
  }
  const CategoriesMealsScreen = ({route}) => {
  let data = route.params;
    return (
    <View style= {{flex:1, justifyContent:'center', alignItems:'center'}}>
      <Text>The Category meals!</Text>
      <Text style={{fontSize:30}}>{data.dishName}</Text>
      <Text style={{fontSize:30}}>{data.country}</Text>
   </View>
  );

}
  export default App;
 

