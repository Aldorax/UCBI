import { DotSquare } from "lucide-react";

export default function Roadmap() {
  return (
    <div id="roadmap" className="bg-white container p-20 text-black">
      <h1 className="text-2xl font-bold">RoadMap</h1>
      <div className="group relative flex gap-x-5 mt-4">
        <div className="relative group-last:after:hidden after:absolute after:top-8 after:bottom-2 after:start-3 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 after:bg-black-700">
          <div className="relative z-10 size-6 flex justify-center items-center">
            <DotSquare />
          </div>
        </div>

        <div className="grow pb-8 group-last:pb-0">
          <h3 className="mb-1 text-xs 600 text-black-400">
            October 2024 – November 2024
          </h3>

          <p className="font-semibold text-sm 800 text-black-200">
            Token Audit and Preparation
          </p>

          <p className="mt-1 text-sm 600 text-black-400">
            Additional Milestones:
          </p>
          <ul className="list-disc ms-6 mt-3 space-y-1.5">
            <li className="ps-1 text-sm 600 text-black-400">
              Creating Marketing Content Create infographics and educational
              content to help investors understand UCBI’s long-term strategy
            </li>
          </ul>
        </div>
      </div>

      <div className="group relative flex gap-x-5">
        <div className="relative group-last:after:hidden after:absolute after:top-8 after:bottom-2 after:start-3 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 after:bg-black-700">
          <div className="relative z-10 size-6 flex justify-center items-center">
            <DotSquare />
          </div>
        </div>

        <div className="grow pb-8 group-last:pb-0">
          <h3 className="mb-1 text-xs 600 text-black-400">
            December 2024 – January 2024
          </h3>

          <p className="font-semibold text-sm 800 text-black-200">
            Listing on the First Major Platform
          </p>

          <p className="mt-1 text-sm 600 text-black-400">
            Additional Milestones:
          </p>

          <div className="mt-3">
            <ul className="list-disc ms-6 mt-3 space-y-1.5">
              <li className="ps-1 text-sm 600 text-black-400">
                Performance Monitoring: Track trading volume demand signals and
                price indicators on this first platform of trading
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="group relative flex gap-x-5">
        <div className="relative group-last:after:hidden after:absolute after:top-8 after:bottom-2 after:start-3 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 after:bg-black-700">
          <div className="relative z-10 size-6 flex justify-center items-center">
            <DotSquare />
          </div>
        </div>

        <div className="grow pb-8 group-last:pb-0">
          <h3 className="mb-1 text-xs 600 text-black-400">
            February 2025 – April 2025
          </h3>

          <p className="font-semibold text-sm 800 text-black-200">
            Listing on Multiple Other Platforms
          </p>
          <p className="mt-1 text-sm 600 text-black-400">Upcoming Goals:</p>

          <ul className="list-disc ms-6 mt-3 space-y-1.5">
            <li className="ps-1 text-sm 600 text-black-400">
              Staking and Retention Strategy: Introduce staking options to
              encourage token holders to retain their assets thus reducing
              selling pressure
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
