import { cn } from "@/utils/cn";
import React from "react";
import {
	IconArrowWaveRightUp,
	IconBoxAlignRightFilled,
	IconBoxAlignTopLeft,
	IconClipboardCopy,
	IconFileBroken,
	IconSignature,
	IconTableColumn,
} from "@tabler/icons-react";
import { BentoGrid, BentoGridItem } from "../bento-grid";

export function BentoGridDemo() {
	return (
		<>
			<h1 className="text-white text-[5rem] mb-[25rem] jura mx-auto text-center mt-[-20rem]">
				About Insure Chain
			</h1>
			<BentoGrid className="max-w-[80vw] mx-auto md:mt-[-30rem] xl:mt-[-20rem]">
				{items.map((item, i) => (
					<BentoGridItem
						key={i}
						title={item.title}
						description={item.description}
						header={item.header}
						className={i === 3 || i === 6 ? "md:col-span-2" : ""}
					/>
				))}
			</BentoGrid>
		</>
	);
}
const Skeleton = () => (
	<div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);
const items = [
	{
		title: "User-Controlled Identity Management",
		description: "Users have complete control over their identity credentials and can share them selectively with third parties.",
		header: <img src="https://plus.unsplash.com/premium_photo-1674506652851-1f8426f4ac39?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGN5YmVyc2VjdXJpdHl8ZW58MHx8MHx8fDA%3D" className="h-[65%] rounded-md" />,
	},
	{
		title: "Efficient Verification",
		description: "Enables quick and efficient verification processes, reducing the time and effort required for identity verification.",
		header: <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3liZXJzZWN1cml0eXxlbnwwfHwwfHx8MA%3D%3D" className="h-[65%] rounded-md" />,
	},
	{
		title: "Secure and Immutable",
    	description: "Blockchain technology ensures data integrity and security, reducing the risk of data breaches.",
		header: <img src="https://plus.unsplash.com/premium_photo-1674506653774-6f51d6ebe799?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGN5YmVyc2VjdXJpdHl8ZW58MHx8MHx8fDA%3D" className="h-[65%] rounded-md" />,
	},
	{
		title: "Decentralized Storage",
		description: "Uses decentralized storage solutions like IPFS for securely storing identity credentials.",
		header: <img src="https://images.unsplash.com/photo-1639322537228-f710d846310a?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmxvY2tjaGFpbnxlbnwwfHwwfHx8MA%3D%3D" className="h-[65%] rounded-md" />,
	},
	{
		title: "What's up next?",
		description: "Updates are coming soon!",
		header: <img src="https://images.unsplash.com/photo-1497005367839-6e852de72767?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y29taW5nJTIwc29vbnxlbnwwfHwwfHx8MA%3D%3D" className="h-[65%] rounded-md" />,
	},
];
