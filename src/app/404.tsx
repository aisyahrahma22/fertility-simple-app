import { useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
export default function  NotFound() {
  const router = useRouter();

  // Redirect to this page if the URL doesn't exist
  useEffect(() => {
    if (router.isFallback) {
      router.push("/404");
    }
  }, [router]);

  return (
    <div className="flex h-screen items-center justify-center bg-white text-center">
      <div>
        <Link
        href={`/courses`}
        >
        View Course
        </Link>
        <p className="mt-8 text-xl">The page you were looking for doesn&apos;t exist.</p>
        <p className="mt-4 text-lg text-gray-500">
          You may have mistyped the address or the page may have moved.
        </p>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  return {
    notFound: true, // Ensures Next.js knows this page is specifically for 404
  };
}
