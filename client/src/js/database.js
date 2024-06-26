import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

//  Logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
//console.error('putDb not implemented');
const jateDB = await openDB('jate', 1);
  const tx = jateDB.transaction('jate', 'readwrite');
  const store = tx.objectStore('jate');
  const request = store.put({ id: 1, value: content });
  const result = await request;

  console.log('Data successfully saved to database');
};


// Logic for a method that gets all the content from the database
export const getDb = async () => {
const jateDB = await openDB('jate', 1);
  const tx = jateDB.transaction('jate', 'readonly');
  const store = tx.objectStore('jate');
  const request = store.get(1);
  const result = await request;
  result
    ? console.log('Data retrieved from database')
    : console.log('Data not found in the database.');

  return result?.value;
};

//console.error('getDb not implemented');

initdb();
