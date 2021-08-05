import React, { useState, useEffect } from "react";
import env from "react-dotenv";
import { useAuth } from "../contexts/GlobalContext";
import { useTranslation } from "react-i18next";
import Backdrop from "./Backdrop";
import CommentsSection from "./comments/CommentsSection";
import play from "../assets/play.svg";
import pause from "../assets/pause.svg";
import close from "../assets/close.svg";

export default function PodcastInfo() {
  const {
    previewedPodcast,
    currentPodcast,
    setGlobalPodcast,
    setPreviewedPodcast,
    isPlaying,
    podcastURL,
  } = useAuth();
  const [isPlayingLocal, setIsPlayingLocal] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const x =
      currentPodcast && previewedPodcast.id == currentPodcast.id && isPlaying;
    setIsPlayingLocal(x);
  }, [currentPodcast, previewedPodcast, isPlaying]);

  return (
    <>
      <Backdrop clickAction={() => setPreviewedPodcast(null)} />
      <div className="border-box max-h-7-10 z-40 pb-32 pt-4 px-6 overflow-y-auto fixed  inset-x-0 bottom-0 bg-gray-800 text-white">
        <button
          onClick={() => setPreviewedPodcast(null)}
          className="border-0 bg-transparent absolute top-4 right-4 w-6"
        >
          <img src={close} alt="iks" />
        </button>
        <div className="flex-1">
          <h2 className="font-bold text-4xl mb-4">{previewedPodcast.title}</h2>
          <button
            onClick={(e) => setGlobalPodcast(previewedPodcast, e)}
            className="mb-3 border-0 bg-transparent"
          >
            <img
              className="h-6"
              src={isPlayingLocal ? pause : play}
              alt="play"
            />
          </button>
        </div>

        <p className="text-xl">{previewedPodcast.description}</p>
        <CommentsSection podcast={previewedPodcast} />
        {podcastURL && <div className="h-28" />}
      </div>
    </>
  );
}
