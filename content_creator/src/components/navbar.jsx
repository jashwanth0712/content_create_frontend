import Decore from "../assets/images/Decore.png"
function Navbar() {

  return (
<div class="flex items-center justify-between z-50">
    <div class="z-50">
        <a href="#" class="font-bold z-50">Create</a>
    </div>
    <div class="hidden sm:flex items-center space-x-12 z-50">
        <a href="#" class="font-semibold">View Plans</a>
        <a href="#" class="font-semibold">linkedin</a>
        <a href="#" class="font-semibold">Twitter</a>
        <a href="#" class="border px-4 py-1.5 rounded-md border-black font-semibold">Contact us</a>
    </div>
    <div class="sm:hidden z-50">
        <a href="#" class="border px-4 py-1.5 rounded-md border-black font-semibold">Contact us</a>
    </div>
    <img src={Decore} class="absolute right-0 top-0 w-30 h-auto z--100" alt=""/>

</div>



  );
}
export default Navbar;