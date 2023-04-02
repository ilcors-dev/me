import { GlitchText } from './GlitchText';

export const Navbar = () => {
	return (
		<nav className="flex flex-col items-center justify-between md:flex-row">
			{/* <MemojiLoop /> */}
			<div className="mt-10 flex w-full flex-col sm:justify-between md:mt-0 md:flex-row md:justify-around">
				<div className="order-2 mt-10 flex flex-col space-y-5 md:order-1 md:mt-0 md:flex-row md:space-y-0 lg:ml-auto lg:mr-28">
					<div className="w-[200px] md:w-[150px] lg:w-[200px]">
						<p className="font-bold tracking-tight">member</p>
						<a href="https://astranoto.com/">
							<GlitchText
								className="cursor-pointer tracking-tighter"
								text="@astranoto"
							/>
						</a>
					</div>
					<div className="w-[200px] md:w-[150px] lg:w-[200px]">
						<p className="font-bold tracking-tight">student</p>
						<GlitchText
							className="cursor-pointer tracking-tighter"
							text="engineering@unibo"
						/>
					</div>
				</div>
				<div className="order-1 flex justify-between md:order-3 md:justify-evenly">
					<div className="w-[200px] md:w-[180px] lg:w-[200px]">
						<p className="font-bold tracking-tight">Luca Corsetti</p>
						<GlitchText
							className="cursor-pointer tracking-tighter"
							text="fullstack developer"
						/>
					</div>
					{/* <ThemeSwitcher /> */}
				</div>
			</div>
		</nav>
	);
};
