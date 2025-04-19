import { useAuth } from "../../providers/useAuth";
import { JoinForm } from "./JoinForm";
import { JoinSession } from "./JoinSession";

export function HostPage() {
  const { userToken } = useAuth();

  if (userToken) {
    return <JoinSession />;
  }

  return <JoinForm />;
}
