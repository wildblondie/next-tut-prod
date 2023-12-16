import Link from 'next/link';
import drinkImg from './drink.jpg';
import Image from 'next/image';

// console.log(drinkImg);
// {
//   src: '/_next/static/media/drink.d8af6e1f.jpg',
//   height: 7952,
//   width: 5304,
//   blurDataURL: '/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdrink.d8af6e1f.jpg&w=5&q=70',
//   blurWidth: 5,
//   blurHeight: 8
// }

const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

const getSingleDrink = async (id) => {
  const res = await fetch(`${url}${id}`);

  if (!res.ok) {
    throw new Error('Failed to fetch drink...');
  }

  return res.json();
};

const SingleDrinkPage = async ({ params }) => {
  const data = await getSingleDrink(params.id);
  const title = data?.drinks[0]?.strDrink;
  const imgSrc = data?.drinks[0]?.strDrinkThumb;

  return (
    <div>
      <Link href='/drinks' className='btn btn-primary mt-8 mb-12'>
        back to drinks
      </Link>
      {/* <img src={drinkImg.src} /> */}
      {/* <Image src={drinkImg} className='w-48 h-48 rounded-lg' alt='' /> */}
      <Image
        src={imgSrc}
        width={300}
        height={300}
        className='w-48 h-48 rounded shadow-lg mb-4'
        priority
        alt=''
      />
      <h1 className='text-4xl mb-8'>{title}</h1>
    </div>
  );
};

export default SingleDrinkPage;
