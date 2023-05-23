import {firestore} from "../config/firebase";
import {doc, collection, serverTimestamp, setDoc} from "firebase/firestore"

const COLLECTION_NAME = 'requests';

type RequestType = {
  name: string;
  email: string;
  message: string;
  createdAt: string;
  id: string;
}

export function createRequest(request: Partial<RequestType>) {
  const reqRef = doc(collection(firestore, COLLECTION_NAME));
  const data = {
    ...request,
    id: reqRef.id,
    createdAt: serverTimestamp(),
  }
  return setDoc(reqRef, data);
}
