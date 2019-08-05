import axios from 'axios'
import firebase from 'firebase'

export default {
    register(email: string, password: string) {
      firebase.auth().createUserWithEmailAndPassword(email, password);
    },

    login() {

    }



}