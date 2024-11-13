import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebase" 

// Function to fetch all documents from the 'requests' collection
export const fetchRequests = async () => {
  const requestsCollection = collection(db, "log-entries");
  const snapshot = await getDocs(requestsCollection);
  const requestData = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  return requestData;
};
