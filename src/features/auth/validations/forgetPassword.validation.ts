import { z } from 'zod';

export const ZEmail = z
	.string()
	.min(1, { message: 'Email is required.' })
	.email({
		message: 'Please enter a valid email.',
	});
