import React from 'react';
import { Spotlight } from './ui/Spotlight';
import { TextGenerateEffect } from './ui/TextGenerateEffect';
import MagicButton from './ui/MagicButton';
import {
	FaEnvelope,
	FaFile,
	FaFileArchive,
	FaGithub,
	FaInstagram,
	FaLinkedin,
	FaLocationArrow,
	FaRegEnvelope,
} from 'react-icons/fa';
import {
	FaArrowUpRightFromSquare,
	FaDownLong,
	FaFileArrowUp,
	FaSquareCaretDown,
	FaUpRightFromSquare,
} from 'react-icons/fa6';

const DevpostLogo = () => {
	return <img src='/devpost-svgrepo-com.svg' alt='Devpost Logo' className='w-10 h-10' />;
};

const Hero = () => {
	return (
		<div className='pb-20 pt-36 h-screen'>
			<div>
				<Spotlight
					className='-top-40 -left-10 
            md:-left-32 md:-top-20 h-screen'
					fill='white'
				/>
				<Spotlight
					className='top-10 left-full h-[80vh] 
            w-[50vw]'
					fill='purple'
				/>
				<Spotlight
					className='top-28 left-80 
            h-[80vh] w-[50vw]'
					fill='blue'
				/>
			</div>
			<div className='h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.03] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0'>
				<div className='absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]' />
			</div>
			<div className='flex justify-center relative my-20 z-10'>
				<div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
					{/* <h2 className='tracking-widest text-sm text-center text-blue-100 max-w-80'>
                    {`if (passion === true) { code(); } `}
                </h2> */}
					<TextGenerateEffect
						className='text-center text-[40px] md:text-5xl lg:text-6xl'
						words="Hey, I'm Krish Nalam"
					/>
					<p
						className='text-center md:tracking-wider mb-4 md:text-lg 
                lg:text-2xl'
					>
						A Full-Stack Developer & UofT Student :)
					</p>
					<div className='flex space-x-4'>
						<a href='https://github.com/koolkrish18' target='_blank'>
							<MagicButton icon={<FaGithub />} />
						</a>
						<a href='https://linkedin.com/krish-nalam' target='_blank'>
							<MagicButton icon={<FaLinkedin />} />
						</a>
						<a href='https://devpost.com/nalamkrish1' target='_blank'>
							<MagicButton icon={<DevpostLogo />} />
						</a>
						<a href='mailto:nalamkrish1@gmail.com' target='_blank'>
							<MagicButton icon={<FaEnvelope />} />
						</a>
						<a
							href='https://drive.google.com/file/d/1at38vfh-W1CtTf_QIOl1Cz13tTCFz0h8/view'
							target='_blank'
						>
							<MagicButton title={'Resume'} icon={<FaUpRightFromSquare />} />
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
