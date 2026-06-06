import { StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🛡️ Focus Guardian</Text>

      <View style={styles.card}>
        <Text style={styles.heading}>Today's Focus Score</Text>
        <Text style={styles.score}>0</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.info}>📚 Learning Time: 0h</Text>
        <Text style={styles.info}>📱 Distraction Time: 0h</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.heading}>Today's Goal</Text>
        <Text style={styles.goal}>Complete Java Arrays Module</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.heading}>Sleep Schedule</Text>
        <Text style={styles.info}>🌙 Sleep: 11:00 PM</Text>
        <Text style={styles.info}>☀️ Wake: 6:30 AM</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0f172a",
    padding: 20,
    justifyContent: "center",
  },

  title: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 25,
  },

  card: {
    backgroundColor: "#1e293b",
    padding: 20,
    borderRadius: 15,
    marginBottom: 15,
  },

  heading: {
    color: "#38bdf8",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },

  score: {
    color: "#22c55e",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
  },

  info: {
    color: "white",
    fontSize: 16,
    marginBottom: 8,
  },

  goal: {
    color: "#facc15",
    fontSize: 16,
  },
});
