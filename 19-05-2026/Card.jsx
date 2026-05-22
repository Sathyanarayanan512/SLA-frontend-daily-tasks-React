function Card({children}){
  return (
    <>
      <div className="border border-gray-500 rounded-xl text-center p-3">
        <h1 className="h-20 m-2 border font-bold text-3xl flex items-center justify-center">Card Header</h1>
        <p className="m-2 font-mono text-2xl leading-relaxed tracking-tight flex items-center justify-center">Card body content</p>
        {children}
      </div>
    </>
  )
}

export default Card;
