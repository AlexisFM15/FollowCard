import "./App.css";
import { TwitterFollowCard } from "./Twitter-Follow-Card";

function App() {
  const users = [
    {
      userName: "polar",
      name: "Oso Polar",
      isFollowing: false,
    },
    {
      userName: "beard",
      name: "Oso Pardo",
      isFollowing: true,
    },
    {
      userName: "panda",
      name: "Oso Panda",
      isFollowing: false,
    },
  ];

  return (
    <section className="App">
      {users.map(({ userName, name, isFollowing }) => (
        <TwitterFollowCard
          key={userName}
          userName={userName}
          isFollowing={isFollowing}
        >
          {name}
        </TwitterFollowCard>
      ))}
    </section>
  );
}

export default App;
