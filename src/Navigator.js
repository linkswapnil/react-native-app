import { createStackNavigator, createAppContainer } from "react-navigation";
import SearchScreen from "./screens/SearchScreen";

const AppNavigator = createStackNavigator(
  {
    Home: { screen: SearchScreen }
  },
  {
    initialRouteName: "Home"
  }
);

export default createAppContainer(AppNavigator);
