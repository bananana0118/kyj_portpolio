"use clinet";

export default function NavBar({}) {
    return (
        <nav className="flex flex-row justify-between items-end bg-primary">
            <div className="flex bg-primary text-fontWhite">
                <div className="sm:min-w-fit min-w-[250px] h-[64px] flex justify-center items-center">
                    <h1>소개합니다</h1>
                </div>
                <div className="min-w-[250px] h-[64px] flex justify-center items-center">
                    <h1>chat with 예정</h1>
                </div>
                <div className="min-w-[250px] h-[64px] flex justify-center items-center">
                    <h1>퀴즈</h1>
                </div>
            </div>
            <div className="text-fontWhite">
                <div className="min-w-[250px] h-[64px] flex justify-center items-center">
                    <h1>방명록</h1>
                </div>
            </div>
        </nav>
    );
}
