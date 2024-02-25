import { useState } from "react";

function RequestContent() {
  const [requestOpen, setRequestOpen] = useState(true);

  if (requestOpen) {
    return (
      <div className="request_main_div w-1/3 fixed right-0 flex flex-col p-4 bg-gray-700 text-white">
        <div>
          <p className="text-3xl font-bold mb-4">Requests (13)</p>
        </div>
        <div className="flex items-center mb-4">
          <div className="flex-shrink-0">
            <img
              className="w-24 h-24 mr-4"
              src="https://lastfm.freetls.fastly.net/i/u/ar0/cceb700c14092aef1d9ccc61006ebbcf.jpg"
              alt="Enrique Iglesias"
            />
          </div>
          <div className="flex-grow">
            <p className="font-semibold text-3xl mb-2">Enrique Iglesias</p>
            <p className="text-2xl text-gray-300">Sent by Ali 2 days ago</p>
          </div>
          <div className="accept_reject flex flex-row justify-center items-center gap-2">
            <div className="cursor-pointer text-3xl text-green-500">✔</div>
            <div className="cursor-pointer text-3xl text-red-500">❌</div>
          </div>
        </div>
        <div className="flex items-center mb-4">
          <div className="flex-shrink-0">
            <img
              className="w-24 h-24 mr-4"
              src="https://lastfm.freetls.fastly.net/i/u/ar0/cceb700c14092aef1d9ccc61006ebbcf.jpg"
              alt="Enrique Iglesias"
            />
          </div>
          <div className="flex-grow">
            <p className="font-semibold text-3xl mb-2">Enrique Iglesias</p>
            <p className="text-2xl text-gray-300">Sent by Ali 2 days ago</p>
          </div>
          <div className="accept_reject flex flex-row justify-center items-center gap-2">
            <div className="cursor-pointer text-3xl text-green-500">✔</div>
            <div className="cursor-pointer text-3xl text-red-500">❌</div>
          </div>
        </div>
        <div className="flex items-center mb-4">
          <div className="flex-shrink-0">
            <img
              className="w-24 h-24 mr-4"
              src="https://lastfm.freetls.fastly.net/i/u/ar0/cceb700c14092aef1d9ccc61006ebbcf.jpg"
              alt="Enrique Iglesias"
            />
          </div>
          <div className="flex-grow">
            <p className="font-semibold text-3xl mb-2">Enrique Iglesias</p>
            <p className="text-2xl text-gray-300">Sent by Ali 2 days ago</p>
          </div>
          <div className="accept_reject flex flex-row justify-center items-center gap-2">
            <div className="cursor-pointer text-3xl text-green-500">✔</div>
            <div className="cursor-pointer text-3xl text-red-500">❌</div>
          </div>
        </div>
        <div className="flex items-center mb-4">
          <div className="flex-shrink-0">
            <img
              className="w-24 h-24 mr-4"
              src="https://lastfm.freetls.fastly.net/i/u/ar0/cceb700c14092aef1d9ccc61006ebbcf.jpg"
              alt="Enrique Iglesias"
            />
          </div>
          <div className="flex-grow">
            <p className="font-semibold text-3xl mb-2">Enrique Iglesias</p>
            <p className="text-2xl text-gray-300">Sent by Ali 2 days ago</p>
          </div>
          <div className="accept_reject flex flex-row justify-center items-center gap-2">
            <div className="cursor-pointer text-3xl text-green-500">✔</div>
            <div className="cursor-pointer text-3xl text-red-500">❌</div>
          </div>
        </div>
        <div className="flex items-center mb-4">
          <div className="flex-shrink-0">
            <img
              className="w-24 h-24 mr-4"
              src="https://lastfm.freetls.fastly.net/i/u/ar0/cceb700c14092aef1d9ccc61006ebbcf.jpg"
              alt="Enrique Iglesias"
            />
          </div>
          <div className="flex-grow">
            <p className="font-semibold text-3xl mb-2">Enrique Iglesias</p>
            <p className="text-2xl text-gray-300">Sent by Ali 2 days ago</p>
          </div>
          <div className="accept_reject flex flex-row justify-center items-center gap-2">
            <div className="cursor-pointer text-3xl text-green-500">✔</div>
            <div className="cursor-pointer text-3xl text-red-500">❌</div>
          </div>
        </div>
        <div className="flex items-center mb-4">
          <div className="flex-shrink-0">
            <img
              className="w-24 h-24 mr-4"
              src="https://lastfm.freetls.fastly.net/i/u/ar0/cceb700c14092aef1d9ccc61006ebbcf.jpg"
              alt="Enrique Iglesias"
            />
          </div>
          <div className="flex-grow">
            <p className="font-semibold text-3xl mb-2">Enrique Iglesias</p>
            <p className="text-2xl text-gray-300">Sent by Ali 2 days ago</p>
          </div>
          <div className="accept_reject flex flex-row justify-center items-center gap-2">
            <div className="cursor-pointer text-3xl text-green-500">✔</div>
            <div className="cursor-pointer text-3xl text-red-500">❌</div>
          </div>
        </div>
        <div className="flex items-center mb-4">
          <div className="flex-shrink-0">
            <img
              className="w-24 h-24 mr-4"
              src="https://lastfm.freetls.fastly.net/i/u/ar0/cceb700c14092aef1d9ccc61006ebbcf.jpg"
              alt="Enrique Iglesias"
            />
          </div>
          <div className="flex-grow">
            <p className="font-semibold text-3xl mb-2">Enrique Iglesias</p>
            <p className="text-2xl text-gray-300">Sent by Ali 2 days ago</p>
          </div>
          <div className="accept_reject flex flex-row justify-center items-center gap-2">
            <div className="cursor-pointer text-3xl text-green-500">✔</div>
            <div className="cursor-pointer text-3xl text-red-500">❌</div>
          </div>
        </div>

        {/* Repeat the structure for additional requests as needed */}
      </div>
    );
  }
}

export default RequestContent;
