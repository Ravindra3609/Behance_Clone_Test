import { MdArrowDropDown } from "react-icons/md";
import { MdAddAPhoto } from "react-icons/md";
import { FaTools } from "react-icons/fa";
import { IoIosColorPalette } from "react-icons/io";
import { IoCamera } from "react-icons/io5";
import { SiLens } from "react-icons/si";
import { MdExposure } from "react-icons/md";
import { FaRegImage } from "react-icons/fa";
import { GiFocusedLightning } from "react-icons/gi";
import { GiCube } from "react-icons/gi";

function Filters() {
  return (
    <>
      <div className="hidden lg:block border-b align-middle items-center">
        <div className="filter flex items-center justify-between ml-5 align-middle pb-1">
          <div className="tools-item flex items-center border rounded-md px-2 py-2 mr-1 justify-between">
            <div className="t-icon">
              <MdAddAPhoto />
            </div>
            <div className="tname px-2">
              <p className="text-sm font-bold">Photography</p>
            </div>
            <div className="dt-arrow">
              <MdArrowDropDown />
            </div>
          </div>

          <div className="tools-item flex items-center border rounded-md px-1 py-2 mr-1 justify-between">
            <div className="t-icon">
              <FaTools />
            </div>
            <div className="tname px-2">
              <p className="text-sm font-bold">Tools</p>
            </div>
            <div className="dt-arrow">
              <MdArrowDropDown />
            </div>
          </div>

          <div className="tools-item flex items-center border rounded-md px-1 py-2 mr-1 justify-between">
            <div className="t-icon">
              <IoIosColorPalette />
            </div>
            <div className="tname px-2">
              <p className="text-sm font-bold"> Colors</p>
            </div>
            <div className="dt-arrow">
              <MdArrowDropDown />
            </div>
          </div>

          <div className="tools-item flex items-center border rounded-md px-1 py-2 mr-1 justify-between">
            <div className="t-icon">
              <IoCamera />
            </div>
            <div className="tname px-2">
              <p className="text-sm font-bold">Camera</p>
            </div>
            <div className="dt-arrow">
              <MdArrowDropDown />
            </div>
          </div>

          <div className="tools-item flex items-center border rounded-md px-1 py-2 mr-1 justify-between">
            <div className="t-icon">
              <SiLens />
            </div>
            <div className="tname px-2">
              <p className="text-sm font-bold">Lens</p>
            </div>
            <div className="dt-arrow">
              <MdArrowDropDown />
            </div>
          </div>

          <div className="tools-item flex items-center border rounded-md px-1 py-2 mr-1 justify-between">
            <div className="t-icon">
              <MdExposure />
            </div>
            <div className="tname px-2">
              <p className="text-sm font-bold">Exposure</p>
            </div>
            <div className="dt-arrow">
              <MdArrowDropDown />
            </div>
          </div>

          <div className="tools-item flex items-center border rounded-md px-1 py-2 mr-1 justify-between">
            <div className="t-icon">
              <FaRegImage />
            </div>
            <div className="tname px-2">
              <p className="text-sm font-bold">Types</p>
            </div>
            <div className="dt-arrow">
              <MdArrowDropDown />
            </div>
          </div>

          <div className="tools-item flex items-center border rounded-md px-1 py-2 mr-1 justify-between">
            <div className="t-icon">
              <GiCube />
            </div>
            <div className="tname px-2">
              <p className="text-sm font-bold">Nfts</p>
            </div>
            <div className="dt-arrow">
              <MdArrowDropDown />
            </div>
          </div>

          <div className="tools-item flex items-center border rounded-md px-1 py-2 m-1 justify-between">
            <div className="t-icon">
              <GiFocusedLightning />
            </div>
            <div className="tname px-2">
              <p className="text-sm font-bold">Lengths</p>
            </div>
            <div className="dt-arrow">
              <MdArrowDropDown />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Filters;
