import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { themeColors } from "../theme";
import RestaurantCard from "./RestaurantCard";

const FeaturedRow = ({ title, description, data }) => {
  return (
    <View className="space-y-1">
      <View className="flex-row justify-between items-center px-1">
        <View style={{ flex: 1 }}>
          <Text className="text-lg font-bold">{title}</Text>
          <Text
            className="text-gray-500 text-sm"
            numberOfLines={2} // Limits description to 2 lines
            ellipsizeMode="tail" // Adds ellipsis at the end if text overflows
          >
            {description}
          </Text>
        </View>
        <TouchableOpacity>
          <Text style={{ color: themeColors.text }} className="font-semibold">
            see all
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        className="overflow-visible"
      >
        {data && data.length > 0 ? (
          data.map((item, index) => <RestaurantCard item={item} key={index} />)
        ) : (
          <Text>No items available</Text>
        )}
      </ScrollView>
    </View>
  );
};
export default FeaturedRow;
