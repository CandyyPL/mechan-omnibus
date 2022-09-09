import { doc, getDoc, setDoc } from 'firebase/firestore'
import { auth, firestore } from '@/auth/firebase'

export const addData = async (data) => {
  try {
    const docRef = await setDoc(
      doc(firestore, 'users', auth.currentUser.uid),
      { ...data },
      { merge: true }
    )
    console.log(docRef)
  } catch (err) {
    console.log(err)
  }
}

export const getData = async () => {
  try {
    const docRef = doc(firestore, 'users', auth.currentUser.uid)
    const docSnap = await getDoc(docRef)

    if (docSnap.exists()) return docSnap.data()
  } catch (err) {
    console.log(err)
  }
}
