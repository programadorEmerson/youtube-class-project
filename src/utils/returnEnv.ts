import { EnvEnum } from '../pages/api/enviroments';

export const returnEnv = (data: EnvEnum): string => {
  const key = Object.keys(process.env).find((key) => key === data);
  if (!key) {
    return 'Env not found';
  }
  return process.env[key] as string;
};
