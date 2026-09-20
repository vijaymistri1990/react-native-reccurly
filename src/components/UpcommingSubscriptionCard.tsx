import { Image, Text, View } from "react-native";
import { formatCurrency } from "../../libs/utils";

const UpcommingSubscriptionCard = ({
  data,
}: {
  data: UpcomingSubscription;
}) => {
  return (
    <View className="upcoming-card">
      <View className="upcoming-row">
        <Image source={data.icon} className="upcoming-icon" />
        <View>
          <Text className="upcoming-price">
            {formatCurrency(data.price, data.currency)}t
          </Text>
          <Text className="upcoming-meta" numberOfLines={1}>
            {data.daysLeft > 1 ? `${data.daysLeft} days left` : "last date"}
          </Text>
        </View>
      </View>
      <Text className="upcoming-name" numberOfLines={1}>
        {data.name}
      </Text>
    </View>
  );
};

export default UpcommingSubscriptionCard;
