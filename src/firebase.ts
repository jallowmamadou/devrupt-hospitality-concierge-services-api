require('dotenv').config();
import * as admin from 'firebase-admin';

export default admin.initializeApp({
  credential: admin.credential.cert(
    JSON.parse(process.env.GOOGLE_APPLICATION_CREDENTIALS)
  ),
  databaseURL:
    'https://teraal-513cf-default-rtdb.europe-west1.firebasedatabase.app',
});
