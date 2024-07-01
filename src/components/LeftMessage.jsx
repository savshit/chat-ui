import Image from "next/image";

export const LeftMessage = ({ data }) => {
  const { message, time, sender } = data;
  return (
    <div className="flex gap-2 items-start mb-3 ">
      <Image src={sender.url} width={30} height={30} alt="" />
      <div className="w-[fit-content] bg-[#F2F2F7] before ml-3 relative py-1 px-2 rounded-lg">
        <div className="flex items-center gap-5">
          <p className="font-semibold text-sm">{sender.name}</p>
          <p className="text-[#666668] text-xs">{sender.role}</p>
        </div>
        <div className="flex items-end gap-5">
          <p className="mb-2.5 text-sm max-w-[280px]">
            {message.replace(/@[\w\d]+!/g, "")}
            <span className="mr-1 text-[#007AFF]">
              {message.match(/@[\w\d]+/g) ? message.match(/@[\w\d]+/g)[0] : ""}
            </span>
          </p>
          <p className="text-xs font-normal text-[#666668]">{time}</p>
        </div>
      </div>
    </div>
  );
};
