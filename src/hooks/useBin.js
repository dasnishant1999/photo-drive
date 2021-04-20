import { useState, useEffect } from "react";
import { db } from "../firebase/config";

function useBin(collection) {
  const [bin, setbin] = useState([]);

  useEffect(() => {
    const unsub = db
      .collection(collection)
      .orderBy("createdAt", "desc")
      .onSnapshot((snap) => {
        let binDocuments = [];
        snap.forEach((document) => {
          binDocuments.push({
            createdAt: document.data().createdAt,
            url: document.data().url,
            id: document.id,
          });
        });
        setbin(binDocuments);
      });

    return () => {
      unsub();
    };
  }, [collection]);

  return bin;
}

export default useBin;
