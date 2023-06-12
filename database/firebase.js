import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import "react-native-get-random-values";
import { collection, addDoc, getDocs, setDoc, doc } from "firebase/firestore";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { v4 as uuidv4 } from "uuid";

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
    // const docRef = await addDoc(collection(db, "users"));
    const userData = {
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
    };
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      data.email,
      data.password
    );
    const user = userCredential.user;

    setDoc(doc(db, "users", user.uid), userData)
      .then(() => {
        console.log("Dados do usuário armazenados com sucesso!");
      })
      .catch((error) => {
        console.error("Erro ao armazenar dados do usuário:", error);
      });
  } catch (error) {
    console.error("Erro ao cadastrar usuário:", error);
  }
};

const createUserInst = async (data, adress) => {
  try {
    const auth = getAuth(app);
    const data = {
      name: data.name,
      email: data.email,
      phone: data.phone,
      cnpj: data.cnpj,
      password: data.password,
      road: adress.road,
      district: adress.district,
      number: adress.number,
      city: adress.city,
      uf: adress.uf,
      cep: adress.cep,
      complement: adress.complement,
    };
    const docRef = await addDoc(collection(db, "users"));

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

const registerTask = async (data) => {
  try {
    const randomId = uuidv4();
    await setDoc(doc(db, "tasks", randomId.toString()), data);
    console.log("Dados da atividade armazenados com sucesso!");
  } catch (error) {
    console.error("Erro ao cadastrar atividade:", error);
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
  registerTask,
};
