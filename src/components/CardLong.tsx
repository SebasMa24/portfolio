type CardProps = {
  image: string;
  title: string;
  description: string;
  technology: string;
  frontend: string;
  backend: string;
  github: string;
};

export default function Card({
  image,
  title,
  description,
  technology,
  frontend,
  backend,
  github,
}: CardProps) {
  return (
    <div className="flex flex-col md:flex-row items-center bg-white dark:bg-gray-500 rounded-xl shadow-md hover:shadow-lg transition p-4">
      <img
        className="object-cover w-full rounded-xl h-64 md:h-full md:w-96 mb-4 md:mb-0 object-cover object-center hover:scale-105 transition duration-300"
        src={image}
        alt={title}
      ></img>
      <div className="flex flex-col justify-between md:p-4 leading-normal text-black dark:text-white">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-heading">
          {title}
        </h5>
        <div className="flex gap-1">
          {frontend && frontend.trim() !== "" && (
           <a href={frontend} className="text-body text-sm mb-1 hover:text-blue-600">
            Frontend
          </a>
          )}
           {backend && backend.trim() !== "" && (
          <a href={backend} className="text-body text-sm mb-1 hover:text-blue-600">
            Backend
          </a>
          )}
           {github && github.trim() !== "" && (
          <a href={github} className="text-body text-sm mb-1 hover:text-blue-600">
            GitHub
          </a>
          )}
        </div>
       
        <p className="text-body">
          {technology}
        </p>
        <p className="mb-6 text-body">
          {description}
        </p>
      </div>
    </div>
  );
}
