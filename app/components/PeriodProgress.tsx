export default function PeriodProgress() {
    const periods = [
        { subject: "English", value: 25, color: "bg-red-100", text: "text-red-600" },
        { subject: "Science", value: 25, color: "bg-yellow-100", text: "text-yellow-600" },
        { subject: "Geography", value: 18, color: "bg-green-100", text: "text-green-600" },
        { subject: "History", value: 18, color: "bg-blue-100", text: "text-blue-600" },
    ];

    return (
        <div>
            <h3 className="font-medium text-sm mb-2">Overall Marking Period Progress</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {periods.map((p, i) => (
                    <div key={i} className={`${p.color} ${p.text} px-3 py-2 rounded text-center text-xs font-medium`}>
                        {p.value}% ({Math.floor(p.value * 1.5)} students)
                    </div>
                ))}
            </div>
        </div>
    );
}
