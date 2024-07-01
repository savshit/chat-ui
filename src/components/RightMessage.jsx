import Image from "next/image";

export const RightMessage = ({ data }) => {
  const { message, time } = data;
  return (
    <div className="flex justify-end ">
      <div className="bg-[#007AFF] after relative py-1 mr-5 px-2 mb-1.5 rounded-lg font-normal flex items-end gap-2 text-white">
        <p className="mb-2.5 text-sm max-w-[280px]">{message} </p>
        <p className="text-xs">{time}</p>
        <Image src="/images/read.png" width={20} height={20} alt="" />
      </div>
    </div>
  );
};
