import { fireDb, auth } from '@/auth/firebase'
import { ref, set } from 'firebase/database'

export const writeData = async (data) => {
  try {
    set(ref(fireDb, `users/${auth.currentUser.uid}`), {
      ...data,
    })
  } catch (err) {
    console.log(err)
    return
  }
}
