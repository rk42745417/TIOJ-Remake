import Card from "@/components/card";
import Link from "next/link";

export default function Home() {
  return (
    <main className="mx-10 mt-8">
      <div className="flex flex-col gap-5">
        <Card>
          <div className="flex justify-between">
            <h4 className="font-semibold text-xl">
              Bulletin Board
            </h4>
            <Link href="/articles" className="text-lg">
              Show all
            </Link>
          </div>
        </Card>
        <Card>
          <div className="flex justify-between">
            <h4 className="font-semibold text-xl">
              Recent Contests
            </h4>
            <Link href="/contests" className="text-lg">
              Show all
            </Link>
          </div>
        </Card>
        <Card>
          <div className="flex justify-between">
            <h4 className="font-semibold text-xl">
              Ranked Coders
            </h4>
            <Link href="/contests" className="text-lg">
              Show all
            </Link>
          </div>
        </Card>
      </div>
    </main>
  );
}
