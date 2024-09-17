import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const FontSans = Poppins({
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    subsets: ["latin"],
    variable: "--font-poppins",
});

export const metadata: Metadata = {
    title: "CodeLab Developer Toolkit Project Template",
    description: "Get started with your Next.js project using this template.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${FontSans.className} antialiased min-h-dvh h-dvh w-screen flex flex-col`}
            >
                {children}
            </body>
        </html>
    );
}
