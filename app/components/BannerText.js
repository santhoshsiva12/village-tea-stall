import {bannerStrings} from '@/app/components/common/strings'
const BannerText = () => {

  return (
    <div className="pt-72 px-10">
        <p className={`text-5xl font-bold text-amber-600`}>{bannerStrings.line1}</p>
        <p className="text-lg font-bold text-orange-800">{bannerStrings.line2}</p>
        <p className="text-base font-bold text-amber-300">{bannerStrings.line3}</p>
    </div>
  )
}

export default BannerText