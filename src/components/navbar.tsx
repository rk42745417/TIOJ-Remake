import Link from "next/link";

function Entry({ link, name }: { link: string, name: string }) {
  return (
    <li className="text-bold">
      <Link href={link}>
      {name}
      </Link>
    </li>
  );
}
export default function Navbar() {
  return (
    <nav className="bg-blue-950">
      <div className="mx-7 pb-px">
        <Link href="/">
          <h1 className="font-bold text-4xl">TIOJ Remake</h1>
        </Link>
        <ul className="flex gap-8 font-semibold text-lg mt-2 mb-4">
          <Entry link="/articles" name="Bulletin" />
          <Entry link="/problems" name="Problems" />
          <Entry link="/submissions" name="Submissions" />
          <Entry link="/contests" name="Contests" />
          <Entry link="/posts" name="Discuss" />
          <Entry link="/users" name="Rank" />
          <Entry link="/sign_in" name="Sign in" />
          <Entry link="/sign_up" name="Sign up" />
        </ul>
      </div>
    </nav>
  );
}