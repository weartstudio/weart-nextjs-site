import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

type Props = {};

function Menu({}: Props) {
	return (
		<nav>
			<div className="container mx-auto px-5 py-6 flex items-center justify-between">
				<Link href="/">
					<Image src="/logo-dark.png" width={109} height={57} alt={"Weart.hu"} />
				</Link>
				<div className="lg:block hidden">
					<ul className="flex space-x-6 text-light">
						<li>
							<Link href="/about" className="hover:text-primary">
								Rólunk
							</Link>
						</li>
						<li>
							<Link href="/portfolio" className="hover:text-primary">
								Munkáink
							</Link>
						</li>
						<li>
							<Link href="/services" className="hover:text-primary">
								Szolgáltatások
							</Link>
						</li>
						<li>
							<Link href="/posts" className="hover:text-primary">
								Blog
							</Link>
						</li>
					</ul>
				</div>
				<Button link="/contact">Beszélgessünk</Button>
			</div>
		</nav>
	);
}

export default Menu;
