import { Text, View, TouchableOpacity, TextInput } from "react-native";
import React, { useState } from "react";
import {
  Search,
  Map,
  Sliders,
  User,
  ShoppingCart,
  LogOut,
} from "react-native-feather";
import { themeColors } from "../theme";
import { useSelector } from "react-redux";
import { useNavigation } from "expo-router";

const SearchBar = () => {
  const navigation = useNavigation();
  const [viewMenu, setViewMenu] = useState(false);
  const cartTotal = useSelector((state) => state.cart.totalQuantity);
  return (
    <View className="flex-row  items-center space-x-2 px-4 mt-4">
      <View className="flex-row flex-1 items-center p-3 rounded-full border border-gray-300">
        <Search height="25" width="25" stroke={"gray"} />
        <TextInput placeholder="Restaurants" className="ml-2 flex-1" />
        <View className="flex-row items-centerspace-x-1 border-0 border-l-2 pl-2 border-l-gray-300 ">
          <Map height={20} width={20} stroke={"gray"} />
          <Text className="text-gray-600">New York, NYC</Text>
        </View>
      </View>
      <View
        className="p-3 rounded-full"
        style={{ backgroundColor: themeColors.bgColor(1) }}
      >
        <TouchableOpacity
          onPress={() => {
            setViewMenu(!viewMenu);
          }}
        >
          <Sliders height="20" width="20" stroke={"white"} strokeWidth={2.5} />
        </TouchableOpacity>
      </View>
      {viewMenu && (
        <View
          className="absolute space-y-3 top-10 z-20 right-5 rounded-3xl w-28 flex flex-col justify-evenly items-center h-36 p-2 pb-2"
          style={{ backgroundColor: themeColors.bgColor(0.9) }}
        >
          <TouchableOpacity>
            <Text className="text-medium font-semibold text-white">
              <ShoppingCart stroke={"darkgray"} />
              view cart <Text className="text-xs text-black">{cartTotal}</Text>
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text className="text-medium font-semibold text-white">
              <User stroke={"white"} /> profile
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text className="text-medium font-semibold text-white">
              <LogOut stroke={"gray"} />
              logout
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default SearchBar;
