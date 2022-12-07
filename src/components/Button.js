export function PrimaryButton(props) {
  return(
    <a href={props.to}>
      <button className="bg-secondary hover:bg-secondary/60 text-white font-bold py-2 px-4 border-2 border-secondary rounded-full">
        {props.children}
      </button>
    </a>
  );
}

export function SecondaryButton(props) {
  return(
    <a href={props.to}>
    <button className="bg-transparent/10 hover:bg-transparent/30 text-white font-bold py-2 px-4 border-2 border-white rounded-full">
      {props.children}
    </button>
    </a>
  );
}
