import { Persona } from "../Interfaces/IFormulario";
import { collection, addDoc, getDocs, doc, getDoc, updateDoc, deleteDoc } from "firebase/firestore"; 
import { db } from "./FireBaseApp";


export const registrarPersona = async(p:Persona)=>{
    
    
      const docRef = await addDoc(collection(db, "personas"), p)

}

export const obtenerPersonas = async()=>{
    const querySnapshot = await getDocs(collection(db, "personas"));
    console.log("CHAOOO")
    console.log(querySnapshot)
    var personas:Persona[] = []
    querySnapshot.forEach((d)=>{
        console.log(d.id)
        console.log(d.data())
        var p:Persona = {
            nombre:d.data().nombre,
            Correo:d.data().Correo,
            Contrasena:d.data().Contrasena,
            edad:parseInt(d.data().edad),
            Telefono:parseInt(d.data().Telefono),
            Fecha:d.data().Fecha,
            Mensaje:d.data().Mensaje,
            Aceptar:d.data().Aceptar,
            idPersona:d.id
        } 
        personas.push(p)
    })
    return personas
}
export const obtenerPersona = async(idPersona:string)=>{
    const docRef = doc(db, "personas", idPersona);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        const p:Persona = {
            nombre:docSnap.data().nombre,
            Correo:docSnap.data().Correo,
            Contrasena:docSnap.data().Contrasena,
            edad:docSnap.data().edad,
            Telefono:docSnap.data().Telefono,
            Fecha:docSnap.data().Fecha,
            Mensaje:docSnap.data().Mensaje,
            Aceptar:docSnap.data().Aceptar,
            idPersona:docSnap.id
        }
        return p
    } else {
        return undefined
    }
}
export const actualizarPersona = async(idPersona:string,p:Persona)=>{
    const docRef = doc(db, "personas", idPersona);

    await updateDoc(docRef, {...p});
}
export const eliminarPersona = async(idPersona:string)=>{
    await deleteDoc(doc(db, "personas", idPersona));
}