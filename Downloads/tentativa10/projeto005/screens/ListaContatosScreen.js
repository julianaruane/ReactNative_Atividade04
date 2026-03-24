import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import styles from '../styles';

export default function ListaContatosScreen({ navigation }) {
  const contatos = [
    { id: '1', nome: 'Marcos Andrade', telefone: '81 988553424' },
    { id: '2', nome: 'Patrícia', telefone: '81 998765332' }
  ];

  return (
    <View style={{ flex: 1 }}>

      <View style={styles.header}>
        <Text style={styles.headerText}>Lista de Contatos</Text>

        <TouchableOpacity onPress={() => navigation.navigate('CadastroContato')}>
          <Text style={{ color: '#fff', fontSize: 25 }}>＋</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={contatos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate('EditarContato', { contato: item })}
          >
            <Image
              style={{ width: 50, height: 50, marginRight: 15 }}
              source={require('../assets/images/contatos.png')}
            />

            <View>
              <Text style={styles.nome}>{item.nome}</Text>
              <Text style={styles.telefone}>{item.telefone}</Text>
            </View>
          </TouchableOpacity>
        )}
      />

    </View>
  );
}