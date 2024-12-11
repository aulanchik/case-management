const getEnvValue = (name: string) => import.meta.env[`VITE_APP_${name}`];

export default getEnvValue;
