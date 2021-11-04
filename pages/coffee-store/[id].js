import { useRouter } from "next/router";
import { Link } from "next/link";

const CoffeeStore = () => {
  const router = useRouter();

  return (
    <div>
      <p>Coffee Store {router.query.id} </p>
      <Link to="/">
        <a>Back to Home</a>
      </Link>
    </div>
  );
};

export default CoffeeStore;
