import Image from "next/image";
import HomePage from "@/app/home/page";
// import { config } from '@fortawesome/fontawesome-svg-core'
// import '@fortawesome/fontawesome-svg-core/styles.css'
// config.autoAddCss = false;
// // import the library
// import { library } from '@fortawesome/fontawesome-svg-core';
// // import your icons
// import { faChevronRight,faSquareParking, faMugHot,faWifi, faComputer,faDumbbell,faGamepad ,faBolt,faPersonSwimming} from '@fortawesome/free-solid-svg-icons';

// library.add(
//   faChevronRight, faSquareParking, faMugHot,faWifi, faComputer,faDumbbell,faGamepad ,faBolt,faPersonSwimming
// );

// import RoomPage from "@/app/rooms/page"

export default function Home() {
  return (
    <div>
      <HomePage/>
      {/* <RoomPage/> */}
    </div>
  );
}
