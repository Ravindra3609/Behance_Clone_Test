function Header1() {
  return (
    <div className="header1 border-b  px-4 container-fluid flex justify-between ">
      {/* Header-1 Left Portion */}
      <div className="header_left flex ">
        <ul className="flex items-center align-center justify-between font-medium">
          <li className="logo_behance mr-8 w-[120px] ">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsR-OsxScVFxpl0JRp8z2XraQ11-4saV78-tehs1ItbQ&s" />{" "}
          </li>
          <li className="logo_page mx-1 my-0 pl-6 relative">
            <select className="text-md font-medium outline-none ">
              <option value="1" className="block py-2 px-2 ">
                Explore
              </option>
              <option value="2"> Search & Explore</option>
              <option value="3"> Curated Galleries</option>
              <option value="4"> Best of Behance </option>
              <option value="5"> Graphic Design </option>
              <option value="6"> Illustration</option>
              <option value="6"> Photography </option>
              <option value="6"> UI/UX </option>
              <option value="6"> 3D Art </option>
            </select>
          </li>

          <li className="logo_page mx-4 my-0">
            <a href="#">Assets</a>
          </li>
          <li className="logo_page mx-4 my-0">
            <a href="#">Jobs</a>
          </li>
          <li className="logo_page mx-4 my-0">
            <a href="#">
              Behance <b>PRO</b>
            </a>
          </li>
          <li className="logo_page mx-4 my-0">
            <select className="text-md font-medium pr-1">
              <option value="1" className="block py-8 px-6 ">
                {" "}
                Hire Freelancers
              </option>
              <option value="2"> Find Creatives </option>
              <option value="3"> My Freelance Projects </option>
              <option value="4"> New Freelance Project </option>
              <option value="5"> Graphic Designers </option>
              <option value="6"> Brand Designers </option>
              <option value="6"> UI/UX Designers </option>
              <option value="6"> Illustrators </option>
              <option value="6"> Logo Designers </option>
            </select>
          </li>
        </ul>
      </div>

      <div className="header_right flex items-center align-middle justify-between font-medium ">
        <button
          type="button"
          className="log-in-button mt-3  text-blue-00 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2 me-2 mb-3 dark:bg-blue-100 dark:text-blue-700 dark:border-gray-600 dark:hover:bg-blue-100 dark:focus:ring-gray-700"
        >
          Log in
        </button>

        <button
          type="button"
          className="sign-up-button  text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2 text-sm me-2 mb-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          SignUp
        </button>

        <div className="adobe-button flex items-center align-middle justify-between font-medium ">
          <img
            className="adobe-image size-5"
            src="https://pic.onlinewebfonts.com/thumbnails/icons_521761.svg"
            alt="img"
          />
          <a href="#" className="adobe">
            Adobe
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header1;
