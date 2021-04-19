import { useState, useEffect } from "react";
import { db } from "../firebase/config";

function useFirestore(collection) {
  const [docs, setdocs] = useState([]);

  useEffect(() => {
    const unsub = db
      .collection(collection)
      .orderBy("createdAt", "desc")
      .onSnapshot((snap) => {
        let documents = [];
        snap.forEach((document) => {
          documents.push({ ...document.data(), id: document.id });
        });
        setdocs(documents);
      });

    return () => {
      unsub();
    };
  }, [collection]);

  return docs;
}

export default useFirestore;
