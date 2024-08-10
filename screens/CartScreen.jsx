import { Text, View, TouchableOpacity, Image, ScrollView } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { themeColors } from "../theme";
import { restaurants } from "../constants/Restaurants";
import { ArrowLeft, Minus } from "react-native-feather";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../redux/cart/cartActions";

const CartScreen = () => {
  const navigation = useNavigation();
  const restaurant = restaurants[0]; // Sample restaurant, should be fetched from state
  const cart = useSelector((state) => state.cart);
  const cartItems = cart.items;
  const dispatch = useDispatch();

  return (
    <View className="flex-1 bg-white pt-2 space-y-3">
      <View className="relative shadow-sm">
        <TouchableOpacity
          className="absolute z-10 rounded-full p-2 top-4 left-2 bg-gray-800"
          onPress={() => navigation.goBack()}
        >
          <ArrowLeft strokeWidth={3} stroke={"white"} />
        </TouchableOpacity>
        <View className="items-center">
          <Text className="text-center text-xl font-bold">Your cart</Text>
          <Text className="text-center text-gray-500">{restaurant.name}</Text>
        </View>
      </View>

      <View className="flex-row items-center px-4 bg-gray-200">
        <Image source={restaurant?.image} className="w-20 h-20 rounded-full" />
        <Text className="flex-1 pl-4">Delivery in 20-30 minutes</Text>
        <TouchableOpacity>
          <Text className="font-bold text-blue-600">Change</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 50 }}
        className="bg-white pt-5"
      >
        {cartItems.map((item, index) => (
          <View
            className="flex-row items-center space-x-3 py-2 px-4 bg-amber-50 rounded-3xl mb-3 mx-2 shadow-xl"
            key={index}
          >
            <Image
              source={require("../assets/images/dishes/images (3).jpeg")}
              className="h-14 w-14 rounded-full"
            />
            <Text className="font-bold text-gray-800">{item.quantity} x</Text>
            <Text className="flex-1 font-bold text-gray-700">{item.name}</Text>
            <Text className="font-semibold text-base">
              ${(item.price * item.quantity).toFixed(2)}
            </Text>
            <TouchableOpacity
              className="p-1 rounded-full bg-gray-800"
              onPress={() => {
                dispatch(removeFromCart(item));
              }}
            >
              <Minus strokeWidth={2} height={20} width={20} stroke={"white"} />
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>

      <View
        className="p-6 rounded-t-3x space-y-4 rounded-t-3xl"
        style={{ backgroundColor: themeColors.bgColor(0.3) }}
      >
        <View className="flex-row justify-between">
          <Text className="text-gray-700">Subtotal</Text>
          <Text className="text-gray-700">${cart.totalPrice.toFixed(2)}</Text>
        </View>
        <View className="flex-row justify-between">
          <Text className="text-gray-700">Delivery Fee</Text>
          <Text className="text-gray-700">$5.00</Text>
        </View>
        <View className="flex-row justify-between">
          <Text className="text-gray-700">Order Total</Text>
          <Text className="text-gray-700 font-extrabold">
            ${(cart.totalPrice + 5).toFixed(2)}
          </Text>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate("orderPreparing")}
            className="p-3 rounded-full bg-blue-600"
          >
            <Text className="text-white font-bold text-lg text-center">
              Checkout
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CartScreen;
