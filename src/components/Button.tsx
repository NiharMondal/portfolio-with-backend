

export default function Button({content}:{content:string}) {
	return (
		<button className="flex w-fit bg-primary py-3 px-5 mx-auto rounded-sm overflow-hidden sudo group">
			<span className=" font-semibold tracking-wider group-hover:scale-95 duration-200">
				{content}
			</span>
		</button>
	);
}
