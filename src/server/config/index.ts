import { config } from 'dotenv';
config();
export const development = {
	host: process.env.host || 'localhost',
	port: process.env.PORT || 3000
};
