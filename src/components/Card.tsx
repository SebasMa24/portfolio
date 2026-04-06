type CardProps = {
  image: string;
  title: string;
  description: string;
};

export default function Card({
  image,
  title,
  description,
}: CardProps) {
  return (
    <div className="bg-white dark:bg-gray-500 rounded-xl shadow-md hover:shadow-lg transition pt-4">
      {/* Imagen */}
      <div className="w-full h-32 flex justify-center items-center">
        <img
          src={image}
          alt={title}
          className="w-16 md:w-24 lg:w-32 object-cover object-center hover:scale-105 transition duration-300"
        />
      </div>

      {/* Contenido */}
      <div className="p-1 text-center gap-2 flex flex-col items-center">
        <h3 className="text-sm font-semibold text-gray-800 dark:text-white break-words">
          {title}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-300 break-words">
          {description}
        </p>
      </div>
    </div>
  );
}
