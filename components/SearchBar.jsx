import { Text, View, TouchableOpacity, TextInput } from "react-native";
import React from "react";
import { Search, Map, Sliders } from "react-native-feather";
import { themeColors } from "../theme";

const SearchBar = () => {
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
        <TouchableOpacity>
          <Sliders height="20" width="20" stroke={"white"} strokeWidth={2.5} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SearchBar;
