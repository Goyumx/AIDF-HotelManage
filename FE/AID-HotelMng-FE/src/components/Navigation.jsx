import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";
import { Link } from "react-router";

function Navigation(p) {

  return (
    <nav className="z-10 bg-black flex  items-center justify-between px-8 text-white py-4">
        <div className="flex items-center space-x-8">
        <Link href="/" className="text-2xl font-bold ">
        Horizone
        </Link>
        <div className="hidden md:flex space-x-6">
        <Link href={`/`} className="transition-colors">
        Home</Link>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <Button variant="ghost" className="">
        <Globe className="h-5 w-5 mr-2" />
        EN
        </Button>
        <Button variant="ghost" asChild>
        <Link href="/sign-in">
        Log In
        </Link>
        </Button>
        <Button variant="ghost" asChild>
        <Link href="/sign-up">
        Sign Up
        </Link>
        </Button>
      </div>
    </nav>
  );
}

export default Navigation;