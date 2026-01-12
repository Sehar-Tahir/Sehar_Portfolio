
import CertificateCard from "./CertificateCard"

const Certificates = () => {
   const certificates = [
    {
      title: "Introduction to Frontend Development",
      description:
        "Learned the fundamentals of frontend development, how websites work, and the role of HTML, CSS, and JavaScript in building user interfaces.",
      platform: "Coursera",
      url: "https://coursera.org/share/fe2304603f2afb466c842ef9507312a3"
    },
    {
      title: "Introduction to Backend Development",
      description:
        "Learned the fundamentals of backend development. Understand the backend architectures and how backend systems support frontend.",
      platform: "Coursera",
      url: "https://coursera.org/share/551dc4f9b12601c60d528ceb07099482"
    },
    {
      title: "HTML & CSS in Depth",
      description:
        "Gained hands-on experience in building responsive layouts, modern UI designs, and well-structured web pages using HTML and CSS.",
      platform: "Coursera",
      url: "https://coursera.org/share/461550edee84913994b8a0f00f17c8f8"
    },
    {
      title: "Programming with JavaScript",
      description:
        "Developed a strong foundation in JavaScript including variables, functions, loops, DOM manipulation, and basic problem-solving.",
      platform: "Coursera",
      url: "https://coursera.org/share/386ed6838b7f848dccf56f1d38f1c90f"
    },
    {
      title: "React Basics",
      description:
        "Learned core React concepts such as components, props, state, JSX, and building dynamic and reusable user interfaces.",
      platform: "Coursera",
      url: "https://coursera.org/share/398e5d08cf71e51957a287e3bb829bad"
    },
    {
      title: "Version Control",
      description:
        "Understood Git and GitHub workflows including repositories, commits, branches, and collaboration using version control systems.",
      platform: "Coursera",
      url: "https://coursera.org/share/2243ff530467314c05e05b708b740e64"
    }
  ]

  return (
    <>
      <h2 className="transition-all duration-300 bg-white text-[#465697] dark:bg-[#171d32] dark:text-white text-2xl md:text-4xl font-bold text-center md:mt-20 mt-4">
        Certifications
      </h2>

      <div className="border-[#465697] border-b-2 w-40 mx-auto mt-3 mb-5 dark:border-white"></div>

      <div
        id="Certificates"
        className="flex flex-wrap justify-center items-center gap-6 mt-10 px-4 mb-5"
      >
        {certificates.map((cert, index) => (
          <CertificateCard
            key={index}
            title={cert.title}
            platform={cert.platform}
            description={cert.description}
            verifyUrl={cert.url}
          />
        ))}
      </div>
    </>
  )
}

export default Certificates

