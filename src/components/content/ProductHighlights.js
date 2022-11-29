function HighlightItem() {
	return (
		<div className="flex flex-col text-center justify-center p-2 mx-2">
      <img className="m-auto content-center w-auto h-48 rounded-3xl p-2" src="https://via.placeholder.com/125" alt="Product image" />
      <span className="text-lg text-gray-500 font-medium">Productnaam</span>
      <span className="text-base text-gray-700">€ 4,95</span>
    </div>
	);
}

function ProductHighlights() {
	return (
      <div className="flex flex-col bg-green-700 w-full h-full">
        <div className="m-4 rounded-3xl bg-white">
          <div className="flex flex-col text-center pt-4">
            <h2 className="text-lg text-gray-500">Vaak besteld</h2>
            <h1 className="text-2xl font-bold">Populaire Gerechten</h1>
          </div>
          <div className="flex flex-col sm:flex-row justify-center content-center m-4">
            <HighlightItem />
            <HighlightItem />
          </div>
        </div>
      </div>
    );
}

export default ProductHighlights;
