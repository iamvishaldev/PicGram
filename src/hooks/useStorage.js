import { useState, useEffect } from "react";
import { projectStorage, projectFirestore, timestamp } from "../firbase/config";

const useStorage = (file) => {
  // progess of the upload
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  // image url that we get back from storage after the image has
  // fully uploaded
  const [url, setUrl] = useState(null);

  useEffect(() => {
    //references
    const storageRef = projectStorage.ref(file.name);
    const collectionRef = projectFirestore.collection("images");

    storageRef.put(file).on(
      "state_changed",
      (snap) => {
        let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
        setProgress(percentage);
      },
      (err) => {
        setError(err);
      },
      async () => {
        const url = await storageRef.getDownloadURL();
        // console.log(url);
        const createdAt = timestamp();
        collectionRef.add({ url, createdAt });
        setUrl(url);
      }
    );
  }, [file]);

  return { progress, url, error };
};

export default useStorage;
