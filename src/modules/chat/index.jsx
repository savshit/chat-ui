import { Navbar } from "@/components";
import ChatList from "./ChatList";
import Input from "./Input";

const Chat = () => {
  return (
    <div className="bg-white w-full">
      <Navbar />
      <ChatList />
      <Input />
    </div>
  );
};
export default Chat;
