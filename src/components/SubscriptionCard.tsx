import clsx from "clsx";
import { Image, Pressable, Text, View } from "react-native";
import { formatCurrency, formatSubscriptionDateTime } from "../../libs/utils";

const SubscriptionCard = ({
  name,
  price,
  billing,
  currency,
  icon,
  color,
  renewalDate,
  category,
  plan,
  onPress,
  expanded
}: SubscriptionCardProps) => {
  return (
    <Pressable
      onPress={() => {}}
      className={clsx("sub-card", expanded ? 'sub-card-expanded' : 'bg-card')}
      style={!expanded && color ? { backgroundColor: color } : undefined}
    >
      <View className="sub-head">
        <View className="sub-main">
          <Image source={icon} className="sub-icon" />
          <View className="sub-copy">
            <Text className="sub-title" numberOfLines={1}>
              {name}
            </Text>
            <Text numberOfLines={1} ellipsizeMode="tail" className="sub-meta">
              {category?.trim() ||
                plan?.trim() ||
                (renewalDate ? formatSubscriptionDateTime(renewalDate) : "")}
            </Text>
          </View>
        </View>
        <View className="sub-price-box">
          <Text className="sub-price">{formatCurrency(price, currency)}</Text>
          <Text className="sub-billing">{billing}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default SubscriptionCard;
