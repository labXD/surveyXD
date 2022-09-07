import { NextPage } from "next";

import { useActiveSurveyFromRoute } from "../hooks";
export const NewSurveyPage: NextPage = () => {
  const { loading, data } = useActiveSurveyFromRoute();

  if (loading) {
    return <div>Loading...</div>;
  }

  // TODO: handle remaining statuses

  return (
    <>
      {/* <h2>{data?.title ?? "Untitled"}</h2> */}
      <div className="mx-4 border-b border-b-neutral-300 flex items-baseline justify-between">
        <input
          placeholder="Survey Title"
          className=" w-full py-2 text-2xl placeholder:text-black font-bold"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </div>
      <div className="px-4 pt-3 flex space-x-4">
        <div className="text-indigo-700 font-semibold border-b-2 border-b-indigo-700 pb-2">
          Questions
        </div>
        <div className="text-neutral-900 font-normal pb-2">Responses</div>
      </div>
      <div className="border-l-2 border-l-red-500 min-h-[300px] mt-8 px-4">
        <div className="border-b border-b-neutral-300 flex items-baseline justify-between">
          <input placeholder="Question title" className=" w-full py-2 " />
        </div>
        <div className="border-b border-b-neutral-300 flex items-baseline justify-between pt-8">
          <input placeholder="Question description" className=" w-full py-2 " />
        </div>
        <div className="pt-8">
          <button className="flex items-center text-sm px-3 py-2 border border-neutral-300 rounded-sm">
            <span className="bg-black rounded-full w-3 h-3 border-black ring-1 ring-black ring-offset-2" />
            <span className="px-4">Single Choice</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </button>
        </div>
        <div className="pt-8">
          <div className="border border-neutral-300 flex items-baseline justify-between px-4 rounded-sm">
            <input placeholder="Yes" className=" w-full py-2 " />
          </div>
        </div>
      </div>
    </>
  );
};
