// "use client";


// import { SessionProvider, signIn, signOut, useSession } from "next-auth/react";

// export default function Home() {
//   return (
//     <SessionProvider>
//       <UseAuthentication />
//     </SessionProvider>
//   );
// }

// function UseAuthentication() {
//   const session = useSession();

//   return (
//     <div className="flex h-screen flex-col w-full mx-auto container">
//       <div className="flex bg-white/10 mt-6 py-3 px-6 rounded-lg justify-between items-center">
//         <div className="text-2xl font-bold">Authappp</div>
//         <div>
//           {/* is authenticated */}
//           {session.status === "authenticated" && (
//             <button
//               onClick={() => signOut()}
//               className="bg-rose-500 hover:bg-rose-700 text-white font-bold py-2 px-4 rounded-lg"
//             >
//               Logout
//             </button>
//           )}

//           {/* is not authenticated */}
//           {session.status !== "authenticated" && (
//             <button
//               onClick={() => signIn()}
//               className="bg-emerald-500 hover:bg-emerald-700 text-black font-bold py-2 px-4 rounded-lg"
//             >
//               Login
//             </button>
//           )}
//         </div>
//       </div>
//       {session.status === "authenticated" && (
//         <h1 className="flex h-full items-center justify-center font-bold text-2xl">
//           Hi Pritam
//         </h1>
//       )}
//     </div>
//   );
// }


import { getServerSession } from "next-auth";

export default async function Home() {
  const session = await getServerSession();

  return (
    <div>
      {JSON.stringify(session)}
    </div>
  );
}
