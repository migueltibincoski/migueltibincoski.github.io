import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-analytics.js";
const firebaseConfig = {
    apiKey: "AIzaSyC9FGcBZmNng9TrFHvTjEYcnwNeDUVLDHk",
    authDomain: "migueltibincoski-github-io.firebaseapp.com",
    projectId: "migueltibincoski-github-io",
    storageBucket: "migueltibincoski-github-io.appspot.com",
    messagingSenderId: "608075880203",
    appId: "1:608075880203:web:6c80863ebe06def416740e",
    measurementId: "G-5B5C9TBZXS"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);