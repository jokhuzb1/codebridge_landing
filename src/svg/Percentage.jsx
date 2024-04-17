import * as React from "react";
const Percentage = (props) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={55}
		height={56}
		fill="none"
		{...props}
	>
		<g filter="url(#a)">
			<path
				fill="#fff"
				d="M37.786 35.964a2.59 2.59 0 0 1-2.572 2.572 2.59 2.59 0 0 1-2.571-2.572 2.59 2.59 0 0 1 2.571-2.571 2.59 2.59 0 0 1 2.572 2.571ZM22.357 20.536a2.59 2.59 0 0 1-2.571 2.571 2.59 2.59 0 0 1-2.572-2.571 2.59 2.59 0 0 1 2.572-2.572 2.59 2.59 0 0 1 2.571 2.572ZM42.93 35.964a7.716 7.716 0 0 0-7.715-7.714 7.716 7.716 0 0 0-7.714 7.714 7.716 7.716 0 0 0 7.714 7.715 7.716 7.716 0 0 0 7.715-7.715ZM41 14.107c0-.703-.583-1.286-1.286-1.286H36.5c-.402 0-.783.201-1.025.523L14.261 41.629c-.16.221-.261.483-.261.764 0 .703.583 1.286 1.286 1.286H18.5c.402 0 .784-.201 1.025-.523l21.214-28.285c.16-.222.261-.483.261-.764Zm-13.5 6.429a7.716 7.716 0 0 0-7.714-7.715 7.716 7.716 0 0 0-7.715 7.715 7.716 7.716 0 0 0 7.715 7.714 7.716 7.716 0 0 0 7.714-7.714Z"
			/>
		</g>
		<defs>
			<filter
				id="a"
				width={55}
				height={63}
				x={-4}
				y={0.75}
				colorInterpolationFilters="sRGB"
				filterUnits="userSpaceOnUse"
			>
				<feFlood floodOpacity={0} result="BackgroundImageFix" />
				<feColorMatrix
					in="SourceAlpha"
					result="hardAlpha"
					values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
				/>
				<feOffset dy={4} />
				<feGaussianBlur stdDeviation={2} />
				<feComposite in2="hardAlpha" operator="out" />
				<feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
				<feBlend in2="BackgroundImageFix" result="effect1_dropShadow_3_193" />
				<feBlend
					in="SourceGraphic"
					in2="effect1_dropShadow_3_193"
					result="shape"
				/>
			</filter>
		</defs>
	</svg>
);
export default Percentage;
