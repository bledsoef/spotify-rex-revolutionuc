function MusicCard() {
  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-col bg-red-600 p-8 justify-between w-4/6 rounded-l-2xl">
        <div className="flex flex-row w-full justify-between">
          <div className="flex-col p-3">
            <div className="text-6xl font-semibold">Red</div> {/* Increased font size */}
            <div className="text-2xl pt-4 text-gray-50 font-normal">Taylor Swift</div> {/* Increased font size */}
          </div>
          <div className="flex-row user">
            <img
              className="rounded-full w-36 h-36 object-cover"
              src="https://shorturl.at/afOZ8"
              alt="User Avatar"
            />
            <div className="flex flex-col pt-2 pl-2"> {/* Added left padding */}
              <p className="text-4xl">David Lee</p>
              <p className="text-2xl text-gray-200">2 days ago</p>
            </div>
          </div>
        </div>
        <div className="flex-shrink-0 w-100">
          <img
            className="w-64 h-64 object-cover rounded-r-xl mt-3" // Adjusted size and margin
            src="https://media.pitchfork.com/photos/6352cd4063dcacf1f2521078/3:2/w_1998,h_1332,c_limit/Taylor-Swift-Red.jpg"
            alt="Music Cover"
          />
        </div>
      </div>
    </div>
  );
}

export default MusicCard;
