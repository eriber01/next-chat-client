
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import Provider from "./Providers";


const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Next Chats",
  description: "An App for Chats with all persons",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <Provider>
      <html lang="en">
        <body className={inter.className}>
          <AntdRegistry>
            {children}
          </AntdRegistry>
        </body>
      </html>
    </Provider>
  );
}
