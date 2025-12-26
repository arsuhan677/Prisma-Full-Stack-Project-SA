// "use client";

// import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import {
//   Field,
//   FieldDescription,
//   FieldGroup,
//   FieldLabel,
// } from "@/components/ui/field";
// import { Input } from "@/components/ui/input";
// import Link from "next/link";
// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import { signUp } from "@/lib/auth-client";

// export function SignupForm(props: React.ComponentProps<typeof Card>) {
//   const router = useRouter();
//   const [error, setError] = useState<string | null>(null);
//   const [loading, setLoading] = useState(false);

//   async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
//     e.preventDefault();
//     setError(null);
//     setLoading(true);

//     const formData = new FormData(e.currentTarget);
//     const password = formData.get("password") as string;
//     const confirmPassword = formData.get("confirm-password") as string;

//     if (password !== confirmPassword) {
//       setLoading(false);
//       setError("Passwords do not match");
//       return;
//     }

//     const res = await signUp.email({
//       name: formData.get("name") as string,
//       email: formData.get("email") as string,
//       password,
//     });

//     setLoading(false);

//     if (res.error) {
//       setError(res.error.message || "Something went wrong.");
//       return;
//     }

//     router.push("/admin/login");
//   }

//   return (
//     <Card {...props}>
//       <CardHeader>
//         <CardTitle>Create an account</CardTitle>
//         <CardDescription>
//           Enter your information below to create your account
//         </CardDescription>
//       </CardHeader>

//       <CardContent>
//         <form onSubmit={handleSubmit}>
//           <FieldGroup>
//             <Field>
//               <FieldLabel htmlFor="name">Full Name</FieldLabel>
//               <Input
//                 name="name"
//                 id="name"
//                 type="text"
//                 placeholder="John Doe"
//                 required
//               />
//             </Field>

//             <Field>
//               <FieldLabel htmlFor="email">Email</FieldLabel>
//               <Input
//                 name="email"
//                 id="email"
//                 type="email"
//                 placeholder="m@example.com"
//                 required
//               />
//               <FieldDescription>
//                 We&apos;ll never share your email with anyone else.
//               </FieldDescription>
//             </Field>

//             <Field>
//               <FieldLabel htmlFor="password">Password</FieldLabel>
//               <Input
//                 name="password"
//                 id="password"
//                 type="password"
//                 required
//               />
//               <FieldDescription>
//                 Must be at least 8 characters long.
//               </FieldDescription>
//             </Field>

//             <Field>
//               <FieldLabel htmlFor="confirm-password">
//                 Confirm Password
//               </FieldLabel>
//               <Input
//                 name="confirm-password"
//                 id="confirm-password"
//                 type="password"
//                 required
//               />
//             </Field>

//             <Field>
//               {error && (
//                 <p className="text-sm text-red-500">{error}</p>
//               )}

//               <Button type="submit" disabled={loading} className="w-full">
//                 {loading ? "Creating..." : "Create Account"}
//               </Button>

//               <Button
//                 variant="outline"
//                 type="button"
//                 className="w-full mt-2"
//               >
//                 Sign up with Google
//               </Button>

//               <FieldDescription className="text-center">
//                 Already have an account?{" "}
//                 <Link href="/admin/login" className="underline">
//                   Sign in
//                 </Link>
//               </FieldDescription>
//             </Field>
//           </FieldGroup>
//         </form>
//       </CardContent>
//     </Card>
//   );
// }
'use client';

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { useState } from "react";
import { useRouter } from "next/navigation";
import { signUp } from "@/lib/auth-client"

export function SignupForm({ ...props }: React.ComponentProps<typeof Card>) {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);

    const formData = new FormData(e.currentTarget);

    const res = await signUp.email({
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      password: formData.get("password") as string,
    });

    if (res.error) {
      setError(res.error.message || "Something went wrong.");
    } else {
      router.push("/admin/login");
    }
  }

  return (
    <Card {...props}>
      <CardHeader>
        <CardTitle>Create an account</CardTitle>
        <CardDescription>
          Enter your information below to create your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="name">Full Name</FieldLabel>
              <Input name="name" id="name" type="text" placeholder="John Doe" required />
            </Field>
            <Field>
              <FieldLabel htmlFor="email">Email</FieldLabel>
              <Input
                name="email"
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
              <FieldDescription>
                We&apos;ll use this to contact you. We will not share your email
                with anyone else.
              </FieldDescription>
            </Field>
            <Field>
              <FieldLabel htmlFor="password">Password</FieldLabel>
              <Input name="password" id="password" type="password" required />
              <FieldDescription>
                Must be at least 8 characters long.
              </FieldDescription>
            </Field>
            <Field>
              <FieldLabel htmlFor="confirm-password">
                Confirm Password
              </FieldLabel>
              <Input name="confirm-password" id="confirm-password" type="password" required />
              <FieldDescription>Please confirm your password.</FieldDescription>
            </Field>
            <FieldGroup>
              <Field>
                {error && <p className="text-red-500">{error}</p>}
                <Button type="submit">Create Account</Button>
                <Button variant="outline" type="button">
                  Sign up with Google
                </Button>
                <FieldDescription className="px-6 text-center">
                  Already have an account? <Link href="/admin/login">Sign in</Link>
                </FieldDescription>
              </Field>
            </FieldGroup>
          </FieldGroup>
        </form>
      </CardContent>
    </Card>
  )
}





