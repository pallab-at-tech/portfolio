import { Link } from "react-router-dom";
import { useGlobalContext } from "../provider/GlobalProvider";

const PageNotFound = () => {
    const { darkMode } = useGlobalContext();

    return (
        <section
            className={`min-h-screen flex items-center justify-center px-6 transition-colors duration-300 ${darkMode ? "bg-[#21222b] text-white" : "bg-gray-50 text-gray-900"
                }`}
        >
            <div className="text-center max-w-xl">
                <h1
                    className={`text-8xl font-extrabold ${darkMode ? "text-green-400" : "text-green-700"
                        }`}
                >
                    404
                </h1>

                <h2 className="mt-4 text-3xl font-bold">
                    Oops! Page Not Found
                </h2>

                <p
                    className={`mt-4 text-lg ${darkMode ? "text-gray-300" : "text-gray-600"
                        }`}
                >
                    The page you're looking for doesn't exist or may have been moved.
                </p>

                <Link
                    to="/"
                    className={`inline-block mt-8 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${darkMode
                        ? "bg-green-500 hover:bg-green-600 text-white"
                        : "bg-green-700 hover:bg-green-800 text-white"
                        }`}
                >
                    ← Back to Home
                </Link>
            </div>
        </section>
    );
};

export default PageNotFound;