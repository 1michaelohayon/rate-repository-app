import { View, StyleSheet } from 'react-native';
import Text from './Text';
import theme from '../theme';
import Constants from 'expo-constants';
import { Link } from "react-router-native";
import { ScrollView } from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.appBarBackground,
    flexDirection: 'row',

  },
  tab: {
    padding: 10
  }
});

const AppBar = () => {
  return <View style={styles.container}>
    <ScrollView horizontal={true}>
      <AppBarTab to="/" title={"Repositories"}>Repositories</AppBarTab>
      <AppBarTab to="/signin" title={"Sign In"}></AppBarTab>
    </ScrollView>
  </View>;
};

export default AppBar;

const AppBarTab = (props) => <Link to={props.to}>
  <View style={styles.tab}>
    <Text
      fontWeight="bold"
      color="white"
      fontSize="subheading">{props.title}
    </Text>
  </View>
</Link>
