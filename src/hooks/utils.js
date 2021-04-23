import { db, photoStorage } from "../firebase/config";
import { useAuth } from "../contexts/AuthContext";

// const { currentUser } = useAuth();

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

function deleteHandler(uid, { id, url }) {
  var filename = url.split("/")[7].split("?")[0];
  delteFromStorage(filename);
  db.collection("users").doc(uid).collection("images").doc(id).delete();
}

function deletePermanent(uid, { id, url }) {
  var filename = url.split("/")[7].split("?")[0];
  delteFromStorage(filename);
  db.collection("users").doc(uid).collection("bin").doc(id).delete();
}

function favouriteHandler(uid, { id, isFav }) {
  db.collection("users")
    .doc(uid)
    .collection("images")
    .doc(id)
    .update({ isFav: !isFav });
}

function moveToBin(uid, { id, createdAt, url }) {
  db.collection("users")
    .doc(uid)
    .collection("bin")
    .doc(id)
    .set({ url, createdAt });
  db.collection("users").doc(uid).collection("images").doc(id).delete();
}

function restoreFromBin(uid, { id, createdAt, url }) {
  db.collection("users")
    .doc(uid)
    .collection("images")
    .doc(id)
    .set({ url, createdAt, isFav: false });
  db.collection("users").doc(uid).collection("bin").doc(id).delete();
}

export {
  deleteHandler,
  favouriteHandler,
  moveToBin,
  deletePermanent,
  restoreFromBin,
};
