type ErrorMessageProps = {
  message: string;
};

const ErrorMessage = ({ message }: ErrorMessageProps) => {
  return (
    <p role="alert" className="text-red-800 text-sm my-2">
      {message}
    </p>
  );
};

export default ErrorMessage;
