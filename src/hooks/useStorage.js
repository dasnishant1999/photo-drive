import { useEffect, useState } from "react";
import { photoStorage, db, timestamp } from "../firebase/config";

function useStorage(file) {
  const [progress, setprogress] = useState(0);
  const [error, seterror] = useState(null);
  const [url, seturl] = useState(null);

  useEffect(() => {
    const storageRef = photoStorage.ref(file.name);
    const dbRef = db.collection("images");

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
        dbRef.add({ url, createdAt, isFav: false });
      }
    );
  }, [file]);

  return { progress, error, url };
}

export default useStorage;
