import { useEffect, useState } from "react";
import { photoStorage, db, timestamp } from "../firebase/config";
import { useAuth } from "../contexts/AuthContext";

function useStorage(file) {
  const [progress, setprogress] = useState(0);
  const [error, seterror] = useState(null);
  const [url, seturl] = useState(null);
  const { currentUser } = useAuth();

  useEffect(() => {
    const storageRef = photoStorage.ref(file.name);
    const dbRef = db.collection("users");

    storageRef.put(file).on(
      "state_changed",
      (snapshot) => {
        let uploadPercentage =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setprogress(uploadPercentage);
      },
      (error) => {
        console.log(error);
        seterror(error);
      },
      async () => {
        let url = await storageRef.getDownloadURL();
        seturl(url);
        let createdAt = timestamp();
        dbRef
          .doc(currentUser.uid)
          .collection("images")
          .add({ url, createdAt, isFav: false });
      }
    );
  }, [file, currentUser]);

  return { progress, error, url };
}

export default useStorage;
