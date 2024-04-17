import React from "react";

export default function Navbar() {
	return (
		<nav className="bg-[#10101D] text-white font-light py-5">
			<div className="flex justify-between max-w-screen-xl mx-auto p-2">
				<h1 className="font-bold tracking-widest">
					LOREMIPSUM.<span className="text-[#42A9ED]">NET</span>
				</h1>
				<ul className="flex uppercase justify-center items-center gap-5 text-sm">
					<li>Бизнес</li>
					<li>О нас</li>
					<li>Цены</li>
					<li>оформить заказ</li>
				</ul>
			</div>
		</nav>
	);
}
