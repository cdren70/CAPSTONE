import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUser, FaEnvelope, FaLock, FaCheck } from "react-icons/fa";

export default function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [touched, setTouched] = useState({
    name: false,
    email: false,
    password: false,
    confirmPassword: false,
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleBlur = (field) => {
    setTouched((prev) => ({
      ...prev,
      [field]: true,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    // Validasi
    if (formData.password !== formData.confirmPassword) {
      setError("Password dan konfirmasi password tidak sama");
      return;
    }

    try {
      // Simpan data user baru
      const newUser = {
        id: Date.now().toString(),
        name: formData.name,
        email: formData.email,
        password: formData.password,
      };

      const registeredUsers =
        JSON.parse(localStorage.getItem("registered_users")) || [];

      if (registeredUsers.some((u) => u.email === formData.email)) {
        throw new Error("Email sudah terdaftar");
      }

      registeredUsers.push(newUser);
      localStorage.setItem("registered_users", JSON.stringify(registeredUsers));

      setIsSuccess(true);
      setFormData({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      });

      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Daftar Akun Baru</h2>

      {isSuccess && (
        <div className="mb-4 p-3 bg-green-100 text-green-800 rounded-md flex items-center">
          <FaCheck className="mr-2" />
          Registrasi berhasil! Mengarahkan ke halaman login...
        </div>
      )}

      {error && !isSuccess && (
        <div className="mb-4 p-3 bg-red-100 text-red-800 rounded-md">
          {error}
        </div>
      )}

      {!isSuccess ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">
              Nama Lengkap
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaUser className="text-gray-400" />
              </div>
              <input
                type="text"
                name="name"
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.name}
                onChange={handleChange}
                onBlur={() => handleBlur("name")}
                required
              />
            </div>
            {touched.name && !formData.name && (
              <p className="mt-1 text-xs text-red-600">Nama harus diisi</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaEnvelope className="text-gray-400" />
              </div>
              <input
                type="email"
                name="email"
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.email}
                onChange={handleChange}
                onBlur={() => handleBlur("email")}
                required
              />
            </div>
            {touched.email && !formData.email && (
              <p className="mt-1 text-xs text-red-600">Email harus diisi</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaLock className="text-gray-400" />
              </div>
              <input
                type="password"
                name="password"
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.password}
                onChange={handleChange}
                onBlur={() => handleBlur("password")}
                required
                minLength={6}
              />
            </div>
            {touched.password && formData.password.length < 6 && (
              <p className="mt-1 text-xs text-red-600">
                Password minimal 6 karakter
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Konfirmasi Password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaLock className="text-gray-400" />
              </div>
              <input
                type="password"
                name="confirmPassword"
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.confirmPassword}
                onChange={handleChange}
                onBlur={() => handleBlur("confirmPassword")}
                required
              />
            </div>
            {touched.confirmPassword &&
              formData.password !== formData.confirmPassword && (
                <p className="mt-1 text-xs text-red-600">Password tidak sama</p>
              )}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors"
          >
            Daftar
          </button>
        </form>
      ) : (
        <div className="text-center py-4">
          <p className="text-gray-600">
            Silakan login dengan akun yang baru dibuat
          </p>
        </div>
      )}

      <div className="mt-4 text-center text-sm">
        <p className="text-gray-600">
          Sudah punya akun?{" "}
          <button
            onClick={() => navigate("/login")}
            className="text-blue-600 hover:underline font-medium"
          >
            Masuk di sini
          </button>
        </p>
      </div>
    </div>
  );
}
