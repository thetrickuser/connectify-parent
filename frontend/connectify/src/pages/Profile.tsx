import { FaCamera } from "react-icons/fa";
import Header from "../components/Header.tsx";
import { FaPencil } from "react-icons/fa6";

const Profile = () => {
  return (
    <>
    <main>
      <Header />
      <div className="bg-gradient-to-b from-gray-500 from-20% to-white to-100%">
        <div className="max-w-5xl mx-auto">
          {/* Cover Photo */}
          <div className="relative h-72 w-full bg-gray-200">
            <img
              src="/cover-photo.jpg"
              alt="Cover Photo"
              className="w-full h-full object-cover rounded-b-md"
            />
            <button className="absolute bottom-2 right-2 bg-white text-gray-800 py-1 px-2 rounded-md shadow-md">
              <div className="flex flex-row items-center gap-2">
                <FaCamera className="text-gray-800" /> Update Cover Photo
              </div>
            </button>
          </div>
        

          {/* Profile Photo */}
          <div className="relative -mt-16 ml-8 flex gap-4 justify-center">
            <div className="relative">
              <img
                src="/profile-photo.jpg"
                alt="Profile Photo"
                className="rounded-full border-4 border-white w-48 h-48 object-cover"
              />
              <button className="absolute bottom-2 right-2 bg-white p-2 rounded-full shadow-md hover:bg-gray-200">
                <FaCamera className="text-gray-800" />
              </button>
            </div>
            <div className="mt-20">
              <h1 className="text-2xl font-semibold">John Doe</h1>
              <p className="mt-2">
                Web Developer, Tech Enthusiast, Avid Reader. Lorem ipsum dolor
                sit amet, consectetur adipiscing elit. Duis aute irure dolor in
                reprehenderit.
              </p>
            </div>
            <div className="flex justify-center mt-4 absolute right-4 top-36">
            <button className="bg-gray-200 text-black py-2 px-4 rounded-md shadow-md">
                <div className="flex flex-row items-center gap-2">
                    <FaPencil className="text-black" /> Update Profile
                </div>
            </button>
          </div>
          </div>

          

          {/* Additional Features */}
          <div className="mt-6">
            <div className="flex justify-around border-t pt-4">
              <div className="text-center">
                <h2 className="text-xl font-bold">Posts</h2>
                <p className="text-gray-600">120</p>
              </div>
              <div className="text-center">
                <h2 className="text-xl font-bold">Followers</h2>
                <p className="text-gray-600">1.5K</p>
              </div>
              <div className="text-center">
                <h2 className="text-xl font-bold">Following</h2>
                <p className="text-gray-600">200</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </main>
      <hr></hr>
      <section>

      </section>
    </>
  );
};

export default Profile;
