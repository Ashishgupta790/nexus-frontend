import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { login } from "../features/auth/authSlice";
import { Button } from "../components/ui/Button";

type Form = { email: string; password: string };

export default function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm<Form>();
  const dispatch = useAppDispatch(); const navigate = useNavigate();
  const onSubmit = (data: Form) => { dispatch(login({ name: data.email.split("@")[0], email: data.email })); navigate("/app"); };
  return <div className="grid min-h-screen place-items-center bg-[#090b0f] p-5 text-white"><div className="w-full max-w-md"><Link to="/" className="mb-10 flex justify-center text-sm font-semibold tracking-[.2em]">NEXUS</Link><div className="rounded-3xl border border-white/10 bg-white/[.03] p-7 sm:p-9"><p className="text-xs uppercase tracking-[.2em] text-zinc-600">Welcome back</p><h1 className="mt-3 text-2xl font-semibold">Log in to your workspace</h1><form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-4"><label className="block text-sm text-zinc-400">Email<input {...register("email",{required:"Email is required"})} type="email" className="mt-2 h-11 w-full rounded-xl border border-white/10 bg-black/20 px-3 text-sm text-white outline-none focus:border-white/30" placeholder="you@example.com"/>{errors.email && <span className="mt-1 block text-xs text-red-300">{errors.email.message}</span>}</label><label className="block text-sm text-zinc-400">Password<input {...register("password",{required:"Password is required"})} type="password" className="mt-2 h-11 w-full rounded-xl border border-white/10 bg-black/20 px-3 text-sm text-white outline-none focus:border-white/30" placeholder="••••••••"/>{errors.password && <span className="mt-1 block text-xs text-red-300">{errors.password.message}</span>}</label><Button className="mt-2 w-full">Log in</Button></form><p className="mt-6 text-center text-sm text-zinc-600">No workspace? <Link to="/register" className="text-zinc-300 hover:text-white">Create one</Link></p></div></div></div>;
}
