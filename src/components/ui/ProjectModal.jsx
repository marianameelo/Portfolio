import { FaTimes } from "react-icons/fa";

export function ProjectModal({ title, videoSrc, githubUrl, liveUrl, onClose }) {
  return (
    <div
      className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div
        className="bg-[#04010a] border border-[#8B5CF6] rounded-xl max-w-2xl w-full overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center p-4 border-b border-[#8B5CF6]/30">
          <h3 className="text-white font-semibold text-lg">{title}</h3>

          <button onClick={onClose} className="text-white hover:text-[#8B5CF6]">
            <FaTimes size={20} />
          </button>
        </div>

        <video
          src={videoSrc}
          autoPlay
          loop
          muted
          playsInline
          controls
          className="w-full aspect-video"
        />
      </div>
    </div>
  );
}
