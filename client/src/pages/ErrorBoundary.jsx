import { Link } from "react-router-dom";
import { useGlobalContext } from "../provider/GlobalProvider";

const ErrorBoundary = () => {
    const { darkMode } = useGlobalContext();

    return (
        <section
            className={`min-h-screen flex items-center justify-center px-6 transition-colors duration-300 ${darkMode ? "bg-[#21222b] text-white" : "bg-gray-50 text-gray-900"
                }`}
        >
            <div className="max-w-xl text-center">
                <div
                    className={`mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full text-5xl font-bold ${darkMode
                            ? "bg-red-500/20 text-red-400"
                            : "bg-red-100 text-red-600"
                        }`}
                >
                    !
                </div>

                <h1 className="text-4xl font-bold">
                    Something went wrong
                </h1>

                <p
                    className={`mt-4 text-lg ${darkMode ? "text-gray-300" : "text-gray-600"
                        }`}
                >
                    An unexpected error occurred while loading this page.
                    Please try refreshing the page or return to the homepage.
                </p>

                <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
                    <button
                        onClick={() => window.location.reload()}
                        className={`rounded-lg px-6 py-3 font-semibold transition-all duration-300 ${darkMode
                                ? "bg-green-500 hover:bg-green-600 text-white"
                                : "bg-green-700 hover:bg-green-800 text-white"
                            }`}
                    >
                        Refresh Page
                    </button>

                    <Link
                        to="/"
                        className={`rounded-lg border px-6 py-3 font-semibold transition-all duration-300 ${darkMode
                                ? "border-gray-600 hover:bg-gray-700"
                                : "border-gray-300 hover:bg-gray-100"
                            }`}
                    >
                        Go to Home
                    </Link>
                </div>

                <p
                    className={`mt-8 text-sm ${darkMode ? "text-gray-400" : "text-gray-500"
                        }`}
                >
                    If this problem continues, please try again later.
                </p>
            </div>
        </section>
    );
};

export default ErrorBoundary;