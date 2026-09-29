import Link from "next/link";
import React from "react";

type NavButtonProps = {
  pageLink: string;
  pageName: string;
}

export default function NavButton({ pageLink, pageName }: NavButtonProps) {
  return (
    <>
      <li>
        <Link href={pageLink} className="px-10 py-2 flex text-xl text-center uppercase font-bold leading-snug text-white hover:opacity-75 hover:ease-in transition-opacity">{pageName}</Link>
      </li>
    </>
  );
}
