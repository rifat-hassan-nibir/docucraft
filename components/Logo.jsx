import Image from "next/image";
import Link from "next/link";

function Logo() {
  return (
    <div className="hidden lg:flex">
      <Link href="/">
        <Image src="/logo.svg" width={100} height={24} alt="Protocol" className="h-6 w-auto" />
      </Link>
    </div>
  );
}

export default Logo;
