export default function AssignmentTable() {
    const assignments = [
        {
            name: "English 6 Pd1",
            created: "May 18, 2025",
            graded: "May 20, 2025",
            progress: 73,
        },
        {
            name: "Science Pd3",
            created: "Jun 13, 2025",
            graded: "Jun 20, 2025",
            progress: 90,
        },
    ];

    return (
        <div>
            <div className="flex justify-between items-center mb-2">
                <h3 className="text-sm font-medium">Recent Assignments</h3>
                <a href="#" className="text-sm text-[#5b7cfd] hover:underline">View all</a>
            </div>
            <div className="bg-white rounded-lg shadow border border-gray-200 overflow-x-auto">
                <table className="min-w-[500px] w-full text-sm">
                    <thead className="bg-gray-50 text-left">
                        <tr className="text-gray-500">
                            <th className="px-4 py-2">Name</th>
                            <th className="px-4 py-2">Created</th>
                            <th className="px-4 py-2">Last Graded</th>
                            <th className="px-4 py-2">Marking Period</th>
                        </tr>
                    </thead>
                    <tbody>
                        {assignments.map((item, i) => (
                            <tr key={i} className="border-t">
                                <td className="px-4 py-3 break-words">{item.name}</td>
                                <td className="px-4 py-3">{item.created}</td>
                                <td className="px-4 py-3">{item.graded}</td>
                                <td className="px-4 py-3 w-64">
                                    <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                                        <div className="h-full bg-green-500 rounded-full" style={{ width: `${item.progress}%` }} />
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
