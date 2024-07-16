"use client";
import DynamicDropdown from "./DoubleDropdown";
import MobileMenu from "@/components/MobileMenu";

export default function Home() {
  return (
    <>
      <div className="mx-auto max-w-screen-lg px-4 md:px-0">
        <div className="info flex items-center h-12 w-semifull bg-gray-100 rounded-3xl mt-8">
          <div className="infologo">
            <img
              src="https://i.pinimg.com/564x/44/ab/70/44ab7074255f48d58f8f11e69ae0bb30.jpg"
              alt="logo"
              className="h-12 w-[63px] rounded-l-full"
            />
          </div>
          <p className="text-lg text-purple-800 font-bold pl-2">Occasion Permission</p>
          <i className="fas fa-angle-left pl-20 text-blue-800"></i>
        </div>
        <DynamicDropdown />

      </div>
      <div className="sm:hidden fixed bottom-0 w-full">
        <MobileMenu isLogin={false} />
      </div>
    </>

  );
}