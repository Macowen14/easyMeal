import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import MapView, { Marker } from "react-native-maps";
import { themeColors } from "../theme";
import * as Icon from "react-native-feather";
import { BackHandler, ToastAndroid } from "react-native";
import { useSelector } from "react-redux";

const DeliveryScreen = () => {
  const restaurant = useSelector((state) => state.restaurant.currentRestaurant);
  const navigation = useNavigation();

  useEffect(() => {
    const backAction = () => {
      navigation.navigate("Home");
      return true; // Returning true indicates that we have handled the back button
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    // Clean up the event listener on component unmount
    return () => backHandler.remove();
  }, [navigation]);

  return (
    <View className="flex-1 ">
      {/* Map view */}
      <MapView
        initialRegion={{
          latitude: restaurant.lat,
          longitude: restaurant.long,
          longitudeDelta: 0.1,
          latitudeDelta: 0.1,
        }}
        className="flex-1"
        mapType="standard"
      >
        <Marker
          coordinate={{ latitude: restaurant.lat, longitude: restaurant.long }}
          pinColor={themeColors.bgColor(1)}
          title={restaurant.name}
          description={restaurant.description}
        />
      </MapView>

      {/* Restaurant info */}
      <View className=" rounded-t-3xl p-4" style={styles.infoContainer}>
        <View className="flex flex-row justify-between">
          <View className="flex-col justify-between">
            <Text className="text-lg text-gray-700 font-semibold">
              Estimated Arrival
            </Text>
            <Text className="text-3xl font-extrabold text-gray-700">
              20-30 minutes
            </Text>
            <Text className="mt-2 text-gray-700 font-semibold">
              Your order is on the way
            </Text>
          </View>
          <View className="fle flex-row items-center">
            <Image
              className="w-20 h-20 "
              source={require("../assets/images/delivery-bike.png")}
            />
          </View>
        </View>
        <View
          style={{ backgroundColor: themeColors.bgColor(0.8) }}
          className="p-1 flex-row justify-between items-center rounded-full my-5 mx-2 space-x-2"
        >
          <View
            className="p-1 rounded-full"
            style={{ backgroundColor: "rgba(255,255,255,0.4)" }}
          >
            <Image
              className="h-16 w-16 rounded-full"
              source={require("../assets/images/delivery-guy.jpeg")}
            />
          </View>
          <View className="flex-1">
            <Text className="text-white font-bold">John Doe</Text>
            <Text className="text-xs text-white font-semibold">
              Delivering your order to 123 Main St.
            </Text>
          </View>
          <View className="flex-row items-center space-x-2">
            <TouchableOpacity className="bg-white rounded-full p-2">
              <Icon.Phone
                stroke={themeColors.bgColor(1)}
                fill={themeColors.bgColor(1)}
              />
            </TouchableOpacity>
            <TouchableOpacity
              className="bg-white rounded-full p-2"
              onPress={() => navigation.navigate("Home")}
            >
              <Icon.X stroke={"red"} strokeWidth={4} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  infoContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "whitesmoke",
  },
});

export default DeliveryScreen;
