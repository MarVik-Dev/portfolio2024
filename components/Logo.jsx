import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <div className="flex items-baseline">

      <Image src="/logo.svg" width={54} height={54} priority alt="" />
      <h3 className="h3 ml-3">MarVik</h3>
      </div>
    </Link>
  );
};

export default Logo;
