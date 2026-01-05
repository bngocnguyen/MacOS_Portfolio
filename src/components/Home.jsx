import { locations } from "#constants/index.js";
import clsx from "clsx";
import { useGSAP } from "@gsap/react";
import { Draggable } from "gsap/Draggable";
import useWindowStore from "#store/window.js";
import useLocationStore from "#store/location.js";

const projects = locations.work?.children ?? [];

const Home = () => {
  const { setActiveLocation } = useLocationStore();
  const { openWindow } = useWindowStore();

  const handledOpenProjectFinder = (project) => {
    setActiveLocation(project);
    openWindow("finder");
  };

  useGSAP(() => {
    Draggable.create('.folder');
  }, []);

  return <section id="home">
    <ul>
      {projects.map((prj) => (
        <li
          key={prj.id}
          className={clsx("group folder", prj.windowPosition)}
          onClick={() => handledOpenProjectFinder(prj)}
        >
          <img src="/images/folder.png" alt="folder" />
          <p>{prj.name}</p>
        </li>
      ))}
    </ul>
  </section>;
};

export default Home;
