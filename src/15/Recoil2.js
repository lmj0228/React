import Recoil3 from "./Recoil3" ;
import { useRecoilValue } from "recoil" ;
import { rcnt2 } from "./RecoilAtom";

export default function Recoil2() {
    const cnt2 = useRecoilValue(rcnt2) ;

    return (
        <div>
            Recoil2 : {cnt2}
            <Recoil3 />
        </div>
    )
}
