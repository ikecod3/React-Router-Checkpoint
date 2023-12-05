// import { DownloadOutlined } from "@ant-design/icons";
const Navbar = () => {
  return (
    <nav className="shadow-lg p-3 bg-black">
      <div className="max-w-6xl mx-auto flex items-center gap-4 flex-wrap">
        <div className="mx-auto flex items-center gap-4">
          <img
            src="https://clipartcraft.com/images/movie-theater-clipart-transparent-background-7.png"
            alt="brand logo"
            className="w-16 h-14 rounded-full"
          />
          <h2 className="text-red-600 tracking-wide">GOMOVIES</h2>
        </div>
        {/* brand logo */}
        <div className="ml-auto space-x-10 text-red-600 mr-auto inline-flex flex-wrap">
          <span className="cursor-pointer">TV Shows</span>
          <span className="cursor-pointer">Entertainment</span>
          <span className="cursor-pointer">Preferences</span>
        </div>
        {/* *********************** */}
      </div>
    </nav>
  );
};

export default Navbar;
