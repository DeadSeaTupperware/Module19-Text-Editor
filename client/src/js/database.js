/* DEPENDENCIES */
import { openDB } from "idb";

/* FUNCTIONS */
const initdb = async () =>
  openDB("jate", 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains("jate")) {
        console.log("jate database already exists");
        return;
      }
      db.createObjectStore("jate", { keyPath: "id", autoIncrement: true });
      console.log("jate database created");
    },
  });

/* Accepts content and adds it to the database */
export const putDb = async (content) => {
  const db = await openDB("jate", 1); // Connect to db
  const tx = db.transaction("jate", "readwrite"); // Create transaction
  const store = tx.objectStore("jate"); // Open desired object store
  const request = store.put({ todo: content }); // Add to database
  const result = await request; // Confirm
  console.log("Result:", result);
};

/* Get all the content from the database */
export const getDb = async () => {
  const db = await openDB("jate", 1); // Connect to db
  const tx = db.transaction("jate", "readonly"); // Create transaction
  const store = tx.objectStore("jate"); // Open desired object store
  const request = store.getAll(); // Add to database
  const result = await request; // Confirm
  console.log("Result:", result);
};

/* INITIALIZER */
initdb();
