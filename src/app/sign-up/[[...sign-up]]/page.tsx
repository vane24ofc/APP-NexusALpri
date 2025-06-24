import { SignUp } from '@clerk/nextjs';

export default function Page() {
  return (
    <div className="flex justify-center items-center min-h-screen py-8">
      <SignUp path="/sign-up" />
    </div>
  );
}
