import React, { ReactNode } from "react";
import {
  View,
  Modal,
  ModalProps,
  TouchableWithoutFeedback,
} from "react-native";
import { Bakcground } from "../Background";
import { styles } from "./styles";

type Props = ModalProps & {
  children: ReactNode;
  closeModal: () => void;
};

export function ModalView({ children, closeModal, ...rest }: Props) {
  return (
    <Modal transparent animationType="slide" {...rest} statusBarTranslucent>
      <TouchableWithoutFeedback onPress={closeModal}>
        <View style={styles.overlay}>
          <View style={styles.container}>
            <Bakcground>
              <View style={styles.bar} />
              {children}
            </Bakcground>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}
