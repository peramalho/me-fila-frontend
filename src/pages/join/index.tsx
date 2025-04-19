import { useAuth } from "../../providers/useAuth";
import { JoinForm } from "./JoinForm";
import { JoinSession } from "./JoinSession";

export function HostPage() {
  const { hostToken } = useAuth();

  if (hostToken) {
    return <JoinSession />;
  }

  return <JoinForm />;
}
