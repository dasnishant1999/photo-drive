import { useState, useEffect } from "react";
import { db } from "../firebase/config";

import { useAuth } from "../contexts/AuthContext";

function useFirestore(collection) {
  const [docs, setdocs] = useState([]);
  const { currentUser } = useAuth();

  useEffect(() => {
    const unsub = db
      .collection(collection)
      .doc(currentUser.uid)
      .collection("images")
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
