import ProfileImage from "./assets/Dimas_Sie Transkapman.jpg";

function App() {
  const links = [
    {
      title: "Github",
      url: "https://github.com/Dimasbro12",
    },
    {
      title: "Linkedin",
      url: "https://www.linkedin.com/in/dimas-dwi-380406269/",
    },
    {
      title: "Instagram",
      url: "https://www.instagram.com/dimasddpn/profilecard/?igsh=MTdyZjc0cTY2ZnJsMw==",
    },
  ];

  return (
    <>
      <div className="min-w-full flex justify-center mt-16">
        <div className="card bg-gradient-to-r from-pink-500 to-blue-500 w-96 shadow-xl border-2 border-black">
          <div className="card-body text-white">
            <div className="w-full text-center mb-5">
              <div className="avatar">
                <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring ring-offset-2">
                  <img src={ProfileImage} alt="Dimas Dwi Pramono Nugroho" />
                </div>
              </div>
              <p className="text-lg font-bold">Dimas Dwi Pramono Nugroho</p>
              <p className="text-base italic">Pembelajar Abadi</p>
            </div>

            <div className="w-full flex flex-col gap-y-5">
              {links.map((link, index) => (
                <a className="btn btn-primary hover:bg-pink-700 hover:text-black transition duration-300" href={link.url} target="_blank" key={index}>
                  {link.title}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
