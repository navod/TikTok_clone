import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
import { AiOutlineLogout } from "react-icons/ai";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import { BiSearch } from "react-icons/bi";
import { IoIosAdd } from "react-icons/io";
import Logo from "../../utils/tiktik-logo.png";

const Navbar = () => {
  return (
    <div
      className="w-full flex justify-between items-center border-b-2 border-gray-200
    py-2 px-4"
    >
      <Link href="/">
        <div className="w-[100px] md:w-[130px]">
          <Image
            className="pointer"
            src={Logo}
            alt="title"
            layout="responsive"
          />
        </div>
      </Link>
    </div>
  );
};

export default Navbar;
