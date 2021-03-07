import { StyleSheet } from 'react-native';

export const Styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 'auto',
    justifyContent: 'center',
    width: '100%',
    alignItems: 'center',
  },
  contentText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  titleText: {
    textAlign: 'center',
    fontSize: 32,
    fontWeight: '500',
  },
  button: {
    borderRadius: 8,
    height: 50,
    width: 180,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e94832',
  },
  btnText: { fontSize: 18, color: 'white', textTransform: 'uppercase' },
  circularImage: {
    borderWidth: 1,
    borderColor: '#afafaf',
    borderRadius: 100,
    width: 150,
    height: 150,
  },
  checkboxContainer: {
    flexDirection: 'row',
    margin: 20,
  },
  checkbox: {
    alignSelf: 'center',
  },
  label: {
    margin: 8,
  },
  textArea: {
    height: 150,
    justifyContent: 'flex-start',
  },
});
