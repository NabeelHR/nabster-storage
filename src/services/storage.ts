import { initializeApp } from 'firebase/app';

import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';

const firebaseConfig = {
	apiKey: 'AIzaSyALJvZ66UjdqrHHRkd-6lc5STRSUdI4xm0',
	authDomain: 'nabster-d2c4a.firebaseapp.com',
	projectId: 'nabster-d2c4a',
	storageBucket: 'nabster-d2c4a.appspot.com',
	messagingSenderId: '225988886773',
	appId: '1:225988886773:web:d5cc4f7cf388bd3bb785bc',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get a reference to the storage service, which is used to create references in your storage bucket
export const storage = getStorage();

// Create a storage reference from our storage service
const storageRef = ref(storage);
const uploadImg = async (image: any, cb: any) => {
	if (image == null) return;
	const imageRef = ref(storage, `images/${image.name}`);
	uploadBytes(imageRef, image).then((snapshot: any) => {
		getDownloadURL(snapshot.ref).then((url: any) => {
			cb(url);
			// setImageUrls((prev) => [...prev, url]);
		});
	});
};

export { uploadImg };
