"use client";

export default function Header() {
    const today = new Date();
    const formattedDate = today.toLocaleDateString("en-US", {
        weekday: "long",
        month: "long",
        day: "numeric",
        year: "numeric",
    });

    return (
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
            <h1 className="text-2xl font-bold">Welcome Teacher!</h1>
            <div className="text-right text-sm text-gray-500">
                <p>Today is {formattedDate}</p>
                <p className="text-xs">MP4 ends in 21 days</p>
            </div>
        </div>
    );
}
