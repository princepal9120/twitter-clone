import Image from "next/image";

import { BsBookmark, BsDot, BsEnvelope, BsTwitter } from "react-icons/bs";
import { BiBell,  BiHash, BiHomeCircle, BiUser } from "react-icons/bi";import { CiCircleMore } from "react-icons/ci";
import FeedCard from "@/components/FeedCard";
import { GoogleLogin } from '@react-oauth/google'
interface TwitterSideBarButton {
  title: string;
  icon: React.ReactNode;
}
const SideBarMenuItems: TwitterSideBarButton[] = [
  {
    title: "Home",
    icon: <BiHomeCircle />,
  },
  {
    title: "Explore",
    icon: <BiHash/>,
  },
  {
    title: "Notifications",
    icon: <BiBell/>,
  },
  {
    title: "Messages",
    icon: <BsEnvelope/>,
  },
  {
    title: "BookMark",
    icon: <BsBookmark/>,
  },
  {
    title: "Profile",
    icon: <BiUser/>,
  },  {
    title: "More",
    icon: <CiCircleMore />,
  },
];
export default function Home() {
  return (
    <div>
    <div className="grid grid-cols-12 h-screen w-screen px-56">
      <div className="col-span-3 pt-8">
        <div className="text-4xl h-fit w-fit hover:bg-gray-500 rounded-full p-2 cursor-pointer">
          <BsTwitter />
        </div>
        <div className="mt-4 text-xl font-bold pr-4">
          <ul>
            {SideBarMenuItems.map((data) => (
              <li
                className="flex justify-start items-center gap-2 w-fit hover:bg-gray-500  rounded-full px-5 py-2 cursor-pointer transition-all"
                key={data.title}
              >
                <span>{data.icon}</span> <span>{data.title}</span>
              </li>
            ))}
          </ul>
         <div className="mt-3 px-4"> <button className=" mt-4 bg-[#1d9bf0] rounded-full p-4 w-full"> Post</button></div>
        </div>
      </div>
      <div className="col-span-6 border-r-[1px] border-l-[1px] border-grey-400">
        <FeedCard/>
        <FeedCard/>
        <FeedCard/>
        <FeedCard/>
        <FeedCard/>
      </div>
      <div className="col-span-3"><GoogleLogin  onSuccess={(cred) => console.log(cred)}/></div>
    </div> </div>
  );
}
