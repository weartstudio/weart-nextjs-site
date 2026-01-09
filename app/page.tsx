import Menu from "@/components/common/Menu";
import Hero from "@/components/home/Hero";
import SuccessStories from "@/components/home/SuccessStories";

export default function Home() {
	return (
		<>
			<header className="bg-dark pb-20">
				<Menu />
				<Hero />
				<SuccessStories />
			</header>
		</>
	);
}
