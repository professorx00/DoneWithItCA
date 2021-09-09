import { create } from 'apisauce';

const apiClient = create({
	baseURL: 'http://192.168.0.202:9000/api',
	timeout: 300,
});

export default apiClient;
