import React from 'react';

const MagicButton = ({
	title,
	icon,
	handleClick,
	otherClasses,
}: {
	title?: string;
	icon: React.ReactNode;
	handleClick?: () => void;
	otherClasses?: string;
}) => {
	return title ? (
		// Button with title
		<button
			className='relative inline-flex h-16 w-full rounded-lg overflow-hidden p-[2px] focus:outline-none md:w-60 md:mt-7'
			onClick={handleClick}
		>
			<span className='absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]' />
			<span
				className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-7 text-xl font-medium text-white backdrop-blur-3xl gap-2 ${otherClasses}`}
			>
				{title}
				{icon}
			</span>
		</button>
	) : (
		// Button without title
		<button
			className='relative inline-flex h-16 w-16 rounded-lg overflow-hidden p-[2px] focus:outline-none md:mt-7'
			onClick={handleClick}
		>
			<span className='absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]' />
			<span
				className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 text-4xl text-white backdrop-blur-3xl gap-4 ${otherClasses}`}
			>
				{icon}
			</span>
		</button>
	);
};

export default MagicButton;
