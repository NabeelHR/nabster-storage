import { userRegistration, userLogin } from '@/types/interfaces';
import FormData from 'form-data';

const axios = require('axios').default;
const url = 'http://localhost:8080';

const register = async (userDetails: userRegistration) => {
	const response = await axios.post(url + '/register', {
		name: userDetails.name,
		email: userDetails.email,
		password: userDetails.password,
	});
	return response;
};

const login = async (userDetails: userLogin) => {
	const response = await axios.post(url + '/login', {
		email: userDetails.email,
		password: userDetails.password,
	});
	console.log('no error');
	return response;
};

const uploadImgData = async (uid: string, imgUrl: string) => {
	console.log('sending request for urlsss');
	const response = await axios.post(url + '/imageData', {
		uid: parseInt(uid),
		url: imgUrl,
	});
	return response;
};

const fetchImgData = async (uid: string, cb) => {
	console.log('sending request for urlsss');
	const response = await axios.get(url + '/fetchImgData', {
		params: {
			uid: parseInt(uid),
		},
	});
	cb(response);
	return response;
};

export { register, login, uploadImgData, fetchImgData };