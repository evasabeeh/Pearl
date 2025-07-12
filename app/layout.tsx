import "./styles/globals.css";

export const metadata = {
    title: "Teacher Management Interface",
    description: "Modernized UI for Teacher Management",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className="bg-background-white text-gray-900 antialiased">
                {children}
            </body>
        </html>
    );
}
