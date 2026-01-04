export default function MovieItem({ title, image, isActive }) {
  return (
    <div className={`rounded-lg overflow-hidden w-36 h-48 transition-transform hover:scale-105 ${isActive ? 'border-2 border-red-500 scale-105' : 'opacity-70'}`}>
      <img src={image} alt={title} className="w-full h-full object-cover" />
    </div>
  );
}