const Video = () => {
  return (
    <>
      <div className="flex justify-center items-center smd:w-screen smd:h-screen h-[22vh] bg-black p-4">
        <iframe
          className="rounded-lg smd:w-screen smd:h-screen h-[22vh] w-[90vw]"
          src="https://www.youtube.com/embed/5rVw16UHLNw?autoplay=1&mute=1"
          title="Spardha&#39;18 | Aftermovie"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </>
  );
};

export default Video;
