import { initializeApp } from "firebase/app";
import {
  getFirestore,
  addDoc,
  getDocs,
  getDoc,
  collection,
  doc,
  query,
  where,
  updateDoc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: 'coderhouse-ecommerce-ceaff.firebaseapp.com',
  projectId: 'coderhouse-ecommerce-ceaff',
  storageBucket: 'coderhouse-ecommerce-ceaff.appspot.com',
  messagingSenderId: '721036202798',
  appId: '1:721036202798:web:9aca655a4ba6c7025020bf',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore();

export const addItemsToDB = async () => {
  let response = await fetch("../products.json");
  let data = await response.json();
  data.forEach(async (item) => {
    await addDoc(collection(db, "items"), {
      name: item.name,
      description: item.description,
      price: item.price,
      offer: item.offer,
      image: item.image,
      category: item.category,
      stock: item.stock,
    });
  });
};

export const getItem = async (id) => {
  let response = doc(db, "items", id);
  let item = await getDoc(response);
  if (!item.data()) return false;
  return { id: item.id, ...item.data() };
};

const getAllItems = async () => {
  let response = collection(db, "items");
  let data = await getDocs(response);
  let items = data.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  return items;
};

const getItemsByCategory = async (category) => {
  let response = query(
    collection(db, "items"),
    where("category", "==", category)
  );
  let data = await getDocs(response);
  let items = data.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  return items;
};

export const getItems = (category = null) => {
  return category ? getItemsByCategory(category) : getAllItems();
};

export const updateItem = async (product) => {
  const { id, quantity, ...attributes } = product;
  attributes.stock -= quantity;
  let response = doc(db, "items", id);
  return await updateDoc(response, attributes);
};

export const addCategoriesToDB = async () => {
  let response = await fetch("../categories.json");
  let data = await response.json();
  data.forEach(async (item) => {
    await addDoc(collection(db, "categories"), {
      key: item.key,
      description: item.description,
    });
  });
};

export const getCategories = async () => {
  let response = collection(db, "categories");
  let data = await getDocs(response);
  let categories = data.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  return categories;
};

export const addOrder = async (order) => {
  return await addDoc(collection(db, "orders"), order);
};
