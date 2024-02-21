type IHelperTextProps = {
	helperText: string;
};
const HelperText: React.FC<IHelperTextProps> = ({ helperText }) => {
	return <p className="text-xs text-gray-500">{helperText}</p>;
};

export default HelperText;
