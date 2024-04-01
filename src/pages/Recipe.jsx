import { Card } from "flowbite-react";
import "./../assets/syle.css";

const Recipe = () => {
  return (
    <>
      <div className="title-container">
        <h1 className="text-2xl font-bold mb-4">My Recipes</h1>
      </div>
      <div className="recipe-container">
        <Card
          className="max-w-sm"
          imgAlt="Meaningful alt text for an image that is not purely decorative"
          imgSrc="/img/noodles.jpg"
        >
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Spicy Chili Noodles
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            A delicious and fiery noodle dish packed with flavors and spices. Perfect for spice lovers!
          </p>
        </Card>
        <Card
          className="max-w-sm"
          imgAlt="Meaningful alt text for an image that is not purely decorative"
          imgSrc="/img/curry.jpg"
        >
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Hot and Spicy Chicken Curry
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            A mouthwatering chicken curry with a kick of heat. Enjoy the blend of spices and flavors in every bite.
          </p>
        </Card>
        <Card
          className="max-w-sm"
          imgAlt="Meaningful alt text for an image that is not purely decorative"
          imgSrc="/img/momo.jpeg"
        >
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Momos with Sesame Peanut Chutney
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            These dumplings filled with savory ingredients are served with a delicious sesame peanut chutney. A perfect appetizer or snack option.
          </p>
        </Card>
      </div>
    </>
  );
};

export default Recipe;