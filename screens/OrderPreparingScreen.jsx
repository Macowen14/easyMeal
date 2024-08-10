import { Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { themeColors } from "../theme";

const OrderPreparing = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      // move to delively screen
      navigation.navigate("Delivery");
    }, 3000);
  }, []);
  return (
    <View className="flex-1 bg-white justify-center items-center">
      <Text className="text-xl font-bold" style={{ color: themeColors.text }}>
        Preparing Order
      </Text>

      <Image
        className="w-72 h-72 animate-bounce"
        source={require("../assets/images/delivery-bike.png")}
      />
    </View>
  );
};

export default OrderPreparing;

const styles = StyleSheet.create({});
