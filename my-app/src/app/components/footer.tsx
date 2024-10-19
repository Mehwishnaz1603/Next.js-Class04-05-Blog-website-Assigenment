import Link from "next/link";
export default function Footer() {
  return (
    <div className="footer">

      <ul className="footer-buttons">
    
         <li><Link href="/">Home</Link></li>
        <li> <Link href="/about">About</Link> </li>
        <li><Link href="/contact-us">Contact </Link> </li>
        <li> <Link href="Blogs">Blogs</Link> </li>

      </ul>
      <h1 className="p"> copyright@MehwishNaz2024</h1>
    
    </div>
  );
}