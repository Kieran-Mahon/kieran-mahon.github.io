import Link from "next/link";
import Project from "@/models/project";
import PortfolioCard from "@/components/portfolio-ui/portfoliocard";
import { Button } from "@/components/ui/button";

export default function Home() {

  const projects = [];
  projects.push(new Project(
    "Ninja Kiwi Event Viewer",
    "Research and Development Paper",
    [
      "Agile",
      "ASP.NET",
      "C#",
      "CSS",
      "Databases",
      "Git/GitHub",
      "HTML",
      "Jira",
      "Project Management",
      "Razor Pages",
      "Scrum",
      "Teamwork",
    ],
    "This is my final year R&D project at AUT. I was in a group with four others who worked with the New Zealand video game company Ninja Kiwi. We were tasked to design and produce an internal prototype of a web tool which allowed viewing of community events within their games. This system allowed easy access to see important information for upcoming and past events such as start/end times, the type of event, and the game its from. The project was built-in C# using ASP.NET (Razor Pages). I mainly worked on the event viewing area (shown below). This included taking in the data, filtering out unneeded data, sorting it and then generating the HTML code which displays it.",
    [
      {
        "name" : "Viewing Area",
        "url" : "/portfolio/EventViewer/img1.PNG"
      }
    ],
    []
  ));
  projects.push(new Project(
    "AT PT Viewer",
    "Personal Project",
    [
      "CSS",
      "Git/GitHub",
      "HTML",
      "JavaScript",
      "OpenStreetMaps",
      "Public APIs",
      "React",
    ],
    "This is a React-based website which shows Auckland Transport (AT) vehicle data. The data is sourced from AT's public API and the routes are drawn by OpenStreetMap's public API. The map is from Leaflet via React Leaflet. I completed this as a project to mess around with large data APIs within React. You can view all routes at once or click to view just one route. Viewing a route allows you to see it's route map and any stops it stops at. Hovering over a vehicle allows you to see more information about it.",
    [
      {
        "name" : "Gobal View Page",
        "url" : "/portfolio/ATPTViewer/img1.PNG"
      },
      {
        "name" : "Route View Page (Viewing MTIA Ferry)",
        "url" : "/portfolio/ATPTViewer/img2.PNG"
      }
    ],
    [
      {
        "name" : "GitHub",
        "url" : "https://github.com/Kieran-Mahon/AT_PT_Viewer"
      },
      {
        "name" : "Preview",
        "url" : "https://kieran-mahon.github.io/AT_PT_Viewer"
      }
    ]
  ));
  projects.push(new Project(
    "Last Alert",
    "Software Development Project Paper",
    [
      "Agile",
      "C#",
      "File Management",
      "Git/GitHub",
      "Project Management",
      "Scrum",
      "Teamwork",
      "Trello",
      "Unity",
    ],
    "This project was my group project (myself with 3 others) for my Software Development Practices paper. We designed and created a Unity timed escape game. The idea of the game is that you are stuck on a ship which you are trying to get off as it has been hit by an asteroid. The game is in 3D and uses a first-person controller. It also has multiple internal systems such as a saving and loading system, settings system, holding system (can pick up, move, and drop objects), time limit system, and different gravity system. The project was completed over a semester, and we completed multiple sprints via Scrum. We planned and ran the whole project as if it was a real development project.",
    [
      {
        "name" : "Start Screen",
        "url" : "/portfolio/LastAlert/img1.PNG"
      },
      {
        "name" : "Settings Screen",
        "url" : "/portfolio/LastAlert/img2.PNG"
      },
      {
        "name" : "In Game - Room 1",
        "url" : "/portfolio/LastAlert/img3.PNG"
      },
      {
        "name" : "In Game - Room 2",
        "url" : "/portfolio/LastAlert/img4.PNG"
      },
      {
        "name" : "In Game - Room 3",
        "url" : "/portfolio/LastAlert/img5.PNG"
      },
      {
        "name" : "In Game - Room 4",
        "url" : "/portfolio/LastAlert/img6.PNG"
      }
    ],
    [
      {
        "name" : "GitHub",
        "url" : "https://github.com/Kieran-Mahon/Last-Alert-Game"
      }
    ]
  ));
  projects.push(new Project(
    "Keep On Rolling",
    "Personal Project",
    [
      "C#",
      "Game Design",
      "Git/GitHub",
      "Unity",
    ],
    "I first started this project during my final years college as I wanted to learn more about Unity and the systems that would need to be learnt for developing a video game. In 2023, I picked up the project again to clean it and upgraded it to the latest version of Unity, I did this so it would fit the current Unity standards and would work with Unity's Universal Render Pipeline. This is a simple game where you are a ball and must roll down a hill without hitting anything on the way. It has a saving/loading system, a player skin/material system where you can switch and buy skins, a currency system, two game modes – an infinite one and a levelled one. This project taught me a lot about animations, particles, GUI, sound, lighting, and game design within the Unity Engine. Below are some images of the game. You can also play it online via clicking the “Play Online” button to the right.",
    [
      {
        "name" : "Start Screen",
        "url" : "/portfolio/KeepOnRolling/img1.PNG"
      },
      {
        "name" : "Customisation Screen",
        "url" : "/portfolio/KeepOnRolling/img2.PNG"
      },
      {
        "name" : "Best Score Game Mode",
        "url" : "/portfolio/KeepOnRolling/img3.PNG"
      },
      {
        "name" : "Levels Game Mode",
        "url" : "/portfolio/KeepOnRolling/img4.PNG"
      },
      {
        "name" : "Level Selection Screen",
        "url" : "/portfolio/KeepOnRolling/img5.PNG"
      },
      {
        "name" : "Level Completed Screen",
        "url" : "/portfolio/KeepOnRolling/img6.PNG"
      }
    ],
    [
      {
        "name" : "GitHub",
        "url" : "https://github.com/Kieran-Mahon/KeepOnRolling"
      },
      {
        "name" : "Play Game",
        "url" : "https://kieran-mahon.github.io/KeepOnRolling/"
      }
    ]
  ));
  projects.push(new Project(
    "Dungeon Crawl",
    "Program Design and Construction Paper",
    [
      "File Management",
      "Gameplay Logic",
      "Git/GitHub",
      "Java",
      "Java Swing",
    ],
    "This project was my PDC (Program Design & Construction) paper's main project. It is a Java text based game (which was then upgraded to a GUI based game) where the player has to move around a grid to get to the exit. There are enemies on the way and items which you can pick up. If you walk into an enemy you must fight them. There is a combat system, item collection system, saving system, and local leaderboard system. The game can be found on my GitHub (link to the right).",
    [
      {
        "name" : "Screen Screen",
        "url" : "/portfolio/DungeonCrawl/img1.PNG"
      },
      {
        "name" : "In Game - Level 1",
        "url" : "/portfolio/DungeonCrawl/img2.PNG"
      },
      {
        "name" : "In Game - Fighting An Enemy",
        "url" : "/portfolio/DungeonCrawl/img3.PNG"
      },
      {
        "name" : "In Game - Killed Enemy/Reward Screen",
        "url" : "/portfolio/DungeonCrawl/img4.PNG"
      },
      {
        "name" : "In Game - Found Item Screen",
        "url" : "/portfolio/DungeonCrawl/img5.PNG"
      },
      {
        "name" : "Leaderboard Screen",
        "url" : "/portfolio/DungeonCrawl/img6.PNG"
      },
    ],
    [
      {
        "name" : "GitHub",
        "url" : "https://github.com/Kieran-Mahon/Dungeon_Crawl"
      }
    ]
  ));
  projects.push(new Project(
    "Money Clicker Game",
    "Personal Project",
    [
      "JavaScript",
      "Code.org",
      "Game Design",
      "Game Logic",
    ],
    "This was one of the first projects I ever did. I learnt a lot from it, but it has a lot to improve on such as switching to JavaScript objects and simplifying the code. This project is a money clicker game built on Code.org using JavaScript. You are able to click the money button to earn money then buy buildings and upgrades to make money quicker. Some of the systems within the project include; a custom saving system, a customisation system (change colours), an achievement system, and a reset and start again system.",
    [
      {
        "name" : "Start Screen",
        "url" : "/portfolio/MoneyClicker/img1.PNG"
      },
      {
        "name" : "Saves Screen",
        "url" : "/portfolio/MoneyClicker/img2.PNG"
      },
      {
        "name" : "Customise Screen",
        "url" : "/portfolio/MoneyClicker/img3.PNG"
      },
      {
        "name" : "In Game ",
        "url" : "/portfolio/MoneyClicker/img4.PNG"
      },
      {
        "name" : "Loot Box Screen",
        "url" : "/portfolio/MoneyClicker/img5.PNG"
      },
      {
        "name" : "In Game - Achievements Screen",
        "url" : "/portfolio/MoneyClicker/img6.PNG"
      }
    ],
    [
      {
        "name" : "Play Game",
        "url" : "https://studio.code.org/projects/gamelab/4JtSmSBAIFgj_QVKwKbI8L_6YL0jxMB8WJBWvWjSTGI"
      }
    ]
  ));
  projects.push(new Project(
    "Networked Drawing Board",
    "Algorithm Design and Analysis Paper - Assessment 1",
    [
      "Git/GitHub",
      "Java",
      "Java Swing",
      "Network Programming",
      "TCP Sockets",
      "Threads",
    ],
    "This project was my answer to my first assignment for my Algorithm Design & Analysis paper. The assignment was about creating a networked program which uses a thread pool which processes tasks. I decided to create a pixel drawing board which uses a server to pass information of the board between clients. The project is on my GitHub (link to the right).",
    [
      {
        "name" : "Draw Screen",
        "url" : "/portfolio/NetworkedDrawingBoard/img1.PNG"
      }
    ],
    [
      {
        "name" : "GitHub",
        "url" : "https://github.com/Kieran-Mahon/ADA_Assessment1/"
      }
    ]
  ));
  projects.push(new Project(
    "Land Division",
    "Algorithm Design and Analysis Paper - Assessment 2",
    [
      "Dynamic Programming",
      "Greedy Programming",
      "Java",
      "Java Swing",
      "Recursion",
    ],
    "This project was my answer to my second assignment for my Algorithm Design & Analysis paper. The assignment was about using three different methods (Brute Force, Greedy, Exact) to find the highest profit for the division of a M by N piece of land. More information about the working of each method is on the project page on my GitHub (link to the right).",
    [
      {
        "name" : "Options Menu",
        "url" : "/portfolio/LandDivision/img1.PNG"
      },
      {
        "name" : "Subdivision Screen",
        "url" : "/portfolio/LandDivision/img2.PNG"
      }
    ],
    [
      {
        "name" : "GitHub",
        "url" : "https://github.com/Kieran-Mahon/ADA_Assessment2/"
      }
    ]
  ));

  //console.log(projects)
  return (
    <>
      <nav className="ml-auto hidden lg:flex gap-6 px-5 bg-[#333]">
        <Link
          href="#"
          className="nav-bar-item"
        >
          Home
        </Link>
        <Link
          href="#"
          className="nav-bar-item"
        >
          About Me
        </Link>
        <Link
          href="#"
          className="nav-bar-item"
        >
          Portfolio
        </Link>
        <Link
          href="#"
          className="nav-bar-item"
        >
          GitHub
        </Link>
      </nav>

      <div className="max-w-full min-h-full px-16">
        <div className="grid grid-cols-3 gap-5">
          {projects.map((project) => (
            <div key={project.name}>
              <PortfolioCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
