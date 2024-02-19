import Link from "next/link";

export const Home = () => {
    return (
        <div className="bg-white w-2/5 h-2/5 py-4 px-8 rounded-lg">
            <Link href="/register">
                Register
            </Link>
        </div>
    )
}