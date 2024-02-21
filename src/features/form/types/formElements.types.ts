export type IInputProps = {
	control: 'input';
	label: string;
	placeholder?: string;
	helperText?: string;
	name: string;
	fieldSize?: 'small' | 'default';
} & React.HTMLProps<HTMLInputElement>;

export type IInputFieldProps = {
	type: 'text' | 'number';
} & IInputProps;

export type IPasswordFieldProps = {
	type: 'password';
} & IInputProps;

export type IRadioFieldProps = {
	type: 'radio';
	options: { label: string; value: string }[];
} & IInputProps;

export type ICheckboxFieldProps = {
	type: 'checkbox';
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	label: any;
	multiple: boolean;
	options?: { label: string; value: string | number }[];
} & ( // eslint-disable-next-line @typescript-eslint/no-explicit-any
	| { multiple: true; options: { label: string; value: any }[] } // options only exists when multiple is true
	| { multiple: false; options?: never } // options doesnot exist when multiple is false
) &
	IInputProps;

export type IFormControlProps =
	| IInputFieldProps
	| IPasswordFieldProps
	| IRadioFieldProps
	| ICheckboxFieldProps;
