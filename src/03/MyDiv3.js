export default function MyDiv3(props) {
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
          {`${props.d11} > ${props.d21} > ${props.d31}`}
        </p>
    </div>
  )
}
