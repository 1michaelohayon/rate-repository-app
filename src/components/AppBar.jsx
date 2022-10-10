import { View, StyleSheet, Pressable } from 'react-native';
import Text from './Text';
import theme from '../theme';
import Constants from 'expo-constants';
import { Link } from "react-router-native";


const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.appBarBackground,

  },
});

const AppBar = () => {
  return <View style={styles.container}>
    <AppBarTab title="Repositories" link={() => <Link to="/">Repositories</Link>}/>
    <AppBarTab title="Sign In" link={() => <Link to="/signin">signin</Link>}/>
    <AppBarTab title="works" link={() => console.log('works')}/>

  </View>;
};

export default AppBar;


const AppBarTab = props => <Pressable onPress={props.link}>
  <Text
    fontWeight="bold"
    color="white"
    fontSize="subheading">{props.title}
  </Text>
</Pressable>