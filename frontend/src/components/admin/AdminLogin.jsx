import { GoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
    const navigate = useNavigate();

    const handleGoogleSuccess = async (credentialResponse) => {
        // 1. Send Google credential to backend
        try {
            const res = await fetch("http://localhost:5000/api/auth/google", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ token: credentialResponse.credential })
            });

            const data = await res.json();

            if (res.ok) {
                // 2. Save the JWT token in localStorage
                localStorage.setItem("adminToken", data.token);
                alert("Login Successful! Welcome " + data.user.name);
                navigate("/admin");
            } else {
                alert("Login Failed: " + data.message);
            }
        } catch (error) {
            console.error("Error logging in:", error);
            alert("Something went wrong");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-900 px-4">
            {/* Container / Card */}
            <div className="max-w-md w-full bg-gray-800 rounded-2xl shadow-2xl p-8 space-y-8 border border-gray-700">

                {/* Header section */}
                <div className="text-center">
                    <h2 className="text-3xl font-extrabold text-white tracking-tight">
                        Admin Portal
                    </h2>
                    <p className="mt-2 text-sm text-gray-400">
                        Sign in to manage your portfolio content
                    </p>
                </div>

                {/* Login Button Section */}
                <div className="mt-8 flex justify-center">
                    <div className="w-full flex justify-center py-4 bg-gray-750 rounded-xl hover:bg-gray-700 transition duration-300">
                        {/* The actual Google Button */}
                        <GoogleLogin
                            onSuccess={handleGoogleSuccess}
                            onError={() => {
                                console.log('Login Failed');
                                alert("Google Login Failed");
                            }}
                            shape="pill"
                            theme="filled_black" // Options: "outline", "filled_blue", "filled_black"
                            size="large"
                        />
                    </div>
                </div>

                {/* Footer/Warning */}
                <div className="mt-6 text-center text-xs text-gray-500">
                    This area is restricted to authorized administrators only.
                </div>

            </div>
        </div>
    );
};

export default AdminLogin;
