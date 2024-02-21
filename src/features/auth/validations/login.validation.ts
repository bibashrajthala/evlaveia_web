import { z } from 'zod';

export const ZEmail = z
	.string()
	.min(1, { message: 'Email is required.' })
	.email({
		message: 'Please enter a valid email.',
	});

export const ZPassword = z
	.string()
	.min(8, { message: 'Password must be atleast 8 characters long.' });

export const ZSingleCheckbox = z.boolean().optional();
