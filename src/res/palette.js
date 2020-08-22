import colors from './colors';
const palette = {
  container: {
    center: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: colors.background,
    },
  },
  header: {
    image: {
      height: 25,
      width: 25,
      resizeMode: 'contain',
      justifyContent: 'center',
      alignItems: 'center',
    },
    headerLeftContainer: {
      paddingLeft: 20,
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    headerLeftImage: {
      width: 25,
      height: 25,
      resizeMode: 'contain',
    },
    headerRightContainer: {
      paddingRight: 20,
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    headerRightImage: {
      width: 25,
      height: 25,
      resizeMode: 'contain',
    },
  },
  headerLeftContainer: {
    marginLeft: 20,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
  },
};

export default palette;
