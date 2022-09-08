import { fireDb, auth } from '@/auth/firebase'
import { ref, child, set, get } from 'firebase/database'

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

export const readData = async (path) => {
  try {
    const res = await get(child(ref(fireDb), path))
    return res.val()
  } catch (err) {
    console.log(err)
    return
  }
}
