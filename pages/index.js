import { introduction } from "../lib/data";
import { volumes } from "../lib/data";
import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <h1>Lord of the Rings</h1>
      <p>{introduction}</p>
      <h2>All Volumes</h2>
      <ul>
        <li>
          <Link href="/volumes/the-fellowship-of-the-ring/the-fellowship-of-the-ring">
            The fellowship of the Ring
          </Link>
        </li>
        <li>
          <Link href="./volumes/the-two-towers/the-two-towers.js">
            The two Towers
          </Link>
        </li>
        <li>
          <Link href="./volumes/the-return-of-the-king/the-return-of-the-king">
            The return of the King
          </Link>
        </li>
      </ul>
    </div>
  );
}
