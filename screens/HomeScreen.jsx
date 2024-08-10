import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import SearchBar from "../components/SearchBar";
import Categories from "../components/Categories";
import featuredData from "../constants/featured";
import FeaturedRow from "../components/FeaturedRow";

const HomeScreen = () => {
  return (
    <SafeAreaView className="flex-1 bg-white pt-2">
      <StatusBar barStyle={"dark-content"} backgroundColor={"white"} />
      <SearchBar />
      {/*Main */}

      <ScrollView
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 20,
        }}
      >
        {/*categories */}
        <Categories />

        {/* featured */}
        <View className="mt-5">
          {
            // featured items
            featuredData && featuredData.length > 0 ? (
              featuredData.map((item) => (
                <FeaturedRow
                  key={item.id}
                  title={item.name}
                  description={item.description}
                  data={item.data}
                />
              ))
            ) : (
              <Text>No featured data available</Text>
            )
          }
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
