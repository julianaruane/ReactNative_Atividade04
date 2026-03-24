import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { useState } from 'react';
import styles from '../styles';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  return (
    <View style={styles.container}>

      <Image
        style={{ width: 100, height: 100, marginBottom: 20 }}
        source={require('../assets/images/perfil.png')}
      />

      <Text style={styles.text}>Login</Text>
      <TextInput style={styles.input} value={email} onChangeText={setEmail} />

      <Text style={styles.text}>Senha</Text>
      <TextInput style={styles.input} value={senha} onChangeText={setSenha} />

      <TouchableOpacity
        style={styles.buttonBlue}
        onPress={() => navigation.navigate('ListaContatos')}
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonRed}
        onPress={() => navigation.navigate('CadastroUsuario')}
      >
        <Text style={styles.buttonText}>Cadastrar-se</Text>
      </TouchableOpacity>

    </View>
  );
}