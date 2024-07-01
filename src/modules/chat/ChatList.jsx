import { LeftMessage, RightMessage } from "@/components";
import { chatData } from "@/utils";

const ChatList = () => {
  return (
    <div className="p-4 overflow-auto h-[calc(100vh-150px)]">
      <p className="text-center text-xs font-normal mb-10 text-[#666668]">
        8/20/2020
      </p>
      {chatData.map((chat, index) => (
        <div key={index}>
          {!chat.sender && <RightMessage data={chat} />}
          {chat.sender && <LeftMessage data={chat} />}
        </div>
      ))}
    </div>
  );
};

export default ChatList;
