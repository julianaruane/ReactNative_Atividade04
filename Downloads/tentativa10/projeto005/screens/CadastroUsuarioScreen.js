import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useState } from 'react';

export default function CadastroUsuarioScreen() {
  const [nome, setNome] = useState('');

  return (
    <View>
      <Text>Nome</Text>
      <TextInput value={nome} onChangeText={setNome} />

      <TouchableOpacity>
        <Text>Salvar</Text>
      </TouchableOpacity>
    </View>
  );
}