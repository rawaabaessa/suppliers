import NavBar from "../components/NavBar";
import { VscOpenPreview } from "react-icons/vsc";

const AccountPendingPage = () => {
  return (
    <>
      <NavBar />
      <div>
        <div className="flex min-h-[calc(100vh-80px)] flex-col items-center justify-center gap-5 bg-primary/10 px-5 py-10 text-center">
          <VscOpenPreview className="text-7xl text-primary" />
          <h1 className="text-2xl font-semibold text-primary md:text-3xl">
            Your account is pending approval
          </h1>
          <p className="text-gray-green">
            Thank you for signing up! Your account is currently under review.
            You will receive an email notification once your account has been
            approved. We appreciate your patience during this process.
          </p>
        </div>
      </div>
    </>
  );
};

export default AccountPendingPage;
