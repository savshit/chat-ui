import { images } from "@/utils";
import Image from "next/image";

export const Navbar = () => {
  return (
    <div className="flex justify-between items-center align-middle border-b p-4 border-[#E5E5EA]">
      <div className="flex">
        {images.map((image, index) => (
          <Image
            className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
            src={image.url}
            alt=""
            key={index}
            width={10}
            height={10}
          />
        ))}
      </div>
      <div className="text-center">
        <p className="font-semibold text-sm	">🦄 Team Unicorns</p>
        <p className="text-xs">last seen 45 minutes ago</p>
      </div>
      <div>
        <Image src="/images/more-icon.png" alt="" width={15} height={15} />
      </div>
    </div>
  );
};
