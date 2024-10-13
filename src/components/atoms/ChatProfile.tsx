import Image from "next/image";

export default function ChatProfile({ src }: { src?: string }) {
  console.log(src);
  return (
    <div className="h-[32px] w-[32px] overflow-hidden rounded-full">
      <Image
        width="32"
        height="32"
        alt="profile"
        src={src ?? ""}
        className="object-cover"
      />
    </div>
  );
}
