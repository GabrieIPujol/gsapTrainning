import WheelForWheel from "./WheelForWheel"
import Wheel1 from "../../public/assets/img/wheel.png"
import Wheel2 from "../../public/assets/img/wheel1.png"
import Wheel3 from "../../public/assets/img/wheel2.png"
import Wheel4 from "../../public/assets/img/wheel3.png"
import Wheel5 from "../../public/assets/img/wheel4.png"
import Wheel6 from "../../public/assets/img/wheel5.png"

const Wheel = () => {
  return (
    <div className="min-h-[100vh] poppins-text-sm bg-[#2f2f2f] text-[#b0b0b0]">
        <section className="relative h-screen section-1">
            <div className="flex w-full h-full items-center justify-center z-50 poppins-text text-6xl text-center">Don't buy a wheel<span className="absolute pt-26 pl-60 text-shadow-md text-shadow-neutral-700 z-10!">Buy security</span>
                <div className="flex justify-center items-center h-full">
                    <div style={{ backgroundImage: `url(${Wheel1})` }} className="absolute bg-cover bg-center h-96 w-96"></div>
                </div>
            </div>
        </section>
        <section className="h-screen relative">
            <div className="h-full flex items-center justify-center">
                <div className="flex-1/2">
                    <div className="absolute top-1/2 left-1/12 -translate-y-1/2 h-72 w-72 bg-[#b0b0b0] "></div>
                </div>
                <div className="flex-1/2 p-20 space-y-4">
                    <h2 className="text-4xl font-bold">Where each acceleration<br/>Bring more confidence</h2>
                    <p className="leading-7 opacity-50">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita culpa atque quidem! Accusamus molestiae consectetur similique voluptatibus qui, expedita aperiam dolores cupiditate minima dolore ducimus repudiandae? Deserunt incidunt harum tempora?</p>
                </div>
            </div>
        </section>
        <section className="relative flex items-center justify-center h-screen p-20">
            <div className="grid grid-cols-3 gap-14 place-content-center">
                <WheelForWheel img={Wheel2}/>
                <WheelForWheel img={Wheel3}/>
                <WheelForWheel img={Wheel1}/>
                <WheelForWheel img={Wheel4}/>
                <WheelForWheel img={Wheel5}/>
                <WheelForWheel img={Wheel6}/>
            </div>
        </section>
    </div>
  )
}

export default Wheel