import { useAuth } from "@/hooks/useAuth";
import { Button } from "./ui/button";

const LogoutButton = () => {
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return <Button onClick={handleLogout}>Log out </Button>;
};

export default LogoutButton;
