import MusicCard from "./music_card";

function SentContent() {
  return (
    <div className="feed_main">
    <h1 className=" text-3xl font-bold">Sent Recommendations</h1>
        <div className="flex">
            <div className="pendingMusic">
                <h2 className=" text-2xl font-medium mt-4">Completed </h2>
                <MusicCard/>
            </div>
            <div className="completedMusic">
                <h2 className=" text-2xl font-medium mt-4">Pending </h2>
                <MusicCard/>
            </div>
        </div>
    </div>
  );
}
export default SentContent;