import Link from "next/link"
import {ArrowUturnLeftIcon} from '@heroicons/react/24/solid';

function StudioNavbar(props:any) {
  return (
    <div>
        <div className="flex items-center justify-between p-5">
            <Link href="/" className="text-[#0071ff] flex items-center">
                <ArrowUturnLeftIcon className="h-6 w-6 text-[#0071ff] mr-2"/>
                Go back to website
            </Link>
        </div>
        <>{props.renderDefault(props)}</>
    </div>
  )
}

export default StudioNavbar