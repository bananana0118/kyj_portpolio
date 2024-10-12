"use client";

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    console.log(error);
    return (
        <html>
            <body>
                <h2>퀴즈페이지는 준비중 입니다.</h2>
                <button onClick={() => reset()}>Try again</button>
            </body>
        </html>
    );
}
