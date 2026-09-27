import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from "react-native";
import { CartItem } from "../data";
  
  export function CartScreen({
    items,
  }: {
    items: CartItem[];
  }) {
    const total = items.reduce(
      (sum, item) => sum + item.book.price * item.quantity,
      0
    );
  
    return (
      <View style={styles.screen}>
        <Text style={styles.title}>Giỏ hàng</Text>
  
        {items.length === 0 ? (
          <View style={styles.empty}>
            <Text style={styles.emptyText}>
              Giỏ hàng đang trống
            </Text>
          </View>
        ) : (
          <>
            <ScrollView
              style={styles.scroll}
              contentContainerStyle={styles.content}
              showsVerticalScrollIndicator={false}
            >
              {items.map((item) => (
                <View key={item.book.id} style={styles.item}>
                  {/* Ảnh sách */}
                  <Image
                    source={{ uri: item.book.cover }}
                    style={styles.cover}
                  />
  
                  {/* Thông tin sách */}
                  <View style={styles.itemInfo}>
                    <Text
                      style={styles.itemTitle}
                      numberOfLines={2}
                    >
                      {item.book.title}
                    </Text>
  
                    <Text style={styles.author}>
                      {item.book.author}
                    </Text>
  
                    <Text style={styles.price}>
                      {item.book.price.toLocaleString("vi-VN")} đ
                    </Text>
  
                    <Text style={styles.quantity}>
                      Số lượng: {item.quantity}
                    </Text>
                  </View>
                </View>
              ))}
            </ScrollView>
  
            {/* Tổng tiền */}
            <View style={styles.totalBox}>
              <Text style={styles.totalLabel}>
                Tổng tiền
              </Text>
  
              <Text style={styles.totalPrice}>
                {total.toLocaleString("vi-VN")} đ
              </Text>
            </View>
          </>
        )}
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    screen: {
      flex: 1,
      backgroundColor: "#F8FAFC",
    },
  
    title: {
      fontSize: 24,
      fontWeight: "700",
      color: "#111827",
      paddingHorizontal: 16,
      paddingTop: 16,
      paddingBottom: 12,
    },
  
    scroll: {
      flex: 1,
    },
  
    content: {
      padding: 16,
      paddingBottom: 120,
    },
  
    item: {
      flexDirection: "row",
      backgroundColor: "#FFFFFF",
      borderRadius: 12,
      padding: 12,
      marginBottom: 12,
    },
  
    cover: {
      width: 80,
      height: 110,
      borderRadius: 8,
      backgroundColor: "#EEF2F7",
    },
  
    itemInfo: {
      flex: 1,
      marginLeft: 12,
      justifyContent: "center",
    },
  
    itemTitle: {
      fontSize: 16,
      fontWeight: "700",
      color: "#111827",
      marginBottom: 6,
    },
  
    author: {
      fontSize: 14,
      color: "#6B7280",
      marginBottom: 6,
    },
  
    price: {
      fontSize: 16,
      fontWeight: "700",
      color: "#DC2626",
      marginBottom: 6,
    },
  
    quantity: {
      fontSize: 14,
      color: "#374151",
    },
  
    totalBox: {
      position: "absolute",
      left: 16,
      right: 16,
      bottom: 72,
      backgroundColor: "#FFFFFF",
      borderRadius: 12,
      padding: 16,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
  
      elevation: 4,
      shadowColor: "#000",
      shadowOpacity: 0.1,
      shadowRadius: 6,
      shadowOffset: {
        width: 0,
        height: 2,
      },
    },
  
    totalLabel: {
      fontSize: 16,
      fontWeight: "600",
      color: "#111827",
    },
  
    totalPrice: {
      fontSize: 18,
      fontWeight: "700",
      color: "#DC2626",
    },
  
    empty: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
  
    emptyText: {
      fontSize: 16,
      color: "#6B7280",
    },
  });