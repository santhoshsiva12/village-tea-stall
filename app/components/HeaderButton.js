"use client"
const HeaderButton = ({ item }) => {
    return (
        <li className="">
            <button
                className="font-semibold hover:bg-black hover:bg-opacity-50 hover:transition hover:duration-300 hover:text-white px-2 py-1 rounded-lg"
                role="button"
                tabIndex={0}
                area-label="header button"
                onClick={() => console.log(item?.path)}
            >{item?.name}</button>
        </li>
    )
}

export default HeaderButton