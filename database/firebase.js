import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc, getDocs } from "firebase/firestore";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { useNavigation } from "@react-navigation/native";
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
const auth = getAuth(app);
const createUser = async (data, adress) => {
  try {
    const auth = getAuth(app);
    const docRef = await addDoc(collection(db, "users"), {
      name: data.name,
      email: data.email,
      phone: data.phone,
      sex: data.sex,
      birth: data.birth,
      password: data.password,
      road: adress.road,
      district: adress.district,
      number: adress.number,
      city: adress.city,
      uf: adress.uf,
      cep: adress.cep,
      complement: adress.complement,
    });

    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then(() => {
        console.log("Usuário cadastrado: ", docRef.id);
      })
      .catch((error) => {
        console.error("Erro ao cadastrar usuário:", error);
      });
    console.log("Usuário cadastrado: ", docRef.id);
  } catch (error) {
    console.error("Erro ao cadastrar usuário:", error);
  }
};
const createUserInst = async (data, adress) => {
  try {
    const auth = getAuth(app);
    const docRef = await addDoc(collection(db, "users"), {
      name: data.name,
      email: data.email,
      phone: data.phone,
      cnpj: cnpj,
      password: data.password,
      road: adress.road,
      district: adress.district,
      number: adress.number,
      city: adress.city,
      uf: adress.uf,
      cep: adress.cep,
      complement: adress.complement,
    });

    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then(() => {
        console.log("Usuário cadastrado: ", docRef.id);
      })
      .catch((error) => {
        console.error("Erro ao cadastrar usuário:", error);
      });
    console.log("Usuário cadastrado: ", docRef.id);
  } catch (error) {
    console.error("Erro ao cadastrar usuário:", error);
  }
};

export {
  db,
  createUser,
  createUserInst,
  auth,
  onAuthStateChanged,
  getDocs,
  collection,
};
