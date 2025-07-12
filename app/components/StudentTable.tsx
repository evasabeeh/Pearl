export default function StudentTable() {
    const students = [
        {
            name: "Riya Bhannot",
            subject: "Science",
            date: "Mar 2, 2024",
            img: "https://randomuser.me/api/portraits/men/32.jpg",
        },
        {
            name: "Jai Kumar",
            subject: "English",
            date: "Apr 20, 2024",
            img: "https://randomuser.me/api/portraits/women/65.jpg",
        },
    ];

    return (
        <div>
            <div className="flex justify-between items-center mb-2">
                <h3 className="text-sm font-medium">Student&apos;s Progress</h3>
                <a href="#" className="text-sm text-[#5b7cfd] hover:underline">View all</a>
            </div>
            <div className="bg-white rounded-lg shadow border border-gray-200 overflow-x-auto">
                <table className="min-w-[500px] w-full text-sm">
                    <thead className="bg-gray-50 text-left">
                        <tr className="text-gray-500">
                            <th className="px-4 py-2">Name</th>
                            <th className="px-4 py-2">Subject</th>
                            <th className="px-4 py-2">Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {students.map((student, i) => (
                            <tr key={i} className="border-t">
                                <td className="px-4 py-3 flex items-center gap-3">
                                    <img src={student.img} alt={student.name} className="w-8 h-8 rounded-full" />
                                    {student.name}
                                </td>
                                <td className="px-4 py-3">{student.subject}</td>
                                <td className="px-4 py-3">{student.date}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
