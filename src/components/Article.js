function ArticleWithImage(props) {
	return (
		<div className="flex flex-row my-4 mx-6 justify-center items-center">
			{/* Image */}
			<div className="flex justify-center basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/3">
				<img className="rounded-xl object-cover max-w-full" src={props.imgSrc} alt={props.imgTitle} />
			</div>
			{/* Text */}
			<div className="flex flex-col justify-center text-white ml-2 h-40 basis-1/2 sm:basis-2/3 md:basis-3/4 lg:basis-1/3">
				<p className="text-lg font-medium h-6 mb-1">{props.title}</p>
				<p className="text-base font-base text-clip overflow-hidden h-24 max-w-prose">{props.text}</p>
			</div>
		</div>
	);
}

export default function ArticleList() {
	return (
		<div className="flex flex-col py-6 bg-primary text-white">
			<p className="text-center text-3xl font-semibold">Recent</p>
			<ArticleWithImage
				imgSrc={"https://loremflickr.com/cache/resized/65535_51722617146_5156e310d5_300_300_nofilter.jpg"}
				imgTitle={"placeholder"}
				title={"Artikel 1"}
				text={
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dui sapien Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dui sapien Curabitur dui sapien Lorem ipsum dolor sit ametn"
				}
			/>
			<ArticleWithImage
				imgSrc={"https://loremflickr.com/cache/resized/65535_51722617146_5156e310d5_300_300_nofilter.jpg"}
				imgTitle={"placeholder"}
				title={"Artikel 1"}
				text={
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dui sapien Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dui sapien Curabitur dui sapien Lorem ipsum dolor sit ametn"
				}
			/>
			<ArticleWithImage
				imgSrc={"https://loremflickr.com/cache/resized/65535_51722617146_5156e310d5_300_300_nofilter.jpg"}
				imgTitle={"placeholder"}
				title={"Artikel 1"}
				text={
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dui sapien Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dui sapien Curabitur dui sapien Lorem ipsum dolor sit ametn"
				}
			/>
		</div>
	);
}
