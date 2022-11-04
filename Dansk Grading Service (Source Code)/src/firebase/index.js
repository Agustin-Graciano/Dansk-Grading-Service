import { collection, query, where, getDocs } from 'firebase/firestore'
import { firestore } from '../firebaseConfig'

export const getPSACards = () => {
  const cardRef = collection(firestore, '/PSACard')
  return getDocs(cardRef).then(function (snapshot) {
    const cards = []

    snapshot.docs.forEach(function (doc) {
      var id = doc.id
      var data = doc.data()
      // ...

      cards.push({
        id: id,
        name: data.name,
        type: data.type,
        image: data.image,
      })
    })
    return cards
  })
}
