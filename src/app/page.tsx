import Image from "next/image";
import './frontpage/page'
import FrontPage from "./frontpage/page";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
  
      <FrontPage />
      
    </main>
  );
}
