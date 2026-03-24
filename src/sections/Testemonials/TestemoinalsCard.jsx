import ratingStarsWhite from "../../assets/ratingStarsWhite.svg"
import cardRatingStars from "../../assets/cardRatingStars.svg"

const TestemoinalsCard = ({name,review,img,main,i}) => {
  return (
    <div id={`testeCard-${i}`}  className={`flex flex-col gap-4 px-6 py-8 rounded-3xl card-shadow max-w-[21.875rem] min-h-[21.25rem] ${main ? `bg-primary-500` : `bg-white`}`}>
        <div className="flex justify-between items-start">
            <img src={img} alt="" />
            <img src={ main ? ratingStarsWhite : cardRatingStars} alt="" />
        </div>
        <h4 className={` text-h4 ${!main ? `text-black` : `text-white`}`}>{name}</h4>
        <p className={`text-h4 ${main ? `text-white` : `gray-700`}`}>{review}</p>
    </div>
  )
}
export default TestemoinalsCard