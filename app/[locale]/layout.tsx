import type { Metadata } from "next"
import "../globals.css";
import {NextIntlClientProvider} from "next-intl"
import { getMessages } from "next-intl/server";

export const metadata: Metadata = {
  title: "AgriNet",
  description: "Farming made Simple, Smart, profitable",
};

export default async function RootLayout({
  children,
  params: { locale }
}: Readonly<{
  children: React.ReactNode;
  params: {locale: string}
}>) {
  const messages = await getMessages();

  return (
    <>
    <html lang={locale}>
      <body >
        <NextIntlClientProvider messages={messages}>
        <div>
        {children}
        </div> 
        </NextIntlClientProvider>     
      </body>
    </html>
    </>
  );
}
