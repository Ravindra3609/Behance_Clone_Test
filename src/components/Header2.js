import { IoSearch } from "react-icons/io5";

function Header2() {
  return (


    <div className="header2 py-[1%] px-[1%]  align-middle  ">
      <div className="search-bar py-[1%] px-[3%]  w-full border-2  rounded-full flex bg-[#e4e4e4] overflow-hidden  items-center justify-between   ">

      <div className="flex ">
              <select className="text-lg font-medium outline-none ">
                <option value="1" className="block py-8 px-6 ">
                  {" "}
                  Filter
                </option>
                <option value="2"> Projects </option>
                <option value="3"> Assets </option>
                <option value="4"> Images </option>
                <option value="5"> People </option>
                <option value="6"> Creative Field </option>
                <option value="6"> Availability </option>
                <option value="6"> Location </option>
                <option value="6"> Tools </option>
                <option value="6"> Color </option>

              </select>
            </div>

        <div className="header2-left flex align-middle  ">
          <div className="flex ml-[-70%] items-center bg-transparent ">
            <IoSearch  />
          </div>
          <input
            className=" ml-3  bg-transparent w-96 outline-none  text-lg placeholder:font-bold  l-200  placeholder:text-[#0a0909] "
            type="text"
            placeholder="Search the creative world at work"
          />
        </div>

        <div className="tags-lists bg-white align-middle h-fit l-100% border-l-2">
          <ul className="flex items-center align-middle justify-between font-medium h-fit l-100% overflow-hidden">


            <div className="flex ">
              <select className="text-lg font-medium outline-none ">
                <option value="1" className="block py-2 px-4 hover:bg-gray-100">
                  {" "}
                  Recommended
                </option>
                <option value="2"> Curated </option>
                <option value="3"> Most Appretciated </option>
                <option value="4"> Most Viewed </option>
                <option value="5"> Most Discussed </option>
                <option value="6"> Most Recent </option>
              </select>
            </div>
          </ul>
        </div>
      </div>
      {/* <div className="header2-left flex align-middle  ">
                   <div className= "flex ml-3 items-center bg-transparent "><IoSearch /></div>   
                   <input className=' ml-6  bg-transparent w-96 outline-none  placeholder:font-bold  l-200  placeholder:text-[#777] ' type="text" placeholder="Search the creative world at work"/>
               </div> */}
    </div>
  );
}

export default Header2;
