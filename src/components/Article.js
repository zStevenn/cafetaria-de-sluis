function ArticleWithImage(props) {
  return (
    <div className="flex flex-row m-4 max-h-36 h-36 justify-center items-center">
      {/* Image */}
      <div className="flex w-1/3 md:w-2/5 md:justify-end">
        <img className="rounded-xl object-cover max-h-36" src={props.imgSrc} alt={props.imgTitle} />
      </div>
      {/* Text */}
      <div className="flex flex-col justify-center ml-2 h-40 text-grey-900 w-2/3 md:w-3/5">
        <p className="text-lg font-medium h-6 mb-1">{props.textTitle}</p>
        <p className="text-base font-base text-clip overflow-hidden h-24 max-w-prose">{props.textDescription}</p>
      </div>
    </div>
  );
}

export function ArticleList() {
  return (
    <div className="flex flex-col m-2">
      <ArticleWithImage 
      imgSrc={"https://loremflickr.com/cache/resized/65535_51722617146_5156e310d5_300_300_nofilter.jpg"} 
      imgTitle={"placeholder"} 
      title={"Artikel 1"} 
      text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dui sapien Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dui sapien Curabitur dui sapien Lorem ipsum dolor sit ametn"}
      />
      <ArticleWithImage 
      imgSrc={"https://loremflickr.com/cache/resized/65535_51722617146_5156e310d5_300_300_nofilter.jpg"} 
      imgTitle={"placeholder"} 
      title={"Artikel 1"} 
      text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dui sapien Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dui sapien Curabitur dui sapien Lorem ipsum dolor sit ametn"}
      />
      <ArticleWithImage 
      imgSrc={"https://loremflickr.com/cache/resized/65535_51722617146_5156e310d5_300_300_nofilter.jpg"} 
      imgTitle={"placeholder"} 
      title={"Artikel 1"} 
      text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dui sapien Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dui sapien Curabitur dui sapien Lorem ipsum dolor sit ametn"}
      />
    </div>
  );
}
