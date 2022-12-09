function ImageWithText(props) {
  return (
    <div className="flex flex-row flex-nowrap mx-6 sm:justify-center my-2">
        <a className="flex-1 max-w-xs" href={props.href}>
          <img className="w-full rounded-3xl" src={props.src} placeholder="placeholder">

          </img>
        </a>
        <div className="self-center text-white text-center text-lg flex-1 max-w-xs">
          <span>{props.icon}</span>
          <p>{props.text}</p>
        </div>
      </div>
  );
}

function ReversedImageWithText(props) {
  return (
    <div className="flex flex-row flex-nowrap mx-6 sm:justify-center my-2">
        <div className="self-center text-white text-center text-lg flex-1 max-w-xs">
          <span>{props.icon}</span>
          <p>{props.text}</p>
        </div>
        <a className="flex-1 max-w-xs" href={props.href}>
          <img className="w-full rounded-3xl" src={props.src} placeholder="placeholder">

          </img>
        </a>
      </div>
  );
}

export function AssortmentExamples() {
	return (
		<div className="flex flex-col">
			<p className='text-white text-lg sm:text-2xl md:text-3xl font-semibold sm:text-bold text-center m-4 sm:m-6 md:m-8'>Heerlijke gerechten</p>
      <ImageWithText href={'/'} icon={'*'} text={'Kat'} src={'https://loremflickr.com/cache/resized/65535_51976730205_07c53e56b5_b_600_600_nofilter.jpg'}  />
      <ReversedImageWithText href={'/'} icon={'*'} text={'Poes'} src={'https://loremflickr.com/cache/resized/65535_51976730205_07c53e56b5_b_600_600_nofilter.jpg'}  />
      <ImageWithText href={'/'} icon={'*'} text={'Aardappel'} src={'https://loremflickr.com/cache/resized/65535_51976730205_07c53e56b5_b_600_600_nofilter.jpg'}  />
		</div>
	);
}
