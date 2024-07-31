import { User, getUserContext } from "./ChildCreateContext";

const InnerComp = () => {
   const { users } = getUserContext();
  return (
    <div>
      {users.map((user: User) => (
        <p>{user.name}</p>
      ))}
    </div>
  );
};

export default InnerComp;