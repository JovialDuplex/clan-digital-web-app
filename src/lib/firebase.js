import {initializeApp} from "firebase/app";
import {getAuth, connectAuthEmulator} from "firebase/auth";

const env = import.meta.env.VITE_NODE_ENV || "dev";
const firebaseConfig = {
    apiKey: env !== 'dev' ? import.meta.env.VITE_FIREBASE_API_KEY : import.meta.env.VITE_FIREBASE_API_KEY_DEV,
    authDomain: env !== 'dev' ? import.meta.env.VITE_FIREBASE_AUTH_DOMAIN : import.meta.env.VITE_FIREBASE_AUTH_DOMAIN_DEV,
    projectId: env !== 'dev' ? import.meta.env.VITE_FIREBASE_PROJECT_ID : import.meta.env.VITE_FIREBASE_PROJECT_ID_DEV,
    databaseURL: env !== 'dev' ? import.meta.env.VITE_FIREBASE_DATABASE_URL : import.meta.env.VITE_FIREBASE_DATABASE_URL_DEV,
    storageBucket: env !== 'dev' ? import.meta.env.VITE_FIREBASE_STORAGE_BUCKET : import.meta.env.VITE_FIREBASE_STORAGE_BUCKET_DEV,
    messagingSenderId: env !== 'dev' ? import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID : import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID_DEV,
    appId: env !== 'dev' ? import.meta.env.VITE_FIREBASE_APP_ID : import.meta.env.VITE_FIREBASE_APP_ID_DEV,
    measurementId: env !== 'dev' ? import.meta.env.VITE_FIREBASE_MEASUREMENT_ID : import.meta.env.VITE_FIREBASE_MEASUREMENT_ID_DEV
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

if (import.meta.env.VITE_NODE_ENV === "dev") {
    console.warn("Running in development mode. Make sure to use the Firebase emulator.");
    connectAuthEmulator(auth, import.meta.env.VITE_FIREBASE_EMULATOR_HOST);
}

export {app, auth};
