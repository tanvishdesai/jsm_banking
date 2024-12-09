import Image from "next/image";
import Sidebar from "../components/Sidebar";
import MobileNav from "../components/MobileNav";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = {firstname: 'tanvish', lastname: 'desai'}
  return (
   <main className="flex h-screen w-full font-inter" suppressHydrationWarning>
    <Sidebar user={loggedIn} />
    <div className="flex size-full flex-col">
      <div className="root-layout">
        <Image src="/icons/logo.svg" height={30} width={30} alt="logo"/>
        <div>
          <MobileNav user={loggedIn} />
        </div>
      </div>
    {children}
    </div>
   </main>
  );
}
