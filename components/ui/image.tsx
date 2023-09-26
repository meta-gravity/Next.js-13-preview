import Image from "next/image";

export default function IMage() {
    return (
        <main>
            {/* <img src="../public/img.jpg" alt="" /> */}
            <Image src="/public/img.jpg" alt={""} width="300" height="300"/>
        </main>
    )
}