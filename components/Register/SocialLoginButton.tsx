import { auth, signIn } from "@/app/auth";
import { SocialLogin } from "@/lib/Helper/SocialLogin";
import { redirect } from "next/navigation";
import { FaGoogle } from "react-icons/fa6";

export default async function SocialLoginButton({
  icon,
  type,
  userType = "student",
  login
}: {
  icon: any;
  type: string;
  userType?: string;
  login?:boolean
}) {
//   const session = await auth();
// console.log(session);


//   if (session?.user) {
//     if(!login){
//     const res = await fetch(`${process.env.BASE_URL}/student`, {
//       method: "POST",
//       body: JSON.stringify({
//         email: session?.user?.email,
//         name: session?.user?.name,
//         image: session?.user?.image,
//         type: userType,
//         isSocialLogin: {
//           status: true,
//           type: type,
//         },
//       }),
//     });
//     const data = await res.json();

//     if (data.isOk) {
//       return redirect("/login");
//     }
//   }else{
//     const res = await fetch(`${process.env.BASE_URL}/student/login`, {
//       method: "POST",
//       body: JSON.stringify({
//         email: session?.user?.email,
//         type: userType,
//         isSocialLogin: {
//           status: true,
//           type: type,
//         },
//       }),
//     });
//     const data = await res.json();
//     console.log(data);
    
//     if (data.isOk) {
//       return redirect("/login");
//     }
//   }
//   }
  async function Submit() {
    "use server";

    await signIn(type, { redirectTo: "/login" });
  }

  return (
    <form action={Submit}>
      <button
        type="submit"
        className="p-3 text-2xl text-white bg-primary rounded-lg"
      >
        {icon}
      </button>
    </form>
  );
}
