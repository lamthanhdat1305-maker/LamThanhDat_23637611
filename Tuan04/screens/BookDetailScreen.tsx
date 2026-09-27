import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export function BookDetailScreen({
  book,
  onBack,
  onAddToCart,
}: {
  book: any;
  onBack: () => void;
  onAddToCart: () => void;
}) {
  return (
    <View style={styles.screen}>
      <TouchableOpacity style={styles.backButton} onPress={onBack}>
        <Text style={styles.backText}>← Quay lại</Text>
      </TouchableOpacity>

      <View style={styles.content}>
        <Text style={styles.title}>{book.title}</Text>

        <Text style={styles.author}>
          Tác giả: {book.author}
        </Text>

        <Text style={styles.price}>
          {book.price?.toLocaleString("vi-VN")} đ
        </Text>

        <Text style={styles.description}>
          {book.description || "Chưa có mô tả cho sách này."}
        </Text>

        <TouchableOpacity
          style={styles.addButton}
          onPress={onAddToCart}
        >
          <Text style={styles.addButtonText}>
            Thêm vào giỏ hàng
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#F8FAFC",
  },

  backButton: {
    paddingHorizontal: 16,
    paddingVertical: 14,
  },

  backText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#2563EB",
  },

  content: {
    padding: 20,
  },

  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "#111827",
    marginBottom: 12,
  },

  author: {
    fontSize: 16,
    color: "#5B6B7F",
    marginBottom: 12,
  },

  price: {
    fontSize: 20,
    fontWeight: "700",
    color: "#DC2626",
    marginBottom: 20,
  },

  description: {
    fontSize: 15,
    lineHeight: 24,
    color: "#374151",
    marginBottom: 30,
  },

  addButton: {
    backgroundColor: "#2563EB",
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
  },

  addButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "700",
  },
});