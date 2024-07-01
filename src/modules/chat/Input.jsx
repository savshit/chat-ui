import Image from "next/image";

const Input = () => {
  return (
    <div className="flex items-center align-middle gap-5 w-full p-5 border-t border-[#E5E5EA]">
      <Image src="/images/emoji.png" alt="" width={20} height={20} />
      <input placeholder="Start typing..." className="w-full focus-visible:outline-0" type="text"/>
      <Image src="/images/mention.png" alt="" width={20} height={20} />
      <Image src="/images/send.png" alt="" width={20} height={20} />
    </div>
  );
};

export default Input;
