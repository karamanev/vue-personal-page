import * as firebase from 'firebase/app';
import 'firebase/auth';

export default {
  register(email: string, password: string) {
    return firebase.auth().createUserWithEmailAndPassword(email, password);
  },

  login(email: string, password: string) {
    return firebase.auth().signInWithEmailAndPassword(email, password);
  },

  logout() {
    return firebase.auth().signOut();
  }
}
