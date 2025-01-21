interface ErrorMessageProp {
    message: string
}
const ErrorDisplay = ({ message }: ErrorMessageProp) => (
    <div className="bg-red-300 inset-1 text-red-500 p-3">
        <span>ERROR: </span> {message}
    </div>
);

export default ErrorDisplay;
