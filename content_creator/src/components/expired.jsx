import { Player } from '@lottiefiles/react-lottie-player';
import { Link } from 'react-router-dom';

function PlanExpired() {
  return (
    <div className="flex flex-col justify-center items-center">
      <Player
        src="https://assets6.lottiefiles.com/packages/lf20_eHhh6e.json"
        className="w-full md:max-w-2xl mx-auto"
        autoplay
        loop
      />
      <p className="text-center text-xl mb-4">Your plan has ended. Please purchase a subscription.</p>
      <Link to="/plans" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        check out plans
      </Link>
    </div>
  );
}

export default PlanExpired;
