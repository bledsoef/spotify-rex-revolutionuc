function MusicCard() {
  return (
    <div className="flex flex-col w-1/2 pt-5">
      <div className="flex bg-red-600 p-8 w rounded-2xl pt-2">
        <div className="flex flex-col">
        <div className="flex flex-col">
          <div>
            <div className="text-5xl font-semibold">Red</div>
            <div className="text-2xl pt-1 text-gray-100 font-normal">Taylor Swift</div>
          </div>
        </div>
        <div className="flex flex-row pt-3">
          <div className="flex-shrink-0 w-42 h-40 mr-4">
            <img
              className="w-full h-full object-cover rounded-r-xl"
              src="https://media.pitchfork.com/photos/6352cd4063dcacf1f2521078/3:2/w_1998,h_1332,c_limit/Taylor-Swift-Red.jpg"
              alt="Music Cover"
            />
          </div>
          <div className="flex flex-col items-space-between">
            <div className="flex flex-row items-space-between pt-14">
              <img
                className="rounded-full w-10 h-10 object-cover mb-1 mr-2"
                src="https://shorturl.at/afOZ8"
                alt="User Avatar"
              />
                <p className="text-2xl">David</p>
            </div>
            <div>
              <p className="text-1xl text-gray-200 ml-4">2 days ago</p>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}
export default MusicCard;
