import { useAuth } from "../../Providers/Auth";
import { Button } from "@material-ui/core";
const Dashboard = () => {
  const { Logout } = useAuth();
  return (
    <div>
      <h3>Dashboard</h3>
      <Button onClick={Logout} variant="outlined">
        Logout
      </Button>
    </div>
  );
};

export default Dashboard;
