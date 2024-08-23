import {
  IconListCheck,
  IconListDetails,
  IconScriptPlus,
} from "@tabler/icons-react-native";

type Props = {
  name: string;
  color: string;
};

export function TabBarIcon({ name, color, ...rest }: Props) {
  if (name === "pending") return <IconListDetails color={color} {...rest} />;

  if (name === "all") return <IconListCheck color={color} {...rest} />;

  if (name === "new") return <IconScriptPlus color={color} {...rest} />;
}
