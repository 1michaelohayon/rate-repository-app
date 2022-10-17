import RepositoryItem from "./RepositoryItem";
import { View, StyleSheet, Pressable, FlatList } from "react-native";
import theme from "../theme";
import * as Linking from 'expo-linking'
import Text from "./Text";

const styles = StyleSheet.create({
  button: {
    backgroundColor: theme.colors.emphasisPrimary,
    padding: 17,
    margin: 10,
    marginStart: 10,
    marginEnd: 10,
    borderRadius: theme.roundness,
  },
  separator: {
    height: 10,
  },
  container: {
    paddingTop: 5,
    paddingBottom: 5,
    backgroundColor: theme.colors.backgroundSecondry
  },
  circle: {
    borderRadius: '50%',
    width: 47,
    height: 47,
    borderWidth: 2,
    padding: 10,
    borderColor: theme.colors.emphasisPrimary,
    borderStyle: 'solid',

  },
  circleText: {
    paddingTop: 4,
    textAlign: 'center',
    color: theme.colors.emphasisPrimary,
  },
  row: {
    padding: 10,
    flexDirection: 'row',
    marginTop: 10,
  },
  collum: {
    marginStart: 10,
    flexDirection: 'collum',
    marginTop: 10,
    flex: 1,
  },
  textBlock: {
    paddingBottom: 10,
  }
});
const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryView = ({ repository }) => {
  const reviwsNodes = repository.reviews.edges.map(edges => edges.node);
  console.log(reviwsNodes)
  return (
    <View key={repository}>
      <RepositoryItem item={repository} />
      <View style={styles.button}>
        <Pressable onPress={() => Linking.openURL(repository.url)}>
          <Text color={theme.colors.textWhite} style={{ textAlign: 'center' }}>Open in GitHub</Text>
        </Pressable>
      </View>
      <FlatList
        data={reviwsNodes}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={ReviewItem}

      // other props
      />
    </View>
  )
}

export default RepositoryView


const ReviewItem = ({ item }) => {
  const year = item.createdAt.substring(0, 4);
  const month = item.createdAt.substring(5, 7);
  const day = item.createdAt.substring(8, 10);
  const creationDate = `${day}.${month}.${year}`
  
  return (
    <View key={item.id} style={styles.container}>
      <View style={styles.row}>
        <View style={styles.circle}><Text fontWeight="bold" style={styles.circleText}>{item.rating}</Text></View>


        <View style={styles.collum}>
          <Text fontWeight="bold" fontSize="subheading" style={styles.textBlock}>{item.user.username}</Text>
          <Text color="textSecondary" style={styles.textBlock}>{creationDate}</Text>
          <Text style={styles.textBlock}>{item.text}</Text>
        </View>
      </View>
    </View>
  )
}

