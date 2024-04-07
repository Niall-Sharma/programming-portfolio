import Link from "next/link";

export default function NavButton( {pageLink, pageName}:any ) {
    return(
        <>
            <li>
                <Link href={pageLink}>{pageName}</Link>
            </li>
        </>
    );
}
