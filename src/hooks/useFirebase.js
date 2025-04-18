import { useContext, createContext } from "react";
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const FirebaseContext = createContext(null);

export const FirebaseContextProvider = ({children}) => {
    const firebaseConfig = {
        apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
        authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
        projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
        storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
        messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
        appId: process.env.REACT_APP_FIREBASE_APP_ID,
        measurementId:  process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
    };

    const app = initializeApp(firebaseConfig);

    return <FirebaseContext.Provider value={{app, db: getFirestore(app)}}>
        {children}
    </FirebaseContext.Provider>
}
export default function useFirebase() {
    return useContext(FirebaseContext);
}
