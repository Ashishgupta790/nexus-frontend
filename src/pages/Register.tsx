import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { login } from "../features/auth/authSlice";
import { Button } from "../components/ui/Button";

type Form = { name: string; email: string; password: string; workspace: string };

export default function Register() {
  const { register, handleSubmit, formState: { errors } } = useForm<Form>();
  const dispatch = useAppDispatch(); const navigate = useNavigate();
  const onSubmit = (data: Form) => { dispatch(login({ name: data.name, email: data.email })); navigate("/app"); };
  return <div className="grid min-h-screen place-items-center bg-[#090b0f] p-5 text-white"><div className="w-full max-w-md"><Link to="/" className="mb-10 flex justify-center text-sm font-semibold tracking-[.2em]">NEXUS</Link><div className="rounded-3xl border border-white/10 bg-white/[.03] p-7 sm:p-9"><p className="text-xs uppercase tracking-[.2em] text-zinc-600">New workspace</p><h1 className="mt-3 text-2xl font-semibold">Create your workspace</h1><form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-4">{[["name","Name","text"],["email","Email","email"],["password","Password","password"],["workspace","Workspace name","text"]].map(([key,label,type]) => <label key={key} className="block text-sm text-zinc-400">{label}<input {...register(key as keyof Form,{required:`${label} is required`, ...(key==="password"?{minLength:{value:6,message:"Minimum 6 characters"}}:{})})} type={type} className="mt-2 h-11 w-full rounded-xl border border-white/10 bg-black/20 px-3 text-sm text-white outline-none focus:border-white/30" />{errors[key as keyof Form] && <span className="mt-1 block text-xs text-red-300">{errors[key as keyof Form]?.message}</span>}</label>)}<Button className="mt-2 w-full">Create workspace</Button></form><p className="mt-6 text-center text-sm text-zinc-600">Already have an account? <Link to="/login" className="text-zinc-300 hover:text-white">Log in</Link></p></div></div></div>;
}
