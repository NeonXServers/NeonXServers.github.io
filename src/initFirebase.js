import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
const config = {
    apiKey: 'AIzaSyDlhanMegEmNhvJU_87fUDG2L_4ElK6VBM',
    authDomain: 'neonx-servers.firebaseapp.com',
    projectId: 'neonx-servers',
    storageBucket: 'neonx-servers.appspot.com',
    messagingSenderId: '257273890235',
    appId: '1:257273890235:web:6e4dd1344b0a948d7cf09e',
    measurementId: 'G-PCT7CCYVG8',
    databaseURL:
        'https://neonx-servers-default-rtdb.europe-west1.firebasedatabase.app/',
};
function initFirebase() {
    firebase.initializeApp(config);
}

initFirebase();
export { firebase };
