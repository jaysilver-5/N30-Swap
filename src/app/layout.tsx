import type { PropsWithChildren } from "react";
import type { Metadata } from "next";

import { Root } from "@/components/Root/Root";

import "@telegram-apps/telegram-ui/dist/styles.css";
import "normalize.css/normalize.css";
import "./_assets/globals.css";
import { Navbar } from "@/components/Navbar/Navbar";
import { Header } from "@/components/Header/Header";

export const metadata: Metadata = {
  title: "Your Application Title Goes Here",
  description: "Your application description goes here"
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body>
        <Root>
          <div className="flex flex-col flex-1">{children}</div>
        </Root>
      </body>
    </html>
  );
}
