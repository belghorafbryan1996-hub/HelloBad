function Headvideo({ videoSrc }) {
  return (
    <div className="w-full flex justify-center px-4 py-4">
      <video
        src={videoSrc}
        autoPlay
        muted
        loop
        className="w-full sm:w-3/4 lg:w-1/2 rounded-xl border-2 border-white object-cover"
      />
    </div>
  )
}

export default Headvideo

