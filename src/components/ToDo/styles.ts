import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    height: 56,
    width: '100%',
    backgroundColor: '#333333',
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10
  },
  todo: {
    flex: 1,
    fontSize: 16,
    color: '#fff',
    marginLeft: 16,
  },
  done: {
    flex: 1,
    fontSize: 16,
    color: '#fff',
    marginLeft: 16,
    textDecorationLine: 'line-through'
  },
  radioCheckedIcon: {
    fontSize: 32,
    color: '#5E60CE',
    margin: 10
  },
  radioIcon: {
    fontSize: 32,
    color: '#4EA8DE',
    margin: 10
  },
  trashIcon: {
    marginRight: 10,
    fontSize: 24,
    color: '#e23c44',
  }
})