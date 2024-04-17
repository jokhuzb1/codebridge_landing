import React from "react";
import bg from "/images/bg.png";
export default function Head() {
	return (
		<div className="relative  w-full flex ">
			<img
				src={`/images/bg.png`}
				alt="bg-image"
				className="-z-10 absolute object-cover w-full h-full"
			/>
			<div className="py-20 mx-auto  max-w-[780px] flex flex-col  items-center md:items-start text-center md:text-start ">
				<h1 className="text-2xl md:text-5xl">
					<span className="text-[#3E9CDC]">
						Lorem, ipsum dolor sit amet consectetur
					</span>{" "}
					adipisicing elit. laudantium dicta earum{" "}
					<span className="text-[#3E9CDC]">ex illo.</span>
				</h1>
				<p className="font-semibold">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
					inventore!
				</p>
				<ul className="m-2 mb-10 text-center md:text-start">
					<li> - Lorem ipsum dolor sit amet.</li>
					<li> - Lorem ipsum dolor sit amet.</li>
					<li> - Lorem ipsum dolor sit amet.</li>
				</ul>
				<div className="flex items-center justify-center md:justify-start gap-3 md:gap-10 my-10 px-10">
					<button className="px-10 py-1 bg-[#3E9CDC] uppercase text-white font-normal">
						заказать
					</button>
					<button className="px-10 py-1 bg-white uppercase border-gray border-2 border-solid  font-normal">
						подробнее
					</button>
				</div>
			</div>
		</div>
	);
}
