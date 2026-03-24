import { forwardRef } from "react"


const Button = forwardRef(({ text, img, className }, ref) => {

    return (

    <button 
    className={` flex gap-2 py-4 rounded-[50px] items-center   ${className} z-10`}
    type="button"
    ref={ref}
    >
        {!img ? (
            <span className="">{text}</span>
        ) : (
            <>
                <span>{text}</span>
                <img src={img} alt="" className="w-[15px] h-[19px]"/>
            </>
        )}
    </button>
  )
})





export default Button