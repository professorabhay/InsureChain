import Link from "next/link";
import { BentoGridDemo } from "./components/LandingPage/BentoGrid";
import { EndText } from "./components/LandingPage/EndText";
import { LandingScroll } from "./components/LandingPage/LandingScroll";
import Title from "./components/LandingPage/Title";
import { MovingBorderDemo } from "./components/LandingPage/GetStrartedButton";



export default function Home() {
	return (
		<div className="">
			<br />
			<Title />
			<LandingScroll />
			<BentoGridDemo />
			<br />
			<div className="bg-gradient-to-b from-transparent via-transparent to-black">
				<EndText />
				<div className="w-full flex items-center justify-center bg-black py-10 text-white translate-y-[-5rem]">
					<MovingBorderDemo />
				</div>
			</div>
			<br />
			<br />
			<br />
		</div>
	);
}
