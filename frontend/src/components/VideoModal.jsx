import { Dialog, DialogContent, DialogTitle, DialogDescription } from "./ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

/**
 * VideoModal — pop-up that plays a campus video.
 * Supports direct mp4 URLs, YouTube and Vimeo embed URLs.
 */
export default function VideoModal({ open, onOpenChange, videoUrl }) {
  const isYouTube = /youtube\.com|youtu\.be/.test(videoUrl || "");
  const isVimeo = /vimeo\.com/.test(videoUrl || "");

  // Convert YouTube watch URL to embed
  const getYouTubeEmbed = (url) => {
    const m = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|v\/))([\w-]+)/);
    const id = m ? m[1] : "";
    return `https://www.youtube.com/embed/${id}?autoplay=1&rel=0&modestbranding=1`;
  };
  // Convert Vimeo URL to embed
  const getVimeoEmbed = (url) => {
    const m = url.match(/vimeo\.com\/(\d+)/);
    const id = m ? m[1] : "";
    return `https://player.vimeo.com/video/${id}?autoplay=1&title=0&byline=0&portrait=0`;
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="max-w-[min(94vw,1100px)] p-0 border-0 bg-black overflow-hidden"
        style={{ aspectRatio: "16 / 9" }}
      >
        <VisuallyHidden>
          <DialogTitle>Campus Film</DialogTitle>
          <DialogDescription>A short film of GD Goenka Signature School</DialogDescription>
        </VisuallyHidden>
        {open && videoUrl && (
          <>
            {isYouTube && (
              <iframe
                className="w-full h-full"
                src={getYouTubeEmbed(videoUrl)}
                title="Campus Film"
                frameBorder="0"
                allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
                allowFullScreen
              />
            )}
            {isVimeo && (
              <iframe
                className="w-full h-full"
                src={getVimeoEmbed(videoUrl)}
                title="Campus Film"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              />
            )}
            {!isYouTube && !isVimeo && (
              <video
                className="w-full h-full object-contain bg-black"
                src={videoUrl}
                controls
                autoPlay
                playsInline
              />
            )}
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
