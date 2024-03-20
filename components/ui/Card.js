import { StyleSheet, View } from "react-native";
import Colors from "../../constants/colors";

function Card({ children }) {
  return <View style={styles.card}>{children}</View>;
}

export default Card;

const styles = StyleSheet.create({
  card: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 36,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: Colors.primary800,
    borderRadius: 8,
    elevation: 4, //specific to android to add shadow
    shadowColor: "black", //specific to iOS
    shadowOffset: { width: 0, height: 2 }, //specific to iOS
    shadowRadius: 6, //specific to iOS
    shadowOpacity: 0.25, //specific to iOS
  },
});
