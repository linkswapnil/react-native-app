import React from "react";
import {
  Button,
  Image,
  StyleSheet,
  ScrollView,
  FlatList,
  TextInput,
  TouchableOpacity,
  Text,
  View
} from "react-native";

const getData = async () => {
  return new Promise(r => {
    const url =
      "https://gateway.marvel.com:443/v1/public/characters?apikey=6c3e2173a8f3e5adb795172ad8dd3ef2&hash=4629485a6de69f01f4046b53b33a1386&ts=1&nameStartsWith=Spider";
    fetch(url)
      .then(function(response) {
        return response.json();
      })
      .then(function(myJson) {
        r(myJson);
      });
  });
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: "column"
  },
  searchControlContainer: {
    flex: 1,
    padding: 15,
    flexDirection: "row",
    backgroundColor: "yellow",
    justifyContent: "space-around"
  },

  listContainer: {
    flex: 6,
    flexDirection: "column"
  },
  searchInput: {
    flex: 5,
    height: 40,
    width: 300,
    backgroundColor: "gray",
    borderRadius: 5
  },
  searchButton: {
    flex: 1,
    backgroundColor: "red",
    height: 40,
    borderRadius: 5
  },
  buttonLabel: {
    color: "white",
    padding: 5,
    height: 40
  },
  image: {
    height: 50,
    width: 50
  }
});

export default class SearchScreen extends React.Component {
  constructor(props) {
    super(props);
    this.data = [
      {
        name: "Iron Cross Army",
        thumbnailUrl:
          "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg",
        description: ""
      },
      {
        name: "Iron Fist (Bei Bang-Wen)",
        thumbnailUrl:
          "http://i.annihil.us/u/prod/marvel/i/mg/9/20/53176ebd40ad7.jpg",
        description: ""
      },
      {
        name: "Iron Fist (Danny Rand)",
        thumbnailUrl:
          "http://i.annihil.us/u/prod/marvel/i/mg/3/f0/52616788ebc63.jpg",
        description: ""
      },
      {
        name: "Iron Fist (Orson Randall)",
        thumbnailUrl:
          "http://i.annihil.us/u/prod/marvel/i/mg/6/e0/53176e979cca2.jpg",
        description: ""
      },
      {
        name: "Iron Fist (Quan Yaozu)",
        thumbnailUrl:
          "http://i.annihil.us/u/prod/marvel/i/mg/4/20/53176e89b563e.jpg",
        description: ""
      },
      {
        name: "Iron Fist (USM)",
        thumbnailUrl:
          "http://i.annihil.us/u/prod/marvel/i/mg/6/20/52321751dffa6.jpg",
        description:
          "Danny is always focused yet relaxed - more Zen-focused than chill surfer dude."
      },
      {
        name: "Iron Fist (Wu Ao-Shi)",
        thumbnailUrl:
          "http://i.annihil.us/u/prod/marvel/i/mg/7/03/53176f05a6851.jpg",
        description: ""
      }
    ];
  }

  async componentDidMount() {
    const response = await getData();
    console.log(response);
    // this.data = response.data.results;
    console.log(this.data);
    this.renderItem = this.renderItem.bind(this);
  }

  renderItem({ item }) {
    console.log(item);
    return (
      <TouchableOpacity onPress={this.navigateToCharacterScreen}>
        <View>
          <Image style={styles.image} source={{ uri: item.thumbnailUrl }} />
          <Text>{item.name}</Text>
        </View>
      </TouchableOpacity>
    );
  }

  navigateToCharacterScreen() {
    this.props.navigation.navigate("Character");
  }
  render() {
    return (
      <ScrollView>
        <View style={styles.mainContainer}>
          <View style={styles.searchControlContainer}>
            <TextInput style={styles.searchInput} />
            <TouchableOpacity style={styles.searchButton}>
              <Text style={styles.buttonLabel}>Search</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.listContainer}>
            <FlatList data={this.data} renderItem={this.renderItem} />
          </View>
        </View>
      </ScrollView>
    );
  }
}
