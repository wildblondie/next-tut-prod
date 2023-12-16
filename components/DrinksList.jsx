import Link from 'next/link';
import Image from 'next/image';

const DrinksList = ({ drinks }) => {
  return (
    // Using Tailwind CSS for styling: setting up a grid layout with 2 columns on small screens and above
    <ul className='grid sm:grid-cols-2 gap-6 mt-6'>
      {drinks.map((drink) => {
        return (
          <li key={drink.idDrink}>
            <Link
              href={`/drinks/${drink.idDrink}`}
              className='text-xl font-medium'
            >
              {/* Container div for the image, set to be relative for absolute positioning of child elements */}
              <div className='relative h-48 mb-4'>
                {/* Next.js Image component for optimized images */}
                <Image
                  src={drink.strDrinkThumb} // Image source
                  fill // Enables responsive sizing of the image
                  sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw' // Responsive image sizing
                  alt={drink.strDrink} // Alt text for the image
                  className='rounded-md object-cover' // Tailwind classes for rounded corners and cover fit
                />
              </div>
              {/* Displaying the drink name */}
              {drink.strDrink}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default DrinksList;

// import Link from 'next/link';

// const DrinksList = ({ drinks }) => {
//   return (
//     <ul className='menu menu-vertical pl-0'>
//       {drinks.map((drink) => {
//         return (
//           <li key={drink.idDrink}>
//             <Link
//               href={`/drinks/${drink.idDrink}`}
//               className='text-xl font-medium'
//             >
//               {drink.strDrink}
//             </Link>
//           </li>
//         );
//       })}
//     </ul>
//   );
// };

// export default DrinksList;
