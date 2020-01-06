/* Helper Functions */
import { NextFunction, Request, Response } from 'express';
import expressWinston from 'express-winston';
import winston from 'winston';

export const validateToken = (req: Request, res: Response, next: NextFunction) => {
	const authorizationHeaader = false;
	let result;
	if (authorizationHeaader) {
		try {
			next();
		} catch (err) {
			// Throw an error just in case anything goes wrong with verification
			throw new Error(err);
		}
	} else {
		result = {
			error: 'Authentication error. Token required.',
			status: 401
		};
		res.status(401).send(result);
	}
};

export const logger = () =>
	expressWinston.logger({
		format: winston.format.combine(winston.format.colorize(), winston.format.json()),
		transports: [new winston.transports.File({ filename: 'Logs.log' })]
	});
