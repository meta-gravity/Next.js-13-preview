"use client"

import { GithubIcon} from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

export default function Header() {
    return (
        <main>
            <div className="relative top-0 p-3 bg-white border-2 border-slate-200 border-b-[#e5e7eb] flex backdrop-blur-sm w-full">
                <h1 className="flex text-2xl font-bold hover:text-[#020516] cursor-pointer">
                    Papermark
                </h1>
                
                <div className="flex top-0 right-0 justify-end space-x-4">
                    <Link href="https://www.github.com">
                        <Button variant="link" className="">
                            <GithubIcon />
                            Github
                        </Button>
                    </Link>
                    <div>
                        <Button className="hover:black">Send deck</Button>
                    </div>
                </div>

            </div>
        </main>
    )
}