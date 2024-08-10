import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import * as Icon from "react-native-feather";
import { themeColors } from "../theme";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { selectRestaurant } from "../redux/restaurant/restaurantActions";

const RestaurantCard = ({ item }) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("Restaurant", { ...item });
        dispatch(selectRestaurant(item));
      }}
    >
      <View
        className="mr-6 bg-white rounded-3xl shadow-lg "
        style={{
          shadowColor: themeColors.bgColor(0.2),
          shadowRadius: 7,
        }}
      >
        <Image className="h-36 w-64 rounded-3xl" source={item.image} />
        <View className="px-3 pb-4 space-y-2">
          <Text className="text-lg font-bold pt-2">{item.name}</Text>
          <View className="flex-row items-center space-x-1">
            <Image
              source={require("../assets/images/star.jpg")}
              className="h-4 w-4"
            />
            <Text className="text-sm">
              <Text className="text-green-700">{item.rating}</Text>
              <Text className="text-gray-700">
                {" "}
                ({item.reviews.length} reviews)
              </Text>
            </Text>
          </View>
          <View className="flex-row items-center space-x-1 ">
            <Icon.MapPin color={"gray"} width={15} height={15} />
            <Text className="test-gray-700 text-xs">
              Nearby {item.location}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RestaurantCard;

const styles = StyleSheet.create({});
