import Link from "next/link";
import { Button } from "./button";
import { GitBranchIcon } from "lucide-react";

export default function ButtonDown() {
    return (
        <main>
            <div className="mt-4 space-x-6">
                <Button>
                    Get started
                </Button>
                <Button>
                    <Link href="https://github.com/meta-gravity/Next.js-13-preview">
                        <GitBranchIcon/>
                        Get Started
                    </Link>
                </Button>
            </div>
        </main>
    )
}