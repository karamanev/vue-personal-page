import axios from 'axios'
import firebase from 'firebase'

export default {
    register (email: string, password: string) {
      return firebase.auth().createUserWithEmailAndPassword(email, password);
    },

    login(email: string, password: string) {
    return firebase.auth().signInWithEmailAndPassword(email, password);
    }
}