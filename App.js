import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import axios from "axios";

export default function App() {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const apiReq = {
      method: "GET",
      url: "https://api.github.com/users/bossoncode",
      headers: {
        "Content-Type": "application/json",
      },
    };
    setTimeout(() => {
      axios(apiReq)
        .then((res) => {
          setData(res.data);
          setIsLoading(false);
          console.log(data);
        })
        .catch((err) => {
          console.log(err);
        });
    }, 1000);
  }, []);

  return (
    <>
      {isLoading ? (
        <Text>Loading...</Text>
      ) : (
        <View style={styles.container}>
          <StatusBar style="auto" />
          <View style={styles.searchBar}>
            <TextInput
              style={styles.searchInput}
              placeholder="Enter GitHub Username"
            />
          </View>
          <View style={styles.boxes}>
            <View style={styles.box}>
              <Text style={styles.boxText}>Followers</Text>
              <Text style={styles.boxTextBig}>5.7k</Text>
            </View>
            <View style={styles.box}>
              <Text style={styles.boxText}>Following</Text>
              <Text style={styles.boxTextBig}>5.7k</Text>
            </View>
            <View style={styles.box}>
              <Text style={styles.boxText}>Repositories</Text>
              <Text style={styles.boxTextBig}>69</Text>
            </View>
            <View style={styles.box}>
              <Text style={styles.boxText}>Gists</Text>
              <Text style={styles.boxTextBig}>69</Text>
            </View>
            <View style={styles.box}>
              <Text style={styles.boxText}>Stars</Text>
              <Text style={styles.boxTextBig}>69</Text>
            </View>
            <View style={styles.box}>
              <Text style={styles.boxText}>Hirable</Text>
              <Text style={styles.boxTextBig}>Yes</Text>
            </View>
          </View>
          <View style={styles.card}></View>
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#131324",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  searchBar: {
    width: "90%",
    height: 60,
    backgroundColor: "rgba(255, 255, 255,0.2)",
    borderRadius: 10,
    marginTop: 70,
  },
  searchInput: {
    width: "100%",
    height: "100%",
    padding: 10,
    fontSize: 20,
    color: "#fff",
  },
  boxes: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    height: "100%",
    marginTop: 50,
  },
  box: {
    width: 200,
    height: 200,
    backgroundColor: "rgba(255, 255, 255,0.2)",
    margin: 10,
    borderRadius: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  boxText: {
    fontSize: 25,
    color: "#fff",
    textAlign: "center",
    marginTop: 10,
  },
  boxTextBig: {
    fontSize: 50,
    color: "#fff",
    textAlign: "center",
    marginTop: 10,
    fontWeight: "bold",
  },
  card: {
    width: "90%",
    height: 250,
    backgroundColor: "rgba(255, 255, 255,0.2)",
    borderRadius: 10,
    marginBottom: 30,
  },
});
