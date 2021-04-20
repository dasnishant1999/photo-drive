import { db, photoStorage } from "../firebase/config";

function delteFromStorage(filename) {
  var ref = photoStorage.ref(filename);
  ref
    .delete()
    .then(() => {
      console.log("deleted successfully");
    })
    .catch((error) => {
      console.log(error);
    });
}

function deleteHandler({ id, url }) {
  var filename = url.split("/")[7].split("?")[0];
  delteFromStorage(filename);
  db.collection("images").doc(id).delete();
}

function deletePermanent({ id, url }) {
  var filename = url.split("/")[7].split("?")[0];
  delteFromStorage(filename);
  db.collection("bin").doc(id).delete();
}

function favouriteHandler({ id, isFav }) {
  if (!isFav) {
    db.collection("images").doc(id).update({ isFav: !isFav });
    // db.collection("favourites").doc(id).set({ url, createdAt });
  } else {
    db.collection("images").doc(id).update({ isFav: !isFav });
    // db.collection("favourites").doc(id).delete();
  }
}

function moveToBin({ id, createdAt, url }) {
  db.collection("bin").doc(id).set({ url, createdAt });
  db.collection("images").doc(id).delete();
}

function restoreFromBin({ id, createdAt, url }) {
  db.collection("images").doc(id).set({ url, createdAt, isFav: false });
  db.collection("bin").doc(id).delete();
}

export {
  deleteHandler,
  favouriteHandler,
  moveToBin,
  deletePermanent,
  restoreFromBin,
};
