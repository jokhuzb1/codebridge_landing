import React from "react";

export default function SvgContainer({ icon, children, text }) {
	return (
		<div className="flex flex-col items-center justify-center">
			<div className="rounded-full flex item-center justify-center bg-[#3E9CDC] w-fit p-2 ">
				{icon}
			</div>
			<p>{text}</p>
		</div>
	);
}
