
import React, {useState} from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';


export default function App(){
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');


  function handleSumit(){
    const alt = altura/100;
    const imc = peso / (alt * alt);
   if(imc < 18.6){
    const b = 24.9;
    const a = (peso * b)/imc;
    alert('Levemente acima do peso! ' + imc.toFixed(2)+'\nPeso ideal: ' + a.toFixed(2));
   }else if(imc >= 18.6 && imc < 24.9){
    alert('Na media! ' + imc.toFixed(2));
  

   }else if(imc >= 24.9 && imc < 34.9){
    const b = 24.9;
    const a = (peso * b)/imc;
    alert('Levemente acima do peso! ' + imc.toFixed(2)+'\nPeso ideal: ' + a.toFixed(2));
   
   }else{
    const b = 24.9;
    const a = (peso * b)/imc;
    alert('acima do peso! ' + imc.toFixed(2)+'\nPeso ideal: ' + a.toFixed(2));
   
  
   }
  }
 

  return(
    <View style={styles.container}>
    <Text style={styles.title}> Calcule seu IMC</Text>

    <TextInput
    style={styles.input}
    value={peso}
    onChangeText={(peso)=> setPeso(peso)}
    placeholder="Peso (Kg)"
    keyboardType="numeric"
    />
    <TextInput
    style={styles.input}
    value={altura}
    onChangeText={(altura)=> setAltura(altura)}
    placeholder="Altura (cm)"
    keyboardType="numeric"
    />
    
    <TouchableOpacity 
    style={styles.button}
    onPress={handleSumit}
    >
    <Text style={styles.buttonText}> Calcular</Text>
    </TouchableOpacity>
    </View>
  );
}
 const styles = StyleSheet.create({
    container:{
      flex:1,
    },
  title:{
      textAlign: 'center',
      marginTop: 25,
      fontSize:30

  },
  input:{
    backgroundColor:'#121212',
    borderRadius: 10,
    margin: 15,
    padding: 10,
    color: '#fff',
    fontSize: 20
  },
  button:{
    justifyContent: 'center',
    alignItems: 'center',
    margin: 15,
    backgroundColor: '#41AeF4',
    padding: 10,
  },
  buttonText:{
    color: '#fff',
    fontSize: 25,
  }
   

 })