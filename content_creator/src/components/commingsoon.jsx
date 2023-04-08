import { Player } from '@lottiefiles/react-lottie-player';

function CommingSoon() {
  return (
    <div className="flex justify-center items-center">
      <Player
        src="https://assets2.lottiefiles.com/private_files/lf30_y9czxcb9.json"
        className="w-full md:max-w-2xl mx-auto"
        autoplay
        loop
      />
    </div>
  );
}

export default CommingSoon;
