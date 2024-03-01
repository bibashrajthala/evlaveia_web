import { z } from 'zod';

export const ZFullName = z.string().min(1, { message: 'Name is required.' });

export const ZEmail = z
	.string()
	.min(1, { message: 'Email is required.' })
	.email({
		message: 'Please enter a valid email.',
	});

export const ZPassword = z
	.string()
	.min(6, { message: 'Password must be atleast 6 characters long.' });

export const ZSingleCheckbox = z.boolean().optional();

export const ZConFirmPassword = z
	.string()
	.min(1, { message: 'Confirm Password is required.' });
