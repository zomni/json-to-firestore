const { initializeApp } = require("firebase/app");
const { getFirestore, collection, doc, setDoc } = require("firebase/firestore");
const fs = require('fs');

const firebaseConfig = {
    apiKey: "AIzaSyDX23OHdPC22ehbB3HXkx3NJ_xM7fZ2czM",
    authDomain: "registrapp-65de9.firebaseapp.com",
    projectId: "registrapp-65de9",
    storageBucket: "registrapp-65de9.appspot.com",
    messagingSenderId: "465439240697",
    appId: "1:465439240697:web:f4723d650c5397bfeb0d28"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const loadData = async () => {
    // Leer y parsear el archivo JSON
    const data = JSON.parse(fs.readFileSync('data.json', 'utf8'));
    
    // Iterar sobre las asignaturas y agregarlas a Firestore
    for (const key in data.asignaturas) {
        const asignatura = data.asignaturas[key];
        await setDoc(doc(collection(db, 'asignaturas'), key), asignatura);
    }

    console.log("Datos cargados exitosamente");
};

loadData().catch(console.error);
