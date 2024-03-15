export default function MyList({ title, imgUrl, content }) {
    return (
        <div className="w-full flex border 
                        rounded hover:bg-gray-100">
            <div className="w-1/4 max-w-40">
                <img src={imgUrl} alt={title} />
            </div>
            <div className="w-3/4 px-5 py-3">
                <h1 className="text-2xl font-bold
                              ">{title}
                </h1>
                <p className='w-full'>
                    {content}
                </p>
                <p className="w-full flex justify-end
                             mt-5 font-bold">
                    <span>💖</span>
                    <span>좋아요</span>
                    <span>0</span>
                </p>
            </div>
        </div>
    )
}
