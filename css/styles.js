import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "FFFFFF",
    paddingLeft: 15,
    paddingRight: 15,
    marginTop: "10%",
  },
  inputContent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: 0,
    gap: 10,
    width: "100%",
    marginBottom: 20,
  },
  inputContentsecond: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: 0,
    gap: 10,
    width: "67%",
    marginBottom: 20,
  },
  inputContentthird: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: 0,
    gap: 10,
    width: "48.5%",
    marginBottom: 20,
  },
  inputContentfourth: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: 0,
    gap: 10,
    width: "30%",
    marginBottom: 20,
  },
  label: {
    fontSize: 12,
    fontWeight: 400,
    lineHeight: 15,
    color: "#374857",
  },
  selected: {
    width: "100%",
    height: 60,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 20,
    paddingLeft: 14,
    paddingRight: 14,
    gap: 14,
    backgroundColor: "#E8E7E7",
    borderWidth: 1,
    borderColor: "#E8E7E7",
    borderRadius: 10,
    overflow: "hidden",
  },
  textarea: {
    width: "100%",
    height: 130,
    textAlignVertical: "top",
    paddingLeft: 14,
    paddingRight: 14,
    paddingVertical: 20,
    gap: 14,
    backgroundColor: "#E8E7E7",
    borderRadius: 10,
  },
  input: {
    width: "100%",
    height: 60,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 20,
    paddingLeft: 14,
    paddingRight: 14,
    gap: 14,
    backgroundColor: "#E8E7E7",
    borderRadius: 10,
  },
  inputContainerSecond: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    gap: 10,
  },
  title: {
    // fontFamily: "Inter",
    fontSize: 32,
    fontWeight: 700,
    lineHeight: 39,
    color: "#374857",
    marginBottom: 50,
    marginTop: 15,
  },
  checkContent: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 8,
    marginBottom: 25,
  },
  checkButton: {},
  buttonContent: {
    flexDirection: "row",
    gap: 8,
    marginBottom: 20,
  },
  buttonContainer: {
    width: 180,
  },
  buttonPrimary: {
    width: "100%",
    height: 60,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 20,
    paddingLeft: 14,
    paddingRight: 14,
    gap: 8,
    backgroundColor: "#5E548E",
    borderRadius: 10,
  },
  buttonSecond: {
    width: "100%",
    height: 60,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 20,
    paddingLeft: 14,
    paddingRight: 14,
    gap: 8,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#5E548E",
  },
  buttonTitlePrimary: {
    fontSize: 18,
    fontWeight: 700,
    lineHeight: 22,
    color: "#ffffff",
  },
  buttonTitleSecond: {
    fontSize: 18,
    fontWeight: 700,
    lineHeight: 22,
    color: "#5E548E",
  },
  buttonPrev: {
    position: "absolute",
    top: 10,
    left: 10,
    padding: 10,
  },
  logo: {
    width: 350,
    height: 350,
    marginBottom: 70,
  },
  profileContainer: {
    width: "100%",
    gap: 20,
  },
  divisor: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  titleDivisor: {
    fontSize: 14,
    lineHeight: 17,
    fontWeight: 400,
    color: "#374857",
  },
  hr: {
    width: "35%",
    height: 1,
    backgroundColor: "#ACACAC",
    marginVertical: 10,
  },
  homeContainer: {
    flex: 1,
    flexDirection: "column",
  },
  taskHomeContainer: {
    flex: 0.85,
    width: "100%",
    marginTop: "30%",
    // paddingHorizontal: 15,
    paddingVertical: 20,
  },
  tabContainer: {
    flex: 0.2,
    width: "100%",
    position: "absolute",
    bottom: 0,
    padding: 10,
  },
  tabContent: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "#5E548E",
    height: 80,
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 20,
    marginBottom: 15,
  },
  tabButton: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: 80,
    height: 60,
    borderRadius: 10,
  },
  tabButtonActive: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: 80,
    height: 60,
    borderRadius: 10,
    backgroundColor: "#433E59",
  },
  tabText: {
    color: "#FFFFFF",
    fontSize: 12,
  },
  searchContainer: {
    flex: 0.15,
    width: "100%",
    position: "absolute",
    top: 35,
    padding: 20,
  },
  searchContent: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: "#5E548E",
  },
  inputSearch: {
    width: "80%",
    alignSelf: "stretch",
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 10,
    backgroundColor: "#5E548E",
    color: "#FFFFFF",
  },
  tabTitle: {
    color: "#fff",
  },
  taskContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "92%",
    height: 90,
    backgroundColor: "#E8E7E7",
    marginBottom: 35,
    marginLeft: 15,
    marginRight: 15,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  perfilContainer: {
    flex: 1,
  },
  perfilContent: {
    flex: 0.87,
  },
  perfilDataContent: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "FFFFFF",
    paddingLeft: 15,
    paddingRight: 15,
    marginTop: "10%",
  },
  buttonPerfilContainer: {
    width: "100%",
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
  iconContent: {
    width: "20%",
    marginLeft: 15,
  },
  titleContent: {
    width: "40%",
    // marginHorizontal: 10,
  },
  imgContent: {
    width: "25%",
  },
  imgCard: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#D9D9D9",
  },
  iconCard: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "80%",
    borderRadius: 100,
    backgroundColor: "#5E548E",
  },
  titleCardPrimary: {
    fontSize: 16,
    fontWeight: 600,
  },
  titleCardSecond: {
    fontSize: 12,
  },
});
