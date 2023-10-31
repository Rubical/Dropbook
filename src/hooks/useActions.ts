import {addressSlice} from "../store/address.slice";
import {useDispatch} from "react-redux";
import {bindActionCreators} from "@reduxjs/toolkit";
import {useMemo} from "react";

const rootActions = {
    ...addressSlice.actions
}

export const useActions = () => {
    const dispatch = useDispatch()
    return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch]);
}