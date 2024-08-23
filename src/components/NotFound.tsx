import Image from "next/image";
import Link from "next/link";
import gif from '../../public/404.gif'

export function NotFound() {
    return (
        <div className="flex flex-col xl:flex-row h-screen justify-center items-center px-4 gap-6 animate-fade-in">
            <Image 
                src={gif} 
                alt="404 not found"
                width={450}
            />

            <div className="flex flex-col gap-4 max-w-md w-auto">
                <div className="flex flex-col gap-2">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold duration-500">
                        Woops...
                    </h2>

                    <h3 className="text-sm sm:text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl font-medium text-zinc-500 duration-500 text-nowrap">
                        We couldn`t find the page you were looking for
                    </h3>
                </div>

                <Link href={'/'}>
                    <button className="border-2 border-zinc-300 py-2 px-4 rounded-lg font-medium hover:shadow-xl duration-500 w-full sm:w-auto">
                        Go home
                    </button>
                </Link>
            </div>
        </div>
    )
}