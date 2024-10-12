"use client";

export default function GlobalError({
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
                <h2>준비 중 입니다.</h2>
                <button onClick={() => reset()}>Try again</button>
            </body>
        </html>
    );
}
