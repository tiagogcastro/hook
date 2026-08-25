import multer from 'multer'
import path from 'path'
import crypto from 'crypto'
import AppError from '@shared/errors';

const tmpFolder = path.resolve(__dirname, '..', '..', 'tmp');

export default {
	tmpFolder,
	storage: multer.diskStorage({
		destination: tmpFolder, 
		filename: (req, file, callback) => {
			const randomHash = crypto.randomBytes(10).toString('hex');
			const fileName = `${Date.now().toString()}-${randomHash}-${file.originalname}`;

			return callback(null, fileName);
		}
	})
}
