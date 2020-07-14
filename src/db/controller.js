import { db,auth } from "./firebase";

const usuariosRef = db.collection("usuarios");
export const loginDB = async (email, password) => {
  try {
  let res = await auth.signInWithEmailAndPassword(email,password);
  
     return res;
  } catch (error) {
    alert('Usuario o clave incorrecto')
  }
};
export const registerDB = async (email, password) => {
  try {
    let loans = []
    let res = await auth.createUserWithEmailAndPassword(email,password);
    await usuariosRef.doc(res.user.uid).set({ email,password,loans });
    console.log("Registro realizado con éxito");
    console.log(res)
  } catch (error) {
    console.log(error);
  }
};

export const loadUser = async (id)=>{
    try {
        let user =  await usuariosRef.doc(id).get();
        return user.data();
    } catch (error) {
       console.log(error) 
    }
}
