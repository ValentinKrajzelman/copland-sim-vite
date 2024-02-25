
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
              <a className="text-blue-700 underline"  href="https://google.com" target="_blank" >
                Copland OS
              </a>
            </li>
            <li>asdf</li>
            <li>asdf</li>
          </ul>
        </div>
        <div className="sombreadoRetro m-[1rem] w-[13.5rem] h-fit bg-[#D9D9D9] p-[0.5rem]">
          <div className="pb-10 text-2xl font-semibold text-blue-700">More content</div>
          <div>
            {" "}
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Necessitatibus accusantium tempora nulla consequatur quaerat ea
            ipsum voluptas optio mollitia, eaque iste{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Links;
