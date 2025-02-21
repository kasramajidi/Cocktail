import { Link } from "react-router-dom"
export default function Page404() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="flex flex-col items-center gap-10">
        <img src="../../public/img/illustration.svg" alt="404" />
        <div className="flex flex-col justify-center items-center gap-2">
          <h1 className="text-[#0F172A] text-[40px] font-light">Ohh!</h1>
          <p className="text-[#64748B] font-light">We cant seem to find page you are looking for.</p>
          <Link to={"/"} className="text-[#10B981]">
            Back Home
          </Link>
        </div>
      </div>
    </div>
  )
}

