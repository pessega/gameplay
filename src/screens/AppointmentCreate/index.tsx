import React, { useState } from "react";
import { Feather } from "@expo/vector-icons";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  View,
} from "react-native";
import { Bakcground } from "../../components/Background";
import { Header } from "../../components/Header";
import { theme } from "../../global/styles/theme";
import { styles } from "./styles";
import { CategorySelect } from "../../components/CategorySelect";
import { RectButton } from "react-native-gesture-handler";
import { GuildIcon } from "../../components/GuildIcon";
import { TextArea } from "../../components/TextArea";
import { SmallIput } from "../../components/SmallInput";
import { Button } from "../../components/Button";
import { ModalView } from "../../components/ModalView";
import { Guilds } from "../Guilds";
import { GuildProps } from "../../components/Guild";

export function AppointmentCreate() {
  const [category, setCategory] = useState("");
  const [openGuildsModal, setOpenGuildsModal] = useState(false);
  const [guild, setGuild] = useState<GuildProps>({} as GuildProps);

  function handleOpenGuilds() {
    setOpenGuildsModal(true);
  }

  function handleCloseGuilds() {
    setOpenGuildsModal(false);
  }

  function handleGuildSelect(guildSelected: GuildProps) {
    setGuild(guildSelected);
    setOpenGuildsModal(false);
  }

  function handleCategorySelected(categoryId: string) {
    setCategory(categoryId);
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <Bakcground>
        <ScrollView>
          <Bakcground>
            <Header title="Agendar partida" />
            <Text
              style={[
                styles.label,
                { marginLeft: 24, marginTop: 36, marginBottom: 18 },
              ]}
            >
              Categoria
            </Text>
            <CategorySelect
              hasCheckBox
              setCategory={handleCategorySelected}
              categorySelected={category}
            />
            <View style={styles.form}>
              <RectButton onPress={handleOpenGuilds}>
                <View style={styles.select}>
                  {guild.icon ? <GuildIcon /> : <View style={styles.image} />}
                  <View style={styles.selectBody}>
                    <Text style={styles.label}>
                      {guild.name ? guild.name : "Selecione um servidor"}
                    </Text>
                  </View>
                  <Feather
                    name="chevron-right"
                    color={theme.colors.heading}
                    size={18}
                  />
                </View>
              </RectButton>
              <View style={styles.field}>
                <View>
                  <Text style={[styles.label, { marginBottom: 12 }]}>
                    Dia e mês
                  </Text>
                  <View style={styles.column}>
                    <SmallIput maxLength={2} />
                    <Text style={styles.divider}>/</Text>
                    <SmallIput maxLength={2} />
                  </View>
                </View>
                <View>
                  <Text style={[styles.label, { marginBottom: 12 }]}>
                    Horário
                  </Text>
                  <View style={styles.column}>
                    <SmallIput maxLength={2} />
                    <Text style={styles.divider}>:</Text>
                    <SmallIput maxLength={2} />
                  </View>
                </View>
              </View>

              <View style={[styles.field, { marginBottom: 12 }]}>
                <Text style={styles.label}>Descrição</Text>
                <Text style={styles.caractersLimit}>Máx. 100 caracteres</Text>
              </View>

              <TextArea
                autoCorrect={false}
                multiline
                maxLength={100}
                numberOfLines={5}
              />
              <View style={styles.footer}>
                <Button text="Agendar" />
              </View>
            </View>
          </Bakcground>
        </ScrollView>
      </Bakcground>
      <ModalView visible={openGuildsModal} closeModal={handleCloseGuilds}>
        <Guilds handleGuildSelected={handleGuildSelect} />
      </ModalView>
    </KeyboardAvoidingView>
  );
}
