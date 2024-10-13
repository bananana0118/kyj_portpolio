import MessageUser from "../atoms/MessageUser";

type MessageUserWithNoneType = {
  message: string;
};

export default function MessageUserWithNone({ message }: MessageUserWithNoneType) {
  return (
    <div className="flex flex-row gap-3 mt-7 justify-end">
      <div className="flex flex-col ">
        <MessageUser>{message}</MessageUser>
      </div>
    </div>
  );
}
