import { Text, View } from "react-native";
import { GoogleInputProps } from "@/types/type";

const GoogleTextInput = ({
  icon,
  initiallocation,
  containerStyle,
  textInputBackgroundColor,
  handlePress,
}: GoogleInputProps) => (
  <View
    className={`flex flex-row items-center justify-center relative z-50 rounded-xl ${containerStyle} mb-5`}
  >
    <Text>Search</Text>
  </View>
);

export default GoogleTextInput;
