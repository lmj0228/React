import BoxOfficeData from "./BoxOffice.json";
import { useState } from "react";
import BoxOfficeTbody from "./BoxOfficeTbody";
import BoxOfficeThead from "./BoxOfficeThead";
import BoxOfficeInfo from "./BoxOfficeInfo";

export default function BoxOfficeTb() {
    //영화 목록을 json에서 가져오기
    const BoxList = BoxOfficeData.boxOfficeResult.dailyBoxOfficeList
    console.log("BoxList=", BoxList)

    //state 변수
    const [selMv, setSelMv] = useState();

    // const handleClick = (mv) => {
    //     console.log(mv)
    // 할당연산자로 state 변수 변경 불가 => 업데이트 함수 변경 
    // selMv = mv ;
    // setSelMv(mv);
    // }

    return (
        <div className="w-full flex flex-col 
                        justify-center items-center">
            <table className="w-4/5 border">
                <BoxOfficeThead />
                <BoxOfficeTbody BoxList={BoxList} setSelMv={setSelMv} />
            </table>
            <BoxOfficeInfo selMv={selMv} />
        </div>
    )
}
