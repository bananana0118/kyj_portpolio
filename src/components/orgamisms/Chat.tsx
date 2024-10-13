import MessageAIwithProfile from "../molecules/MessageAIwithProfile";
import MessageUserWithNone from "../molecules/MessageUserWithNone";

export default function Chat({}) {
  return (
    <div className="flex h-full flex-col">
      <div className="bg-chatBackground flex w-auto flex-1 flex-col rounded-lg border-[2px] border-highlight lg:h-[700px] lg:w-[800px]">
        <div className="flex-1 overflow-y-auto px-7 py-4">
          <MessageAIwithProfile
            profileImg="/assets/profile.png"
            name={"프론트엔드"}
            message={"말풍선"}
          ></MessageAIwithProfile>
          <MessageUserWithNone message={"하이방갑습니다"}></MessageUserWithNone>
        </div>
        <div className="min-h-[134px] bg-primary px-7 py-7">
          <div>
            <div className="w-fit rounded-lg bg-gray-300 px-4 py-1 text-black">
              기술스택은 ?
            </div>
          </div>
          <div className="mt-2 flex flex-row justify-between gap-3">
            <input className="flex-1 rounded-lg border border-highlight bg-transparent px-4 py-2 text-fontWhite"></input>
            <button className="flex items-center justify-center text-white">
              버튼임당
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
