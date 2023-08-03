import fullStar from '../../public/icons/full-star.png'
import emptyStar from '../../public/icons/empty-star.png'
import halfStar from '../../public/icons/half-star.png'
import Image from 'next/image'
import { Review } from '@prisma/client'
import { calulcateReviewRatingsAverage } from '../../utilities/calculateReviewRatingsAverage'

const Stars = ({reviews}: {reviews: Review[]}) => {
    const rating = calulcateReviewRatingsAverage(reviews);

    const renderStars = () => {
        const stars = [];

        for(let index=0; index<5; index++){
            const difference = parseFloat((rating - index).toFixed(1));
            if (difference >= 1){
                stars.push(fullStar);
            }
            else if (difference < 1 && difference > 0) {
                if (difference <= 0.2){
                    stars.push(emptyStar);
                }
                else if(difference > 0.2 && difference <= 0.6){
                    stars.push(halfStar);
                }
                else {
                    stars.push(fullStar);
                }
            }
            else {
                stars.push(emptyStar);
            }
        }
        return stars.map(star => <Image key={star.src} src={star} alt='' className='w-4 h4'></Image>)
    }
  return (
    <div className='flex items-center'>
        {renderStars()}
    </div>
  )
}

export default Stars