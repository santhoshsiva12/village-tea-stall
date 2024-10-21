import {headerArray, plaeceholderStrings} from '@/app/components/common/strings'
import logo from '@/app/public/logo.jpeg'
import Image from 'next/image'
import HeaderButton from './HeaderButton'
import InputSearch from './InputSearch'
const Header = () => {
  return (
    <section className="flex absolute top-10 w-[90%] mx-auto px-4 py-2 rounded-lg items-center justify-between text-base z-50">
        <div className="flex items-center justify-between w-[30%]">
        <div className="w-[50px]">
            <Image
            src={logo}
            alt={"village tea stall logo"}
            placeholder="blur"
            width={100}
            height={100}
            />
        </div>
        <div className="ml-4 w-[70%]">
           <div>
           {/* <input 
            type="search" 
            placeholder={plaeceholderStrings?.search}
            className="border border-1 w-full p-2 rounded-lg"/> */}
            <InputSearch placeholderValue={plaeceholderStrings?.search}/>
           </div>
        </div>
        </div>
        <ul className="flex bg-white rounded-lg px-3 py-2">
            {headerArray.map((item) => (
                   <HeaderButton item={item}
                   key={item?.id}
                   />
            ))}
        </ul>
    </section>
  )
}

export default Header