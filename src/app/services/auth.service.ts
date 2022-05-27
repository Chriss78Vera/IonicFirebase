import { Injectable } from '@angular/core';
import {
  Auth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from '@angular/fire/auth';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private auth: Auth) {}
  async register({ email, password }) {
    try {
      const user = await createUserWithEmailAndPassword(
        this.auth,
        email,
        password
      );
    } catch {}
    return null; // return
  }
async login(email,password) {
  try{
    const user=await signInWithEmailAndPassword(this.auth, email, password);
    return user;
  }catch{
    return null;
  }
}

logout() {
  return signOut(this.auth);
}
}


