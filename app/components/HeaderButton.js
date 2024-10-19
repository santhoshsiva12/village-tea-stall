"use client"
import { useNavigator } from "./useNavigator"
const HeaderButton = ({ item }) => {
    const navigate = useNavigator();
    return (
        <li className="">
            <button
                className="font-semibold hover:bg-black hover:bg-opacity-50 hover:transition hover:duration-300 hover:text-white px-2 py-1 rounded-lg"
                tabIndex={0}
                area-label="header button"
                onClick={() => navigate(item?.path)}
            >{item?.name}</button>
        </li>
    )
}

export default HeaderButton