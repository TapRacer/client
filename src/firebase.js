import * as firebase from 'firebase'

  const config = {
    databaseURL: 'https://tapcar-78e9d.firebaseio.com/',
    projectId: 'tapcar-78e9d'
  }

  const firebaseApp = firebase.initializeApp(config)

  export const db = firebaseApp.database()