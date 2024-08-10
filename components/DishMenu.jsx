import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import * as Icon from "react-native-feather";
import { themeColors } from "../theme";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../redux/cart/cartActions";

const DishMenu = ({ dish }) => {
  const dispatch = useDispatch();

  return (
    <View className="bg-white rounded-3xl flex-row shadow-2xl mb-3 mx-3 p-3">
      <Image
        source={require("../assets/images/dishes/images (2).jpeg")} // Use dish.image if available
        className="w-24 h-24 rounded-3xl"
      />
      <View className="flex-1 space-y-3 pl-3">
        <View>
          <Text className="text-lg">{dish.name}</Text>
          <Text className="text-gray-700">{dish.description}</Text>
        </View>
        <View className="flex-row items-center justify-between">
          <Text className="text-gray-700 text-lg font-bold">
            $ {dish.price}
          </Text>
          <View className="flex-row items-center">
            <TouchableOpacity
              className="p-1 rounded-full"
              style={{ backgroundColor: themeColors.bgColor(1) }}
              onPress={() => dispatch(removeFromCart(dish))} // Dispatch action to remove from cart
            >
              <Icon.Minus
                stroke={"white"}
                height={20}
                width={20}
                strokeWidth={2}
              />
            </TouchableOpacity>
            <Text className="px-3">(2)</Text>
            <TouchableOpacity
              className="p-1 rounded-full"
              style={{ backgroundColor: themeColors.bgColor(1) }}
              onPress={() => dispatch(addToCart(dish))} // Dispatch action to add to cart
            >
              <Icon.Plus
                stroke={"white"}
                height={20}
                width={20}
                strokeWidth={2}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default DishMenu;
