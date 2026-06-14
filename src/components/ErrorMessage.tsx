const ErrorMessage = ({ message }: { message: string }) => {
  return <p className="text-red-800 text-sm my-2">{message}</p>;
};

export default ErrorMessage;
