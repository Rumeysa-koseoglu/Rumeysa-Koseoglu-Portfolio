import avatar from "../assets/mesa-avatar.jpeg";
import avatar2 from "../assets/image.png";

function Navbar() {
  return (
    <div className="p-2 bg-[#3B2B29] shadow flex flex-row justify-between items-center gap-4 font-saira text-[#D6C0B8] text-xl">
      <div className="size-25 rounded-full bg-[#7a6050]"></div>
      <span className="text-2xl">Rümeysa Köseoğlu</span>
      <div className="text-[#f3eceabf] font-extralight flex flex-row m-auto w-[25%] justify-between">
        <span>About</span>
        <span>Experience</span>
        <span>Projects</span>
      </div>
    </div>
  );
}

export default Navbar;
