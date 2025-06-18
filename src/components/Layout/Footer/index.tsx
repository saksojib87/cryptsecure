import Link from "next/link";
import React, { FC } from "react";

const Footer: FC = () => {
  return (
    <footer className=" pt-16 bg-darkmode">
      <div className="container pb-16 ">
        <hr />
        <Link href="/">
          <h2 className="text-2xl font-bold text-white mt-4">
            Cryp<span className="text-primary">Secure</span>
          </h2>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
