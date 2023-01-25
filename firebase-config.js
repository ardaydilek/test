const firebaseConfig = {
    apiKey: import.meta.env.VITE_KEY,
    authDomain: import.meta.env.VITE_AUTH,
    projectId: import.meta.env.VITE_ID,
    databaseURL: import.meta.env.VITE_URL,
    storageBucket: import.meta.env.VITE_BUCKET,
    messagingSenderId: import.meta.env.VITE_SENDER,
    appId: import.meta.env.VITE_APP
};


export { firebaseConfig };
