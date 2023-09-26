import HeroHead from "./ui/HeroHead";
import HeroSubtitle from "./ui/HeroSubtitle";



export default function Hero() {
    return (
        <main>
            <div className="px-6 pb-24 lg:pt-48">
                <HeroHead />
                <HeroSubtitle />
            </div>
        </main>
    )
}