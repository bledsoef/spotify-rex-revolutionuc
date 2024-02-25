import MusicCard from "/Users/daizenj/Desktop/spotify-rex-revolutionuc/rex_client/src/view/received/music_card.jsx";

function SentSubMain() {
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
export default SentSubMain;