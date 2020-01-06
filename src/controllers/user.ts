import { Request, Response } from 'express';

/**
 * Post /user
 * Save User.
 */
export const saveUser = async (req: Request, res: Response) => {
	if (req.body) {
		return res.send(JSON.stringify(req.body, null, 3));
	}
	return res.send('Post User ');
};

/**
 * Get /user
 * Get user.
 */
export const getUser = async (req: Request, res: Response) => {
	return res.send('Get User API Method Called');
};
