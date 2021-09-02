import React from "react";
import { View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { styles } from "./styles";
import { Guild, GuildProps } from "../../components/Guild";
import { ListDivider } from "../../components/ListDivider";

type Props = {
  handleGuildSelected: (guild: GuildProps) => void;
};

export function Guilds({ handleGuildSelected }: Props) {
  const guilds = [
    {
      id: "1",
      name: "Lendários",
      icon: "image.png",
      owner: true,
    },
    {
      id: "2",
      name: "Gamers",
      icon: "image.png",
      owner: true,
    },
    {
      id: "3",
      name: "Gamers",
      icon: "image.png",
      owner: true,
    },
    {
      id: "4",
      name: "Gamers",
      icon: "image.png",
      owner: true,
    },
    {
      id: "5",
      name: "Gamers",
      icon: "image.png",
      owner: true,
    },
    {
      id: "6",
      name: "Gamers",
      icon: "image.png",
      owner: true,
    },
  ];
  return (
    <View style={styles.container}>
      <FlatList
        data={guilds}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Guild data={item} onPress={() => handleGuildSelected(item)} />
        )}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <ListDivider />}
        style={styles.guilds}
        contentContainerStyle={{ paddingBottom: 32, paddingTop: 104 }}
        ListHeaderComponent={() => <ListDivider />}
      />
    </View>
  );
}
