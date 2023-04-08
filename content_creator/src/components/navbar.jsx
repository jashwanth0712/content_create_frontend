function Navbar() {

  return (
<div class="flex items-center justify-between z-50">
    <div class="z-50">
        <a href="../" class="font-bold z-50">Create</a>
    </div>
    <div class="hidden sm:flex items-center space-x-12 z-50">
        <a href="/plans" class="font-semibold">View Plans</a>
        <a href="/cms" class="font-semibold">content management</a>
        <a href="/content-select" class="border px-4 py-1.5 rounded-md border-black font-semibold">Contact us</a>
    </div>
    <div class="sm:hidden z-50">
        <a href="/content-select" class="border px-4 py-1.5 rounded-md border-black font-semibold">Contact us</a>
    </div>

</div>



  );
}
export default Navbar;