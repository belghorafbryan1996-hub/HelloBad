function Headvideo ({ videoSrc }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', height: 'au' }}>
      
      <video
        src={videoSrc}
        autoPlay
        muted
        loop
        style={{ margin: '10px', borderRadius: '10px', border: '2px solid white', inset: 0, width: '40%', height: '40%', objectFit: 'cover' }}
      />
      
    </div>
  )          
}

export default Headvideo