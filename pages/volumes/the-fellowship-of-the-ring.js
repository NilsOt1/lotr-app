import Link from "next/link";
import { volumes } from "../../lib/data";

export default function Tfotr() {
  const data = volumes.find(
    ({ slug }) => slug === "the-fellowship-of-the-ring"
  );

  return (
    <>
      <Link href="../../index">All Volumes</Link>
      <h1>{data.title}</h1>
      <p>{data.description}</p>
      <ul>
        {volumes.map((volume) => (
          <li>{volume.title}</li>
        )
        ))}
      </ul>
    </>
  );
}
