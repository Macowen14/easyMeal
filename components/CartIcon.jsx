import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { themeColors } from "../theme";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";

const CartIcon = () => {
  const navigation = useNavigation();
  const cartTotal = useSelector((state) => state.cart.totalQuantity);
  const cartTotalPrice = useSelector((state) => state.cart.totalPrice);

  return (
    <View className="absolute bottom-5 w-full z-50">
      <TouchableOpacity
        onPress={() => navigation.navigate("Cart")}
        style={{ backgroundColor: themeColors.bgColor(1) }}
        className="flex-row justify-between items-center mx-5 rounded-full p-4 py-3 shadow-lg"
        disabled={cartTotal === 0}
      >
        <View
          className="p-2 px-4 rounded-full"
          style={{ backgroundColor: "rgba(255,255,255,0.3)" }}
        >
          <Text className="font-extrabold text-lg text-white">{cartTotal}</Text>
        </View>
        <Text className="flex-1 text-center font-extrabold text-white text-lg">
          View cart
        </Text>
        <Text className="font-extrabold text-white text-lg">
          ${cartTotalPrice.toFixed(2)}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CartIcon;

const styles = StyleSheet.create({});
