import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131016',
    padding: 24
  },
  logo: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 48,
  },
  input: {
    flex: 1,
    height: 56,
    backgroundColor: '#262626',
    borderRadius: 12,
    color: '#fff',
    padding: 16,
    fontSize: 16,
    marginRight: 12
  },
  buttonText: {
    color: '#fff',
    fontSize: 24,
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 12,
    backgroundColor: '#1E6F9F',
    alignItems: 'center',
    justifyContent: 'center'
  },
  tasksList: {
    color: '#fff',
    width: '100%',
    flexDirection: 'row',
    marginTop: 36,
    marginBottom: 42,
    justifyContent: 'space-between'
  },
  taskViewCreate: {
    flexDirection: 'row',
    marginRight: 30
  },
  taskButtonCreate: {
    color: '#4EA8DE',
    fontWeight: 'bold',
    fontSize: 14,
    paddingRight: 5,
  },
  taskCountCreate: {
    backgroundColor: '#333333',
    fontSize: 12,
    padding: 2,
    borderRadius: 9,
  },
  taskCount: {
    fontWeight: 'bold',
    color: '#D9D9D9'
  },
  taskButtonDone: {
    color: '#8284FA',
    fontWeight: 'bold',
    fontSize: 14,
    paddingRight: 5,
  },
  taskCountDone: {
    backgroundColor: '#333333',
    fontSize: 12,
    padding: 2,
    borderRadius: 9,
  },
  form: {
    width: '100%',
    flexDirection: 'row',
    marginTop: 36,
    marginBottom: 42
  },
  listEmptyTextTitle: {
    color: '#fff',
    fontSize: 14,
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 36
  },
  listEmptyTextSubTitle: {
    color: '#808080',
    fontSize: 14,
    textAlign: 'center',
  },
  clipboard: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 48,
  },
  lineStyle: {
    borderWidth: 0.5,
    borderColor: '#333333',
  }
})