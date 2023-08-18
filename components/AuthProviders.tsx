"use client";

import { getProviders, signIn } from "next-auth/react";
import { useEffect, useState } from "react";
import { Provider } from "@/common.types";
import Button from "./Button";

type Providers = Record<string, Provider>;

const AuthProviders = () => {
  const [providers, setProviders] = useState<Providers | null>(null);

  useEffect(() => {
    const fetchProviders = async () => {
      const res = await getProviders();

      setProviders(res);
    };

    fetchProviders();
  }, []);

  //! move it to form component

  if (providers) {
    return (
      <div>
        {Object.values(providers).map((provider: Provider, i) => (
          <button key={i} onClick={() => signIn()}>
            {provider.name}
          </button>
        ))}
      </div>
    );
  }
};

export default AuthProviders;
