function MusicCard() {
  return (
    <div className="flex flex-row w-full">
  <div className="flex flex-col bg-red-600 p-8 justify-between w-4/6 rounded-l-2xl">
    <div className="flex flex-row w-full justify-between">
      <div className="flex-col p-3">
        <div className="text-9xl font-semibold">Red</div>
        <div className="text-6xl pt-4 text-gray-100 font-normal">Taylor Swift</div>
      </div>
      <div className="flex-row user">
        <img
          className="rounded-full w-36 h-36 object-cover"
          src="https://shorturl.at/afOZ8"
          alt="User Avatar"
        ></img>
        <div className="flex flex-col pt-2">
          <p className="text-4xl">David Lee</p>
          <p className="text-2xl text-gray-200">2 days ago</p>
        </div>
      </div>
    </div>

    <div className="p-2 flex flex-col w-full">
      <p className="text-7xl pb-4 pl-2 font-bold">Reviews (7)</p>
      <div className="flex flex-row">
        <div className="flex-col p-3 w-1/4 flex">
          <p className="flex text-5xl w-full pb-6">⭐⭐⭐⭐</p>
          <p className="flex text-4xl">This is really good.</p>
        </div>
        <div className="flex-col p-3 w-1/4 flex">
          <p className="flex text-5xl w-full pb-6">⭐⭐⭐⭐⭐</p>
          <p className="flex text-4xl">This is so good.</p>
        </div>
        <div className="flex-col p-3 w-1/4 flex">
          <p className="flex text-5xl w-full pb-6">⭐⭐⭐⭐⭐</p>
          <p className="flex text-4xl">This is this is really good!.</p>
        </div>
        <div className="flex justify-end w-1/4">
          <button className="flex">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class=" p-2 w-48">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
          </button>
        </div>
      </div>

    </div>
  </div>

  <div className="flex-shrink-0 h-600 w-600">
    <img
      className="w-full h-full object-cover rounded-r-2xl"
      src="https://media.pitchfork.com/photos/6352cd4063dcacf1f2521078/3:2/w_1998,h_1332,c_limit/Taylor-Swift-Red.jpg"
      alt="Music Cover"
    ></img>
  </div>
</div>

  );
}

export default MusicCard;
