import { Goal } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

function Chatbot() {
  return (
    <div className="flex flex-col relative w-full h-[calc(100vh_-_80px)] max-h-[calc(100vh_-_80px)] px-5">
      <div className="w-full h-auto pb-15 px-5 min-h-[calc(100vh_-_80px_-_60px)] overflow-y-auto">
        
      </div>
      <div className=" sticky bottom-0 left-0 right-0 flex items-center justify-between p-4 rounded-md backdrop-blur-md gap-2">
        <Input
          type="text"
          placeholder="Type your message here..."
          className=" bg-white border-t border-gray-200 px-4"
        />
        <Button>
          <Goal />
        </Button>
      </div>
    </div>
  );
}

export default Chatbot;
