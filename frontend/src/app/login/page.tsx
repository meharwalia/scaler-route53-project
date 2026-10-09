import Image from "next/image";
import LoginForm from "./LoginForm";

export default function LoginPage() {
  return (
    <main className="flex flex-1 flex-col items-center bg-[#fafafa] text-sm">
      <Image src="/aws.png" alt="AWS" width={90} height={55} className="mt-8" />

      <div className="mt-12 flex items-start gap-6">
        <div className="w-[355px]">
          <LoginForm />
        </div>

        <Image
          src="/lightsail.png"
          alt="Amazon Lightsail"
          width={595}
          height={470}
          className="hidden lg:block"
        />
      </div>
    </main>
  );
}
