"use client"
import ThemeSwitcher from './components/ThemeSwitcher'
import Thumbnail from "./components/Thumbnail";
import styles from "./global.css";


export default function Home() {
  return (
    <div className=" h-screen w-screen  bg-white dark:bg-[#25273C]">
      <Thumbnail/>
      <section className=" absolute flex flex-col gap-10 top-[50%] h-[400px] left-[50%] translate-x-[-50%] translate-y-[-50%] w-96 " >
        <div className="flex justify-between">
          <h1 className="font-extrabold text-3xl tracking-widest text-white">
            TODO
          </h1>

          <div className="my-auto">
            <ThemeSwitcher />
          </div>
        </div>

        <div>
          <input 
            type="text"
             
          />
        </div>
      </section>
    </div>
  );
}
