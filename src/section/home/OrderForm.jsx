import React from "react";
import CustomForm from "../../components/CustomForm";
import SvgContainer from "../../svg/SvgContainer";
import Glass from "../../svg/Glass";
import Percentage from "../../svg/Percentage";
import AddFile from "../../svg/AddFile";
import Envelope from "../../svg/Envelope";
import BillNote from "../../svg/BillNote";
export default function Services() {
	return (
		<div className="relative bg-[#272733] bg-[url('/images/map.png')] text-white font-thin py-5 md:py-10 px-10 md:px-20 overflow-hidden text-center">
			<div>
				{/* <img
					src="/images/map.png"
					alt=""
					className="absolute top-0 left-0 right-0 bottom-0 object-cover "
				/> */}
			</div>
			<div>
				<h1 className="text-2xl font-semibold py-5 uppercase ">
					Оформление <span className="text-[#3E9CDC]">заказа</span>
				</h1>
				<p>Перед заполнением ознакомтесь с нашей схемой работы!</p>
				<div className="relative grid grid-cols-2 md:flex items-center justify-center">
					<SvgContainer icon={<Glass />} text="Lorem ipsum dolor sit amet" />
					<SvgContainer
						icon={<Percentage />}
						text="Consecteturadipiscing elit"
					/>
					<SvgContainer icon={<AddFile />} text="Sed do elusmod tempor" />
					<SvgContainer
						icon={<Envelope />}
						text="Esse cillum dolore ei fugiat"
					/>
					<SvgContainer
						icon={<BillNote />}
						text="Excepteur sint occaecat cupidatat no proident"
					/>
				</div>
				<CustomForm />
			</div>
		</div>
	);
}
