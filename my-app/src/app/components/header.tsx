import Link from "next/link";
export default function Header() {
  return (
    <div className="header">
              <div className="sideHeading"> Daily IT Blog</div>

      <ul className="header-buttons">
    
         <li><Link href="/">Home</Link></li>
        <li> <Link href="/about">About</Link> </li>
        <li><Link href="/contact-us">Contact </Link> </li>
        <li> <Link href="Blogs">Blogs</Link> </li>

      </ul>
    
    </div>
  );
}