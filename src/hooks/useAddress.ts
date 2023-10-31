import {useTypedSelector} from "./useTypedSelector";

export const useAddress = () => {
    const address = useTypedSelector((state) => state.address
    )
    return address
}