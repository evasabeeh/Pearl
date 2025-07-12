export default function Timetable() {
    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
    const periods = ["8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM"];

    const schedule: { [day: string]: string[] } = {
        Monday: ["English", "English", "Science", "History", "Free"],
        Tuesday: ["Free", "English", "Free", "English", "Free"],
        Wednesday: ["Free", "Science", "English", "Geography", "Free"],
        Thursday: ["Science", "Geography", "Free", "English", "History"],
        Friday: ["Geography", "Science", "Free", "English", "Science"],
    };

    const subjectColors: { [subject: string]: string } = {
        Math: "bg-blue-100 text-blue-700",
        English: "bg-red-100 text-red-700",
        Science: "bg-green-100 text-green-700",
        History: "bg-yellow-100 text-yellow-800",
        Geography: "bg-purple-100 text-purple-700",
        Computer: "bg-indigo-100 text-indigo-700",
        Sports: "bg-orange-100 text-orange-700",
        Music: "bg-pink-100 text-pink-700",
        Art: "bg-rose-100 text-rose-700",
        Library: "bg-teal-100 text-teal-700",
        Free: "bg-gray-100 text-gray-500",
    };

    return (
        <div>
            <h3 className="font-medium text-sm mb-2">Weekly Timetable</h3>
            <div className="overflow-x-auto">
                <table className="min-w-full table-fixed border border-gray-300 rounded-lg overflow-hidden text-sm">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="w-28 p-2 text-left border-r">Time</th>
                            {days.map((day) => (
                                <th key={day} className="p-2 text-left border-r">
                                    {day}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {periods.map((time, i) => (
                            <tr key={i} className="border-t">
                                <td className="p-2 font-medium border-r">{time}</td>
                                {days.map((day) => {
                                    const subject = schedule[day][i];
                                    return (
                                        <td
                                            key={day + i}
                                            className={`p-2 text-center font-medium ${subjectColors[subject] || ""}`}
                                        >
                                            {subject}
                                        </td>
                                    );
                                })}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
