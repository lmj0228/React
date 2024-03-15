export default function MyDiv3({d11, d21, d31}) {
  return (
    <div className="w-4/5 h-2/3
                flex justify-center items-start
                bg-lime-500
                text-blue-50
                ">
        <p className="w-4/5 
                    flex justify-start
                    font-bold text-2xl
                    my-2
                    ">
          {`${d11} > ${d21} > ${d31}`}
        </p>
        
    </div>
  )
}
