
const Links = () => {
  // const asdf = { listStyleType: "circle" };
  return (
    <div className="h-[35rem] w-[38rem] bg-[#D9D9D9] bg-opacity-90">
      <div className="flex flex-row">
        <div className="sombreadoRetro m-[1rem] h-[33rem] w-[20rem] bg-[#D9D9D9] p-[0.5rem]">
          <div className="pb-5 text-3xl font-semibold text-blue-700">Related links</div>
          <ul className="list-inside list-disc">
            <li className="">
              Github Repo{" "}
              <a className="text-blue-700 underline"  href="https://github.com/ValentinKrajzelman/copland-sim-vite" target="_blank" >
                Copland OS
              </a>
            </li>
            <li>Navi engine <a className="text-blue-700 underline" href="https://chat.openai.com/" target="_blank">ChatGPT</a></li>
            <li>Contact the dev <a className="text-blue-700 underline" href="https://www.linkedin.com/in/valentin-krajzelman-b23380161/" target="_blank">Valentin</a></li>
          </ul>
        </div>
        <div className="sombreadoRetro m-[1rem] w-[13.5rem] h-fit bg-[#D9D9D9] p-[0.5rem]">
          <div className="pb-10 text-2xl font-semibold text-blue-700">More content</div>
          <div>
            {" "}
            For more content, and cool software visit this <a className="text-blue-700 underline" href="https://github.com/ValentinKrajzelman" target="_blank">page</a>
            {" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Links;
