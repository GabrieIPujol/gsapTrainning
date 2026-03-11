const WheelForWheel = ({ img }:any) => {
    return (
        <div className="relative bg-white/80 rounded-3xl px-10 flex flex-col gap-4 items-center justify-center w-72">
            <div style={{backgroundImage: `url(${img})`}} className="h-32 w-32 bg-cover bg-center mt-1"></div>
            <div className="space-y-3 text-center text-black/80">
                <h1 className="font-bold">Wheel</h1>
                <p className="text-sm leading-6 opacity-80">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam, earum!</p>
            </div>
        </div>
    );
}
export default WheelForWheel