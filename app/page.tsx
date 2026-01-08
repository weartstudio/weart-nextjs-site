import Menu from "@/components/common/Menu";
import Link from "next/link";
import Image from "next/image";
import Button from "@/components/common/Button";

export default function Home() {
	return (
		<>
			<header className="bg-dark">
				<Menu />

				<div className="container mx-auto px-5 min-h-162.5 flex items-center">
					<div className="max-w-150 mx-auto text-center text-light">
						<h2 className="uppercase font-medium tracking-wider text-primary mb-4">weboldal fejlesztés</h2>
						<h1 className="font-bold text-4xl leading-tight mb-4">Legyen egy weboldalad, ami profi megjelenést ad, bizalmat épít, és eredményeket szállít.</h1>
						<p>10+ év rutinnal építünk egyedi, gyors weboldalakat. Rendszereink nemcsak látványosak, de vevőket szereznek és veled együtt fejlődnek.</p>
						<Button link="/kapcsolat" className="mt-5">
							Egyeztessünk időpontot
						</Button>
					</div>
				</div>
			</header>
		</>
	);
}
