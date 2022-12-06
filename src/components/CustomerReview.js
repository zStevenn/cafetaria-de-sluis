function ReviewCard(props) {
  const stars = [];
  for (let i = 0; i < props.rating; i++) {
    stars.push("*");
  }
  return(
    <div className="flex flex-col flex-nowrap justify-center items-center bg-green-900 rounded-xl px-6 py-3 m-2 md:px-10 md:py-5">
      <div className="text-white text-base md:text-lg font-base md:font-lg truncate">{props.name}</div>
      <div className="text-yellow-500">
      {stars}
      </div>
    </div>
  );
}

export function ReviewList() {
  return(
    <div className="flex flex-row justify-center items-center">
    <div>Arrow left</div>
    <ReviewCard name={"Henk de Boer"} rating={2} />
    <ReviewCard name={"Henk de Boer"} rating={4} />
    <div>Arrow right</div>
    </div>
  );
}
