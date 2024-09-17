import { FC, ReactNode } from "react";

export default function Home() {
    return (
        <div className="m-auto text-center px-5">
            <h1 className="text-2xl font-bold">
                CodeLab Developer Toolkit Project Template
            </h1>
            <p className="text-base font-normal">
                This template is a starting point for your Next.js project.
                Start by renaming <Code>.env.example</Code> to{" "}
                <Code>.env.local</Code>. Then add your Supabase URL and ANON KEY
                to your <Code>.env.local</Code> file. You can find these values
                in your Supabase project settings.
            </p>
        </div>
    );
}

interface CodeProps {
    children: ReactNode;
}

const Code: FC<CodeProps> = ({ children }) => (
    <code className="bg-gray-800 px-1 rounded text-red-500">{children}</code>
);
