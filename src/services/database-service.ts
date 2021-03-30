import firebase from '../firebase';

export class DatabaseService {
  async save(doc: any) {
    return firebase
      .firestore()
      .collection('guests')
      .doc(doc.reservationId)
      .set(doc);
  }
}
