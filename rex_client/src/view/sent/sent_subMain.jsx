import MusicCard from "./music_card";

function SentSubMain() {
  return (
    <div className="feed_main">
    <h1 className=" text-3xl font-bold">Received Recommendations</h1>
        <div className="flex w-fullß">
            <div className="pendingMusic w-1/2">
                <h2 className=" text-2xl font-medium mt-3">Pending </h2>
                <div className="flex flex-row space-x-4">
                  <MusicCard/>
                  <MusicCard/>
                </div> 
                <div className="flex flex-row space-x-4">
                  <MusicCard/>
                  <MusicCard/>
                </div> 
                <div className="flex flex-row space-x-4">
                  <MusicCard/>
                  <MusicCard/>
                </div> 
            </div>
            <div className="completedMusic w-1/2 ml-10">
            <h2 className=" text-2xl font-medium mt-3 ">Completed</h2>
                <div className="flex flex-row space-x-4">
                  <MusicCard/>
                  <MusicCard/>
                </div> 
                <div className="flex flex-row space-x-4">
                  <MusicCard/>
                  <MusicCard/>
                </div> 
                <div className="flex flex-row space-x-4">
                  <MusicCard/>
                  <MusicCard/>
                </div> 
            </div>
        </div>
    </div>
  );
}

export default SentSubMain;