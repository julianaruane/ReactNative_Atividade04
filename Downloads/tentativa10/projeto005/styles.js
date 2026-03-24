import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E7DDD7'
  },

  input: {
    width: 210,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: '#fff'
  },

  text: {
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    marginLeft: 80
  },

  buttonBlue: {
    backgroundColor: '#0077ff',
    padding: 10,
    marginTop: 10,
    width: 200,
    alignItems: 'center',
    borderRadius: 5
  },

  buttonRed: {
    backgroundColor: '#FF0000',
    padding: 10,
    marginTop: 10,
    width: 200,
    alignItems: 'center',
    borderRadius: 5
  },

  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16
  },

  header: {
    backgroundColor: '#2F6FDB',
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  headerText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  },

  card: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderColor: '#ccc'
  },

  nome: {
    fontSize: 16,
    fontWeight: 'bold'
  },

  telefone: {
    fontSize: 14,
    color: '#555'
  }
});