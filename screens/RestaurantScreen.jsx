import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import CartIcon from "../components/CartIcon";
import { ArrowLeft, MapPin } from "react-native-feather";
import { menu } from "../constants/menus";
import { themeColors } from "../theme";
import DishMenu from "../components/DishMenu";
import { useSelector } from "react-redux";

const RestaurantScreen = () => {
  const selectedRestaurant = useSelector(
    (state) => state.restaurant.currentRestaurant
  );

  console.log(selectedRestaurant);
  const navigation = useNavigation();
  const restaurantId = selectedRestaurant?.id;

  // Find the menu for the selected restaurant
  const restaurantMenu =
    menu.find((m) => m.restaurant_id === restaurantId)?.menu || []; // Default to empty array if no menu found

  return (
    <SafeAreaView className="flex-1">
      <CartIcon />
      <ScrollView>
        <View className="relative">
          {/* Ensure the image source is correctly handled */}
          <Image
            className="w-full h-72"
            source={selectedRestaurant?.image}
            resizeMode="cover"
          />
          <TouchableOpacity
            className="absolute top-8 left-4 bg-white p-2 rounded-full shadow"
            onPress={() => navigation.goBack()}
          >
            <ArrowLeft strokeWidth={3} stroke={themeColors.bgColor(1)} />
          </TouchableOpacity>
        </View>

        <View className="bg-white -mt-12 pt-6 rounded-t-3xl">
          <View className="px-3">
            <Text className="text-3xl font-bold">
              {selectedRestaurant?.name}
            </Text>
            <View className="flex-row space-x-2 my-1">
              <View className="flex-row items-center space-x-1">
                <Image
                  source={require("../assets/images/star.jpg")}
                  className="h-4 w-4"
                />
                <Text className="text-sm">
                  <Text className="text-green-700">
                    {selectedRestaurant?.rating}
                  </Text>
                  <Text className="text-gray-700">
                    {" "}
                    ({selectedRestaurant?.reviews.length} reviews)
                  </Text>
                </Text>
              </View>
              <View className="flex-row items-center space-x-1">
                <MapPin color={"gray"} width={15} height={15} />
                <Text className="text-gray-700 text-xs">
                  Nearby {selectedRestaurant?.location}
                </Text>
              </View>
            </View>
            <Text className="text-gray-500 mt-2 text-xs">
              {selectedRestaurant?.description}
            </Text>
          </View>
        </View>

        <View className="pb-32 bg-amber-50">
          <Text className="px-3 py-3 text-2xl font-bold">Menu</Text>
          {restaurantMenu.map((dish, index) => (
            <DishMenu key={index} dish={dish} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RestaurantScreen;

const styles = StyleSheet.create({});
