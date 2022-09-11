import { auth, database } from '@/auth/firebase'
import { child, get, ref, set, update } from 'firebase/database'

export const addData = async (data) => {
  try {
    await update(ref(database, `users/${auth.currentUser.uid}`), { ...data })
  } catch (err) {
    console.log(err)
  }
}

export const getData = async (uid) => {
  try {
    const snap = await get(child(ref(database), `users/${uid}`))

    if (snap.exists()) return snap.val()
    else return null
  } catch (err) {
    console.log(err)
  }
}
