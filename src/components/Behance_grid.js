import { useState } from "react";
import { behanceItem } from "../Data";
import { FaFolderOpen } from "react-icons/fa";

const BehanceItems = () => {
  const [num, setnum] = useState(28);
  const incNum = () => {
    setnum(num + 1);
  };

  return (
    <section>
      <div className="container-fluid px-4 py-4 border-b">
        <div className="grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 gap-4">
          {behanceItem.map((item) => (
            <div className="category-items cursor-pointer">
              <div className="cat-img relative overflow-hidden rounded-md">
                <div className="bg-overlay"></div>
                <img
                  className="scale-90 transition-all duration-300 hover:scale-100"
                  src={item.featureImg}
                  alt="{item.featureImg}"
                />

                <div className="save-files flex items-center cursor-pointer absolute top-2 left-2 py-2 px-3 bg-black/50 rounded-full  ">
                  <div className="s-icon text-white text-sm  ">
                    <FaFolderOpen />
                  </div>
                  <span className="items-center flex text-white text-sm pl-1">
                    {" "}
                    Save
                  </span>
                </div>
              </div>
              <div className="info flex justify-between">
                <div className="name text-left cursor-pointer">
                  <h3 className="text-sm font-semibold hover:underline">
                    {item.featureTxt}
                  </h3>
                  <span className="text-sm hover:underline">
                    ~ {item.feUser}
                  </span>
                </div>

                <div className="count-data flex pr-1 pb-2">
                  <div
                    className="likes flex items-center px-2"
                    onClick={incNum}
                  >
                    <div className="likes-icon text-sm ">
                      {item.felikeIcons}
                    </div>
                    <span className="pl-1 text-sm ">{(item.felike = num)}</span>
                  </div>
                  <div className="watch flex items-center">
                    <div className="watch-icon text-sm ">
                      {item.fewatchIcon}
                    </div>
                    <span className="pl-1 text-sm">{item.feWatch}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="px-[10%] py-[10%] text-lg">
        <b>
          {" "}
          Sign up or Sign in to your account to view more work personalized to
          your preferences.{" "}
        </b>
        <br></br>
        <br></br>

        <button
          type="button"
          className="sign-up-button  text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2 text-sm me-2 mb-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Sign up with Email
        </button>
      </div>
    </section>
  );
};

export default BehanceItems;
