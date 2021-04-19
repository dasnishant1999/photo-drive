import { db } from "../firebase/config";

function deleteHandler(docId) {
  db.collection("images").doc(docId).delete();
}

function favouriteHandler({ url, id, createdAt, isFav }) {
  if (!isFav) {
    db.collection("images").doc(id).update({ isFav: !isFav });
    // db.collection("favourites").doc(id).set({ url, createdAt });
  } else {
    db.collection("images").doc(id).update({ isFav: !isFav });
    // db.collection("favourites").doc(id).delete();
  }
}

export { deleteHandler, favouriteHandler };
