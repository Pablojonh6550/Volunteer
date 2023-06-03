import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC65GFobzhtY8X0u-TNN0L58jl0fH8S6Wo",
  authDomain: "volunteer2-bc789.firebaseapp.com",
  projectId: "volunteer2-bc789",
  storageBucket: "volunteer2-bc789.appspot.com",
  messagingSenderId: "599231924144",
  appId: "1:599231924144:web:8fe9e890a518511a907875",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const createUser = async (data, adress) => {
  try {
    const docRef = await addDoc(collection(db, "users"), {
      name: data.name,
      email: data.email,
      phone: data.phone,
      sex: data.sex,
      birth: data.birth,
      password: data.password,
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export { db, createUser };
