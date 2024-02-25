function ListeningBar({onTabChange}) {
const handleClick = (newIndex) => {
    onTabChange(newIndex);
    };
  return (
    <div className="fixed bottom-0 flex justify-between w-full p-8 bg-gray-999">
        <div className="flex flex-row w-full">
            <img className="w-32" src="https://upload.wikimedia.org/wikipedia/en/d/d1/Plasticbeach452.jpg"/>
            <div className="items-center h-full flex flex-col">
                <div className="p-5">
                    <p className="text-3xl">Empire Ants</p>
                    <p className="text-2xl text-gray-400">Gorillaz</p>
                </div>
             
            </div>
            <div className="items-center h-full flex flex-col mx-auto">
                <p className="flex">Yo</p>
                <div className="flex flex-row space-x-10">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 fill-white stroke-white" viewBox="0 0 92 92" id="shuffle"><path d="M68.2 30C64 30 53.5 40.4 45.8 47.9 34.2 59.1 23.2 70 14.4 70H9c-2.2 0-4-1.8-4-4s1.8-4 4-4h5.4c5.6 0 16.8-11.2 25.8-19.9 11-10.6 20.5-20.1 28-20.1h5.2l-5.5-5.3c-1.6-1.6-1.6-3.9 0-5.5s4.1-1.6 5.7 0l12.3 12.3c.8.8 1.2 1.8 1.2 2.8 0 1.1-.4 2.1-1.2 2.8L73.5 41.4c-.8.8-1.8 1.1-2.8 1.1-1 0-2-.4-2.8-1.2-1.6-1.6-1.6-4.2 0-5.7l5.5-5.6h-5.2zm5.3 20.6c-1.6-1.6-4.1-1.6-5.7 0-1.6 1.6-1.6 4.2 0 5.8l5.5 5.6h-5.2c-3.3 0-8.8-4.9-14.2-9.9-1.6-1.5-4.1-1.5-5.7.1-1.5 1.6-1.4 4.3.2 5.8 8.4 7.7 14 12 19.8 12h5.2l-5.5 5.3c-1.6 1.6-1.6 4 0 5.6.8.8 1.8 1.1 2.8 1.1 1 0 2-.4 2.8-1.2l12.3-12.3c.8-.8 1.2-1.8 1.2-2.8 0-1.1-.4-2.1-1.2-2.8L73.5 50.6zM9 30h5.4c4.2 0 10.5 5.4 15.5 9.9.8.7 1.7 1.1 2.7 1.1 1.1 0 2.2-.4 3-1.3 1.5-1.6 1.4-4.3-.3-5.8-7.8-7.1-14.4-12-20.9-12H9c-2.2 0-4 1.8-4 4S6.8 30 9 30z"></path></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-12 fill-white">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 16.811c0 .864-.933 1.406-1.683.977l-7.108-4.061a1.125 1.125 0 0 1 0-1.954l7.108-4.061A1.125 1.125 0 0 1 21 8.689v8.122ZM11.25 16.811c0 .864-.933 1.406-1.683.977l-7.108-4.061a1.125 1.125 0 0 1 0-1.954l7.108-4.061a1.125 1.125 0 0 1 1.683.977v8.122Z" />
                    </svg>

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-12 fill-white stroke-white">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061A1.125 1.125 0 0 1 3 16.811V8.69ZM12.75 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061a1.125 1.125 0 0 1-1.683-.977V8.69Z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" className="fill-white stroke-white w-12 h-12" viewBox="0 0 24 24" id="repeat"><g data-name="Layer 2"><path d="M17.91 5h-12l1.3-1.29a1 1 0 0 0-1.42-1.42l-3 3a1 1 0 0 0 0 1.42l3 3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42L5.91 7h12a1.56 1.56 0 0 1 1.59 1.53V11a1 1 0 0 0 2 0V8.53A3.56 3.56 0 0 0 17.91 5zm.3 9.29a1 1 0 0 0-1.42 1.42l1.3 1.29h-12a1.56 1.56 0 0 1-1.59-1.53V13a1 1 0 0 0-2 0v2.47A3.56 3.56 0 0 0 6.09 19h12l-1.3 1.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l3-3a1 1 0 0 0 0-1.42z" data-name="repeat"></path></g></svg>
                </div>
            </div>
            <div className="flex flex-row space-x-10 items-center mr-5">
                <button onClick={() => handleClick(5)}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-12 h-12">
                    <path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" />
                    </svg>
                </button>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-12 h-12">
                <path fill-rule="evenodd" d="M4.125 3C3.089 3 2.25 3.84 2.25 4.875V18a3 3 0 0 0 3 3h15a3 3 0 0 1-3-3V4.875C17.25 3.839 16.41 3 15.375 3H4.125ZM12 9.75a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5H12Zm-.75-2.25a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 0 1.5H12a.75.75 0 0 1-.75-.75ZM6 12.75a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5H6Zm-.75 3.75a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75ZM6 6.75a.75.75 0 0 0-.75.75v3c0 .414.336.75.75.75h3a.75.75 0 0 0 .75-.75v-3A.75.75 0 0 0 9 6.75H6Z" clip-rule="evenodd" />
                <path d="M18.75 6.75h1.875c.621 0 1.125.504 1.125 1.125V18a1.5 1.5 0 0 1-3 0V6.75Z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-12 h-12">
                <path fill-rule="evenodd" d="M2.25 5.25a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3V15a3 3 0 0 1-3 3h-3v.257c0 .597.237 1.17.659 1.591l.621.622a.75.75 0 0 1-.53 1.28h-9a.75.75 0 0 1-.53-1.28l.621-.622a2.25 2.25 0 0 0 .659-1.59V18h-3a3 3 0 0 1-3-3V5.25Zm1.5 0v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5Z" clip-rule="evenodd" />
                </svg>

                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-12 h-12">
                <path d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 0 0 1.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06ZM18.584 5.106a.75.75 0 0 1 1.06 0c3.808 3.807 3.808 9.98 0 13.788a.75.75 0 0 1-1.06-1.06 8.25 8.25 0 0 0 0-11.668.75.75 0 0 1 0-1.06Z" />
                <path d="M15.932 7.757a.75.75 0 0 1 1.061 0 6 6 0 0 1 0 8.486.75.75 0 0 1-1.06-1.061 4.5 4.5 0 0 0 0-6.364.75.75 0 0 1 0-1.06Z" />
                </svg>


            </div>
        </div>
    </div>
  );
}
export default ListeningBar;
