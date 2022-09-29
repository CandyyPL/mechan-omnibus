import axios from 'axios'

export const getData = async (uid = 'all') => {
  try {
    if (uid === 'all') {
      const users = await axios.get('http://localhost:5000/getall')
      return users
    }

    const user = await axios.post('http://localhost:5000/getone', { uid: uid })
    return user
  } catch (err) {
    console.log(err)
  }
}

export const updateData = async (email = null, uid = null, update) => {
  try {
    if (email != null) {
      await axios.post('http://localhost:5000/updateone', { email: email, update: update })
      return
    }

    if (uid != null) {
      await axios.post('http://localhost:5000/updateone', { uid: uid, update: update })
      return
    }
  } catch (err) {
    console.log(err)
  }
}

export const getRanking = async () => {
  try {
    const ranking = await axios.get('http://localhost:5000/getranking')
    return ranking
  } catch (err) {
    console.log(err)
  }
}
